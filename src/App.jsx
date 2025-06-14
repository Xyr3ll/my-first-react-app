import React, { useState } from 'react';

function ShowName() {
  const [name, setName] = useState(false);
  const toggleName = () => {
    setName(!name);
  }

  return (
    <div>
      <h1>{name && <h1>Hello, Neil </h1>}</h1>
      <button onClick={toggleName}>
        {name ? 'Hide Name' : 'Show Name'}
      </button>
    </div>
  );
}

function ShowPassword() {
  const [password, setPassword] = useState(false);

  return (
    <div>
      <input type={password ? "text" : "password"} /> 
      <button onClick={() => setPassword(!password)}>
        {password ? 'Show Password' : 'Hide Password'}
      </button>
    </div>
  );
}

function ShowLike() {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
  }

  return (
    <div>
      <h3>{like ? "❤️" : "🤍"}</h3>
      <button onClick={toggleLike}>
        {like ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
}

function SwitchDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <h3>{darkMode ? "🌙 Dark Mode" : "🌞 Light Mode" }</h3>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }
      </button>
    </div>
  )
}

function App() {
  return (
    <div>
      <SwitchDarkMode />
    </div>
  )
}

export default App
