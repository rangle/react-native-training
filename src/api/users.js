import Parse from 'parse/react-native';

export function create(username, password, email, displayName) {
  const user = new Parse.User();

  user.set('username', username);
  user.set('password', password);
  user.set('email', email);
  user.set('displayName', displayName);

  return new Promise((resolve, reject) => {
    user.signUp(null, {
      success: response => resolve({
        id: response.id,
        username: response.get('username'),
        displayName: response.get('displayName'),
      }),
      error: (response, err) => reject(err),
    });
  });
}

export function login(username, password) {
  return new Promise((resolve, reject) => {
    Parse.User.logIn(username, password, {
      success: response => resolve({
        id: response.id,
        username: response.get('username'),
        displayName: response.get('displayName'),
      }),
      error: (response, err) => reject(err),
    });
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    Parse.User.logOut({
      success: response => resolve(response),
      error: (response, err) => reject(err),
    });
  });
}
