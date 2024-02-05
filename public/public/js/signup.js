
const signupFormHandler = async (event) => {
  event.preventDefault();
  

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();


  if (!username || !password || password.length < 8) {

  }

  if (username && password && password.length >= 8) {
      const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
      });

    
      if (response.ok) {
          document.location.replace('/');
      } else {
        
      }
  }
};


document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);


document
  .querySelector('#signupBtn')
  .addEventListener('click', signupFormHandler);