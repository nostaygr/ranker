import history from './history';

export function signup(name, email, password) {
  const form = new FormData();
  form.append('name', name);
  form.append('email', email);
  form.append('password', password);

  fetch('http://localhost:3000/v1/auth', {
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: form,
  })
    .then((response) => {
      if (response.status === 200) {
        login(email, password);
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      alert('failed to signup');
    });
}

export function login(email, password) {
  const form = new FormData();
  form.append('email', email);
  form.append('password', password);

  fetch('http://localhost:3000/v1/auth/sign_in', {
    method: 'POST',
    body: form,
  })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('access-token', response.headers.get('access-token'));
        localStorage.setItem('client', response.headers.get('client'));
        localStorage.setItem('uid', response.headers.get('uid'));
        localStorage.setItem('login', 'true');
        response.json().then(responseJson => {
          localStorage.setItem('user_id', responseJson.data.id);
        });
        history.push('/');
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      alert('failed to signin');
    });
}

export function createSubject(title) {
  const form = new FormData();
  form.append('title', title);

  fetch('http://localhost:3000/subjects', {
    headers: {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    },
    method: 'POST',
    body: form,
  })
    .then((response) => {
      if (response.status === 204) {
        location.reload();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      alert('failed to create subject');
    });
}
