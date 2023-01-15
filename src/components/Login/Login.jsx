import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    
return (
    <div className="panel panel-default">
        <div className="panel-heading">
            <h2>SIGN UP</h2>
        </div>
        <div className="panel-body">
            <Form className="mt-2">

            <Form.Group className="mb-3" controlId="formBasicFirstNamw">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstname" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Enter last name" />
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    </div>
)
}

export default Login;