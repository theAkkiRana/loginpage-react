import LoginForm from '../src/components/LoginForm/Login';
import Header from '../src/components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './i18n';

function App() {
  return (
    <div className="mt-2 p-2">
      <Header/>
      <div className="container-fluid"></div>
        <div className="ng-scope">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 p-4 mt-2 data-div">
                          <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>          
      </div>
  )
}

export default App;
