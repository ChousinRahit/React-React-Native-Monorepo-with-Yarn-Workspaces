import React, { useState, Fragment } from 'react';
import './styles/User.web.css';
const Users = ({ users }) => {
  return (
    <div className="container">
      {users?.map(user => (
        <div className="card" key={user.id}>
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <div>
            <a href={`https://${user.website}`} target="_blank">
              {user.website}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
