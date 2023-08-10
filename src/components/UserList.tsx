import * as React from 'react';
import UserCard from './UserCard';

import { User } from '../App';

const UserList = ({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map((user) => (
        <div>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
