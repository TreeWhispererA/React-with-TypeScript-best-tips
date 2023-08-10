import * as React from 'react';
import './style.css';
//import components
import UserList from './components/UserList';

export interface User {
  name: string;
  phone: string;
}

export default function App() {
  const arr = [
    {
      name: 'John Doe',
      phone: '+1 252 370 9447',
    },
    {
      name: 'Caleb Martin',
      phone: '+1 252 370 9446',
    },
  ];

  return (
    <div>
      <UserList users={arr} />
    </div>
  );
}
