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
      if (response.ok) {
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
      if (response.ok) {
        localStorage.setItem('access-token', response.headers.get('access-token'));
        localStorage.setItem('client', response.headers.get('client'));
        localStorage.setItem('uid', response.headers.get('uid'));
        localStorage.setItem('login', 'true');
        response.json().then((responseData) => {
          localStorage.setItem('userId', responseData.data.id);
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

export const setLogout = function () {
  localStorage.setItem('login', 'false');
};

export function createSubject(_this, title, userId) {
  const form = new FormData();
  form.append('title', title);
  form.append('is_public', false);

  fetch(`http://localhost:3000/users/${userId}/subjects`, {
    headers: {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    },
    method: 'POST',
    body: form,
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((responseData) => {
          _this.setState({
            subjects: responseData,
          });
        });
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      alert('failed to create subject');
    });
}

export function getSubjects(_this, userId) {
  fetch(`http://localhost:3000/users/${userId}/subjects/`, {
    headers: {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    },
  }).then((response) => {
    if (response.ok) {
      response.json().then((responseData) => {
        _this.setState({
          subjects: responseData,
        });
      });
    } else {
      localStorage.setItem('login', 'false');
      history.push('/login');
    }
  });
}

export function getSubject(_this, subjectId) {
  fetch(`http://localhost:3000/subjects/${subjectId}`, {
    headers: {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    },
  }).then((response) => {
    if (response.status === 200) {
      response.json().then((responseData) => {
        _this.setState({
          subject: responseData,
        });
      });
    } else {
      history.push('/');
    }
  });
}

export function deleteSubject(subjectId) {
  fetch(`http://localhost:3000/subjects/${subjectId}`, {
    headers: {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    },
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        location.reload();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      alert('failed to delete subject');
    });
}

export function createItem(_this, name, subjectId) {
  const form = new FormData();
  form.append('name', name);

  fetch(`http://localhost:3000/subjects/${subjectId}/items`, {
    headers: {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    },
    method: 'POST',
    body: form,
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((responseData) => {
          _this.setState({
            items: responseData,
          });
        });
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      alert('failed to create item');
    });
}

export function getItems(_this, subjectId) {
  fetch(`http://localhost:3000/subjects/${subjectId}/items`, {
    headers: {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    },
  }).then((response) => {
    if (response.ok) {
      response.json().then((responseData) => {
        _this.setState({
          items: responseData,
        });
      });
    } else {
      localStorage.setItem('login', 'false');
      history.push('/login');
    }
  });
}
