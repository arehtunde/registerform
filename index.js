const validateName = () => {
  const input = document.getElementById('name');
  const name = input.value;
  const reg = /[a-zA-Z]/g;
  /*if (name === '' || !(reg.test(name))) {
    input.focus();
    alert('Please enter your name');
    return false;
  };
  return name;*/
  return (name === '') ? alert('Please enter your name')
      : !(reg.test(name)) ?
};

const validateUserName = () => {
  const input = document.getElementById('username');
  const username = input.value;
  const reg = /[_a-z0-9]/g;
  if (username === '' || !(reg.test(username))) {
    input.focus();
    alert('Please provide a username.');
    return false;
  };
  return username;
};

const validateEmail = () => {
  const input = document.getElementById('email');
  const email = input.value;
  const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!(reg.test(email)) || email === '') {
    input.focus();
    return false;
  };
  return email;
};

const validatePassword = () => {
  const input = document.getElementById('password');
  const password = input.value
  const reg = /[_a-zA-Z0-9]/g;
  if (password === '' || !(reg.test(password))) {
    input.focus();
    return false;
  };
  return password;
};

const validatePassword2 = () => {
  const input = document.getElementById('password2');
  const password2 = input.value;
  const password1 = validatePassword();
  if (password2 === '' || password2 !== password1) {
    input.focus();
    return false;
  };
  return password2;
};

const validateForm = (e) => {
  const name = validateName();
  const username = validateUserName();
  const email = validateEmail();
  const password = validatePassword();
  const password2 = validatePassword2();
  if (!name || !username || !email || !password || !password2) {
    //e.preventDefault();
    return false;
  };
  return {
    name,
    username,
    email,
    password,
  };
};