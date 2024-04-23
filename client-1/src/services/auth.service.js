import axios from "axios";

const API_URL = "http://localhost:5001/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "auth/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("firstName", response.data.user.firstName)
          localStorage.setItem("lastName", response.data.user.lastName)
          localStorage.setItem("Email", response.data.user.email)
          localStorage.setItem("Password", response.data.user.password)
          localStorage.setItem("id", response.data.user._id)
          // localStorage.setItem("role", response.data.user.roles[0])
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
        console.log("hiihioh")
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, firstName, lastName, email, password) {
    console.log("hiii", username, firstName, lastName, email, password)
    return axios.post(API_URL + "auth/register", {
      username,
      firstName,
      lastName,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
