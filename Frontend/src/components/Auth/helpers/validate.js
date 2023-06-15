// if valid returns false
const validate = function (value, name) {
  if (value === "") {
    return (`Please enter your ${name}`);
  } else {
    return("");
  }
};

exports.validate = validate;