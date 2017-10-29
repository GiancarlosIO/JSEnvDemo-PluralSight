import axios from 'axios';

const get = url => axios({
  method: 'GET',
  url,
});

const onSuccess = response => Promise.resolve(response.data);
const onError = error => console.log('error to get users', error.response); // eslint-disable-line no-console

const getUsers = () => get('users').then(onSuccess).catch(onError);

export default getUsers;
