import axios from 'axios';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = process.env.REACT_APP_API_URL;

// Internal APIs

/**
 *
 * @param {object} body - the body object contains all the required
 * key value pairs for signing up the user
 * @returns - returns an object with the login token
 */
export const signUp = async (body) => {
  try {
    const url = `${apiUrl}/rest-auth/registration/`;
    const data = await axios.post(url, body);
    localStorage.setItem('user', JSON.stringify({ username: body.username }));
    return data;
  } catch (err) {
    return { error: err.response };
  }
};

/**
 *
 * @param {object} body - the body object contains all the required
 * key value pairs for logging a user
 * @returns - returns an object with the login token
 */
export const login = async (body) => {
  try {
    const url = `${apiUrl}/rest-auth/login/`;
    const data = await axios.post(url, body);
    localStorage.setItem('user', JSON.stringify({ username: body.username }));
    return data;
  } catch (err) {
    return { error: err.response };
  }
};
