const validateName = () => {
  const input = document.getElementById('name');
  const name = input.value;
  const reg =  /^([a-zA-z\s]{4,32})$/
  return (name === '') ? (alert('Please enter your name'), input.focus(), false)
      : !(reg.test(name)) ? alert('Please enter a valid name. Name cannot include numbers or special characters.')
      : name;
};

const validateUserName = () => {
  const input = document.getElementById('username');
  const username = input.value;
  const reg = /^([a-zA-Z0-9_$\s]{4,15})$/;
  return (username === '') ? (alert('Please provide a username'),  input.focus(), false)
      : !(reg.test(username)) ? (alert('Please provide a valid username. Username can only include alphabets, numbers, (_) and "$". Username should be between 4-15 characters long.'), input.focus(), false)
      : username;
};

const validateEmail = () => {
  const input = document.getElementById('email');
  const email = input.value;
  const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return (email === '') ? (alert('Please enter your Email address'), input.focus(), false)
      : !(reg.test(email)) ? (alert('Please provide a valid Email address e.g "your-email@example.com".'), input.focus(), false)
      : email;
};

const validatePassword = () => {
  const input = document.getElementById('password');
  const password = input.value
  const reg = /^([a-zA-Z0-9_$\s]{6,15})$/;
  return (password === '') ? (alert('Please provide a password'), input.focus(), false)
      : !(reg.test(password)) ? (alert('Please provide a valid password. Password can only include alphabets, numbers, (_) and "$". Password should be between 6-15 characters long.'), input.focus(), false)
      : password;
};

const validatePassword2 = () => {
  const input = document.getElementById('password2');
  const password2 = input.value;
  const password1 = validatePassword();
  return (password2 === '') ? (alert('Field cannot be left blank'), input.focus(), false)
      : (password2 !== password1) ? (alert('Password does not match'), input.focus(), false)
      : password2
};

const validateForm = (e) => {
  const name = validateName();
  const username = validateUserName();
  const email = validateEmail();
  const password = validatePassword();
  const password2 = validatePassword2();
  if (!name || !username || !email || !password || !password2) {
    return false;
  };
  return {
    name,
    username: `@${username}`,
    email,
    password,
  };
};

const form = document.getElementById('form1');
form.addEventListener('submit', (e) => {
  const valid = validateForm();
  return (valid) ? alert(`Name: ${valid.name}
Username: ${valid.username}
Email: ${valid.email}
Password: ${valid.password}      
`) : e.preventDefault();
});

