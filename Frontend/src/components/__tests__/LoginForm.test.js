import React from "react";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Button from "react-bootstrap/Button";

import LoginForm from "../../components/Auth/LoginForm";

afterEach(cleanup);

describe("LoginForm", () => {
  const user =
  {
    email: "test@test",
    password: "123"
  };

  const onSave = jest.fn();
  const onSubmit = jest.fn();
  const loginUser = jest.fn();

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    expect(getByTestId("login-form")).toBeInTheDocument();
  });

  it("renders a login button", () => {
    const { getByText } = render(<Button>Login</Button>);
    expect(getByText("Login")).toBeVisible("form-btn");
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
        <LoginForm />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("login-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it("validates that password cannot be blank", () => {
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
    const { getByTestId, getByPlaceholderText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    fireEvent.click(getByTestId("login-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();

    fireEvent.change(getByPlaceholderText("Enter email"), {
      target: { value: user.email }
    });

    fireEvent.click(getByTestId("login-btn"));
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();

    fireEvent.change(getByPlaceholderText("Enter email"), {
      target: { value: user.email }
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: user.password }
    });

    fireEvent.click(getByTestId("login-btn"));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("test@test", "123");
  });

});