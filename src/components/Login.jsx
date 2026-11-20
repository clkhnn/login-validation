
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

function Login({ onLoginSuccess }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Giriş Yap</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
        </FormGroup>

        <FormGroup check>
          <Label check htmlFor="terms">
            <Input
              type="checkbox"
              name="terms"
              id="terms"
            />
            I agree to terms of service and privacy policy
          </Label>
        </FormGroup>

        <FormGroup className="text-center p-4">
          <Button color="primary" type="submit">
            Sign In
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Login;
