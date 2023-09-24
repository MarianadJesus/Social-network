function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const password = document.createElement('input');
  const buttonSing = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const img = document.createElement('img');
  const appName = document.createElement('h1');

  appName.textContent = '{HOPPER}';
  title.textContent = 'Login';
  inputEmail.placeholder = 'Write your email';
  buttonSing.textContent = 'Sign in';
  password.placeholder = 'Password';
  buttonLogin.textContent = 'Log in';
  img.src = 'router/cubo.jpg';
  img.alt = 'logo';

  form.append(inputEmail, password, buttonSing);

  buttonReturn.textContent = 'Return to home';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(img, appName, title, form, buttonLogin, buttonReturn);
  return section;
}

export default login;
