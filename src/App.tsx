import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';

const App = () => {
  const users: IUser[] = []
  return (
    <div>
      <Card variant = {CardVariant.primary} width='200px' height='200px'>
          <button>Кнопка</button>
          <div>gdfsgfds</div>
      </Card>
      <UserList users = {users} />
    </div>
  );
};

export default App;