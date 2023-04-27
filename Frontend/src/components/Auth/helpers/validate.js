const validate = function (email, name, password) {
  if (name === "") {
    return ("Please enter your name");
  } else if (email === "") {
    return ("Please enter your email");
  } else if (password === "") {
    return ("Please enter your password");
  } else {
    return("");
  }
}

exports.validate = validate;