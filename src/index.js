/* eslint-disable no-console */
import './index.css';
import getUsers from './api/userApi';

console.log('getting users');

getUsers().then((users) => {
  let usersBody = '';

  users.forEach((user) => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="delete-user">Delete user</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`;
  });

  window.document.getElementById('users').innerHTML = usersBody;
});
