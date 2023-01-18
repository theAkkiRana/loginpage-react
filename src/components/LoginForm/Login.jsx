import React, { Component } from 'react';
import AppServices from '../../services/AppServices';
import Notification from "../Notification/Notification";

class LoginForm extends Component { 

    constructor (props) {
        super(props);
        this.state = {
            showNotification: false,
            notification: {
                variant: '',
                message: ''
            },
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            formErrors: {email: '', password: '', firstName: '', lastName:''},
            emailValid: false,
            passwordValid: false,
            firstNameValid: false,
            lastNameValid: false,
            formValid: false
        }
      }
    
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }

      showErrorMsg(attr) {
            if(!this.state[attr+"valid"] && this.state[attr].length){
                return (<div className="error-msg">{this.state.formErrors[attr]}</div>)
            }
      }
    
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let lastNameValid = this.state.lastNameValid;
        let firstNameValid = this.state.firstNameValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : 'email id is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 8 && value.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.{8,}).*$/) && value.indexOf(this.state.firstName) < 0 && value.indexOf(this.state.lastName) < 0;
            fieldValidationErrors.password = passwordValid ? '': 'password should be atleast 8 character long, should not have first or last name and should have 1 uppercase and 1 lowercase character';
            break;
        case 'firstName':
            firstNameValid = value.match(/^([a-z]+)$/i);
            fieldValidationErrors.firstName = firstNameValid ? '': 'firstName should have only alphabets';
            break;
        case 'lastName':
            lastNameValid = value.match(/^([a-z]+)$/i);
            fieldValidationErrors.lastName = lastNameValid ? '': 'lastName should have only alphabets';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        firstNameValid: firstNameValid,
                        lastNameValid: lastNameValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.firstNameValid && this.state.lastNameValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'input-error');
      }

      resetNotification() {
        this.setState({"showNotification": false}); 
        this.setState({"notification": {
            variant: '',
            message: ''
        }}); 
      }

      fetchUser = () => {
        this.resetNotification();
        AppServices.fetchUsers().then((response) => {
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
      }

      addUser = (event) => {
        event.preventDefault();
        const user = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password
        }
        this.setState({"serviceCallInProgress" : true});
        var oThis= this;
        AppServices.addUser(user).then((response) => {
            console.log(response);
            this.setState({"notification" : {
                "variant" : "success",
                "message" : "user created with id : "+ response._id
            }});
            this.setState({"showNotification": true}); 
        }).catch((error)=>{
            console.log(error);
        }).finally(function(){
            oThis.setState({"serviceCallInProgress" : false});
            setTimeout(oThis.fetchUser, 4000);
        })
      }

render () {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h2>SIGN UP</h2>
            </div>
            <div className="panel-body">
                
                {this.state.showNotification ? <Notification notification={this.state.notification}/> : <></>}
                <form className="demoForm" onSubmit={this.addUser}>
                    <div className="panel panel-default">
                    </div>

                    <div className={`form-group  ${this.errorClass(this.state.formErrors.firstName)}`} data-testid="firstName">
                    <label htmlFor="firstName">First name</label>
                    <input type="firstName" required className="form-control col-xxs-3" name="firstName"
                        data-testid="firstNameInput"
                        placeholder="firstName"
                        value={this.state.firstName}
                        onChange={this.handleUserInput}  />
                    {this.showErrorMsg("firstName")}
                    </div>
                    

                    <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`} data-testid="lastName">
                    <label htmlFor="lastName">Last name</label>
                    <input type="lastName" required className="form-control" name="lastName"
                        placeholder="lastName"
                        value={this.state.lastName}
                        onChange={this.handleUserInput}  />
                    {this.showErrorMsg("lastName")}
                    </div>

                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`} data-testid="email">
                    <label htmlFor="email">Email address</label>
                    <input type="email" required className="form-control" name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUserInput}  />
                    {this.showErrorMsg("email")}
                    </div>
                    
                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`} data-testid="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserInput}  />
                    {this.showErrorMsg("password")}
                    </div>
                    
                    <button type="submit" data-testid="submit-button" className="btn btn-primary" disabled={!this.state.formValid || this.serviceCallInProgressserviceCallInProgress}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

}

export default LoginForm;