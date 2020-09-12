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

/**
 *
 * @param {string} slug - unique string for the snippet to be fetched
 * @returns - Returns an object with data for that particular snippet
 */
export const getSnip = async (slug) => {
  try {
    const url = `${apiUrl}/snip/${slug}/`;
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err.response);
  }
};

/**
 *
 * @param {string} slug - unique string for the snippet to be updated
 * @param {object} body - Updated object of the snippet
 */
export const updateSnip = async (slug, body) => {
  try {
    const url = `${apiUrl}/snip/${slug}/`;
    const data = await axios.put(url, body);
    return data;
  } catch (err) {
    console.log(err.response);
  }
};

/**
 *
 * @param {object} body - data of the snippet to be saved in the backend
 * @returns - Returns an object with data for that particular snippet
 */
export const saveSnip = async (body) => {
  try {
    const url = `${apiUrl}/snip/`;
    const data = await axios.post(url, body);
    return data;
  } catch (err) {
    console.log(err.response);
  }
};

// External API

/**
 *
 * @param {object} formData - data of the form to be sent to the API server
 * @returns - Object containing the URL and other information of the hosted Image
 */
export const uploadImage = async (formData) => {
  try {
    const token = process.env.REACT_APP_IMGBB_API_KEY;
    const url = `${corsAnywhere}${process.env.REACT_APP_IMAGEBB_URL}?key=${token}`;
    const options = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const {
      data: { data },
    } = await axios.post(url, formData, options);
    return data;
  } catch (res) {
    return { err: res.response.data.error.message };
  }
};
