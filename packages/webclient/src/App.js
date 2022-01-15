import logo from './logo.svg';
import './App.css';
import { Users, Context } from '@monorepo-yarn/common';
import { useContext, useEffect } from 'react';

function App() {
  const {
    state: { users },
    getUsers,
  } = useContext(Context);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Users users={users} />
    </div>
  );
}

export default App;
