import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const userObj = {
  id:1,
  userName:"John Doe"
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App userData={userObj} />
  </React.StrictMode>
);
