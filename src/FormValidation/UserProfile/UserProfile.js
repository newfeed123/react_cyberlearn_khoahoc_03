import React, { Component } from "react";
import "./UserProfile.css";
import Swal from 'sweetalert2'
class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConfirm: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConfirm: "",
    },
  };

  handleChangeValue = (event) => {
    // console.log(name, value);
    let { name, value, type } = event.target;
    this.setState({
      values: { ...this.state.values, [name]: value },
    });

    let newValue = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = name + " is required !!!";
    } else {
      newErrors[name] = "";
    }

    if (type === "email") {
      const re =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!re.test(value)) {
        newErrors[name] = name + " is invaild !";
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "passWordConfirm") {
      if (value === newValue["passWord"]) {
        newErrors[name] = "";
      } else {
        newErrors[name] = name + "is valid";
      }
    }

    this.setState({
      values: newValue,
      errors: newErrors,
    });

    // if(value === ''){
    //     this.setState({
    //         errors: {...this.setState.errors, [name]: 'Không được bỏ trống'}
    //     })
    // } else {
    //     this.setState({
    //         errors: {...this.setState.errors, [name]: ''}
    //     })
    // }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let { values, errors } = this.state;

    let valid = true;
    let profileContent = ""
    let errorsContent = ""

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
      profileContent += `
        <p class="text-left"><b>${key}</b> ${values[key]}</p>
      `
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        errorsContent += `
            <p class="text-left"><b>${key}</b> is valid</p>
        `
        valid = false;
      }


    }
    if(!valid){
        Swal.fire({
            title: 'Your profile!',
            html: errorsContent,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return 
    }
    Swal.fire({
        title: 'Your profile!',
        html: profileContent,
        icon: 'error',
        confirmButtonText: 'Cool'
    })
  };

  render() {
    return (
      <div
        className="container-fluid "
        style={{
          backgroundColor: "#EEE",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={this.handleSubmit} className="w-50 bg-white p-5 m-5">
          <h1 className="text-center mt-0">User profile</h1>

          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.firstName}
                  onChange={this.handleChangeValue}
                  name="firstName"
                  type="text"
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
                <span className="text text-danger">
                  {this.state.errors.firstName}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.lastName}
                  onChange={this.handleChangeValue}
                  name="lastName"
                  type="text"
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
                <span className="text text-danger">
                  {this.state.errors.lastName}
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.userName}
                  onChange={this.handleChangeValue}
                  name="userName"
                  type="text"
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>userName</label>
                <span className="text text-danger">
                  {this.state.errors.userName}
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  type="email"
                  value={this.state.values.email}
                  onChange={this.handleChangeValue}
                  name="email"
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
                <span className="text text-danger">
                  {this.state.errors.email}
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passWord}
                  onChange={this.handleChangeValue}
                  name="passWord"
                  type="password"
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Password</label>
                <span className="text text-danger">
                  {this.state.errors.passWord}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passWordConfirm}
                  onChange={this.handleChangeValue}
                  name="passWordConfirm"
                  type="password"
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passWordConfirm</label>
                <span className="text text-danger">
                  {this.state.errors.passWordConfirm}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                style={{ fontSize: 25 }}
                className="btn bg-dark btn-success w-100"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserProfile;
