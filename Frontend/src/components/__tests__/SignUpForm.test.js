import React from "react";
import AxiosMock from 'axios';

import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Button from "react-bootstrap/Button";

import SignUpForm from "../../components/Auth/SignUpForm";

afterEach(cleanup);

describe("SignUpForm", () => {

  const newUser =
  {
    email: "test@test",
    name: "New",
    password: "123"
  };

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    expect(getByTestId("signup-form")).toBeInTheDocument();
  });

  it("renders a sugn up button", () => {
    const { getByText } = render(<Button>Sign Up</Button>);
    expect(getByText("Sign Up")).toBeVisible("form-btn");
  });

  it("renders a clickable button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Clickable</Button>
    );
    const button = getByText("Clickable");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("validates that email is not blank", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("signup-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(AxiosMock.post).not.toHaveBeenCalled();
  });

  it("validates that name is not blank", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("signup-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(AxiosMock.post).not.toHaveBeenCalled();
  });

  it("validates that password cannot be blank", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("signup-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(AxiosMock.post).not.toHaveBeenCalled();
  });

  it.skip("can successfully login after trying to submit an empty email and password", () => {
    AxiosMock.post = jest.fn().mockResolvedValue({ data: user });
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

    expect(AxiosMock.post).toHaveBeenCalledTimes(1);
    expect(AxiosMock.post).toHaveBeenCalledWith(
      "/login", { "email": "test@test", "password": "123" }
    );
  });
});