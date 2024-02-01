// App.jsx
import React from 'react';
import TotalAmount from './components/TotalAmount/TotalAmount';

const App = () => {
  return (
    <div>
      <h1>Exemple d'utilisation de props</h1>
      <TotalAmount amount={50} />
      <TotalAmount amount={100} />
      <TotalAmount amount={200} />
    </div>
  );
};

export default App;
