import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';


class LoginForm extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          formErrors: {email: '', password: '', firstName: '', lastName:''},
          emailValid: false,
          passwordValid: false,
          firstNameValid: false,
          lastname: false,
          formValid: false
        }
      }
    
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
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
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 8 && value.match(/^([A-Z][a-z]+)+$/i) && value.indexOf("akshat") < 0;
            fieldValidationErrors.password = passwordValid ? '': ' should be atleast 8 character long, should not have first or last name and should have 1 uppercase and 1 lowercase character';
            break;
        case 'firstName':
            firstNameValid = value.match(/^([a-z]+)$/i);
            fieldValidationErrors.password = firstNameValid ? '': ' should have only alphabets';
            break;
        case 'lastName':
            lastNameValid = value.match(/^([a-z]+)$/i);
            fieldValidationErrors.password = passwordValid ? '': ' should have only alphabets';
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
        return(error.length === 0 ? '' : 'has-error');
      }

render () {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h2>SIGN UP</h2>
                (t('welcome.LABEL_FIRST_NAME'))
            </div>
            <div className="panel-body">
                <form className="demoForm">
                    <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                    </div>

                    <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
                    <label htmlFor="firstName">First name</label>
                    <input type="firstName" required className="form-control" name="firstName"
                        placeholder="firstName"
                        value={this.state.firstName}
                        onChange={this.handleUserInput}  />
                    </div>

                    <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
                    <label htmlFor="lastName">Last name</label>
                    <input type="lastName" required className="form-control" name="lastName"
                        placeholder="lastName"
                        value={this.state.lastName}
                        onChange={this.handleUserInput}  />
                    </div>

                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" required className="form-control" name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUserInput}  />
                    </div>
                    
                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserInput}  />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

}

export default LoginForm;