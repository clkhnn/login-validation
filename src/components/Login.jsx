import { useState } from "react";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback
} from "reactstrap";

function Login({ onLoginSuccess }) {
    const [form, setForm] = useState({
  email: "",
  password: "",
  terms: false,
});

const [errors, setErrors] = useState({
  email: "",
  password: "",
});

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
};


const handleChange = (event) => {
  const { name, value, type, checked } = event.target;

  const newValue = type === "checkbox" ? checked : value;

  setForm({
    ...form,
    [name]: newValue,
  });

  if (name === "email") {
    setErrors({
      ...errors,
      email: validateEmail(value)
        ? ""
        : "Lütfen geçerli bir email adresi girin.",
    });
  }

  if (name === "password") {
    setErrors({
      ...errors,
      password: validatePassword(value)
        ? ""
        : "Şifre en az 8 karakter, büyük harf, küçük harf, rakam ve özel karakter içermelidir.",
    });
  }
};

const isValid =
  validateEmail(form.email) &&
  validatePassword(form.password) &&
  form.terms;

const handleSubmit = (event) => {
  event.preventDefault();

  if (isValid) {
    onLoginSuccess();
  }
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
            onChange={handleChange}
            value={form.email}
            invalid={!!errors.email}
/>

{errors.email && (
  <FormFeedback>{errors.email}</FormFeedback>
)}
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Enter your password"
            type="password"
            onChange={handleChange}
            value={form.password}
            invalid={!!errors.password}
/>

{errors.password && (
  <FormFeedback>{errors.password}</FormFeedback>
)}
        </FormGroup>

        <FormGroup check>
          <Label check htmlFor="terms">
            <Input
              type="checkbox"
              name="terms"
              id="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            I agree to terms of service and privacy policy
          </Label>
        </FormGroup>

        <FormGroup className="text-center p-4">
          <Button color="primary" disabled={!isValid}>
            Sign In
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Login;
