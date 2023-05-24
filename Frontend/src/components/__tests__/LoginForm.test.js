import React from "react";
import axios from 'axios';

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Button from "react-bootstrap/Button";

import LoginForm from "../../components/Auth/LoginForm";
import { validate } from "../../components/Auth/helpers/validate";

afterEach(cleanup);



describe("LoginForm", () => {


  const user =
  {
    email: "test@test",
    password: "123"
  };

  const onSave = jest.fn();

  it.skip("renders without crashing", () => {    
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    expect(getByTestId("login-form")).toBeInTheDocument();
  });

  it.skip("renders a login button", () => {
    const { getByText } = render(<Button>Login</Button>);
    expect(getByText("Login")).toBeVisible("form-btn");
  });

  it.skip("renders a clickable button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Clickable</Button>
    );
    const button = getByText("Clickable");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it.skip("validates that email is not blank", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("login-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it.skip("validates that password cannot be blank", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("login-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it("can successfully login after trying to submit an empty email and password", () => {    

    axios.post = jest.fn().mockResolvedValue({});
    const navigate = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    fireEvent.click(getByTestId("login-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(getByTestId("error-message")).toHaveTextContent('Please enter your email')

    fireEvent.change(getByPlaceholderText("Enter email"), {
      target: { value: user.email }
    });

    fireEvent.click(getByTestId("login-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(getByTestId("error-message")).toHaveTextContent('Please enter your password')

    fireEvent.change(getByPlaceholderText("Enter email"), {
      target: { value: user.email }
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: user.password }
    });

    fireEvent.click(getByTestId("login-btn"));

    // axios.post.toHaveBeenCalledWith(expectedParms);
  //   expect(axios.post).toHaveBeenCalledWith(
  //     "/login", {"email": "test@test", "password": "123"}
  // );
  // axios.post.mockResolvedValueOnce(() => Promise.navigate())

  });

});