
import $ from 'jquery';

const Auth = {
  isAuthenticated: false,
  token: null,

  login(email, password, successHandler, errorHandler) {

    $.ajax({
      url: "http://budget.vagrant/api/session/login",
      method: "post",
      dataType: "json",
      data: {
        email: email,
        password: password
      },
      success: (data) => {
        this.isAuthenticated = true;
        this.token = data.token;
        successHandler(data);
      },
      error: (data) => {
        errorHandler(data.responseJSON);
      }
    });

  },
  logout(cb) {

    this.isAuthenticated = false;
    this.token = null;

    // we'll attempt to logout from the server, but we're already logged out
    // from the client side and no more protected data can be fetched
    $.ajax({
      url: "http://budget.vagrant/api/session/logout",
      method: "delete",
      dataType: "json",
      success: (data) => {
        cb(data);
      },
      error: (data) => {
        cb(data.responseJSON);
      }
    });

  }
};

export default Auth;
