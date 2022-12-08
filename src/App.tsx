import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div>
      <Card variant = {CardVariant.primary} width='200px' height='200px'>
          <button>Кнопка</button>
          <div>gdfsgfds</div>
      </Card>
    </div>
  );
};

export default App;