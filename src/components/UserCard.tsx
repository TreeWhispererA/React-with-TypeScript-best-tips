import * as React from 'react';

import { User } from '../App';

const UserCard = ({ user }: { user: User }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.phone}</h3>
    </div>
  );
};

export default UserCard;
