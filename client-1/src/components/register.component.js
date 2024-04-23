import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

// Validation functions
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Please enter a valid email address.
      </div>
    );
  }
};

const username = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Username must be between 3 and 20 characters.
      </div>
    );
  }
};

const name = (value, field) => {
  if (value.length < 2 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        {field} must be between 2 and 20 characters.
      </div>
    );
  }
};

const password = value => {
  if (!/(?=.*[a-z])/.test(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Password must contain at least one lowercase letter.
      </div>
    );
  }
  if (!/(?=.*[A-Z])/.test(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Password must contain at least one uppercase letter.
      </div>
    );
  }
  if (!/(?=.*\d)/.test(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Password must contain at least one digit.
      </div>
    );
  }
  if (!/(?=.*[!@#$%^&*()_+\\[\]{};':"\\|,.<>\\/?-])/.test(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Password must contain at least one special character.
      </div>
    );
  }
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Password must be between 6 and 40 characters long.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      successful: false,
      message: ""
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.firstName,
        this.state.lastName,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Sign Up</h3>
                <Form
                  onSubmit={this.handleRegister}
                  ref={c => {
                    this.form = c;
                  }}
                >
                  <div>
                    <div className="form-group">
                      <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        validations={[required, username]}
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        validations={[required, name.bind(this, 'First Name')]}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        validations={[required, name.bind(this, 'Last Name')]}
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        validations={[required, email]}
                        placeholder="abc@gmail.com/abc@yahoo.com"
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        validations={[required, password]}
                        placeholder="Password"
                      />
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </div>

                  {this.state.message && (
                    <div className="form-group">
                      <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                      this.checkBtn = c;
                    }}
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
