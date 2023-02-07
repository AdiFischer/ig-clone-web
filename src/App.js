import Feed from './components/Feed';
import './App.css';
import Login from './components/Login';
import { useState, useEffect } from 'react';


function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    const _user = sessionStorage.getItem("user");
    if (_user !== "") {
      setUser(_user);
    }
  }, []);
  return (
    <main className="App">
      <div className="App-header">
        {!user
          ? (<Login setUser={setUser} />)
          : (
            <>
              <Feed setUser={setUser} />
            </>
          )}
      </div>
    </main>
  );
}
export default App;