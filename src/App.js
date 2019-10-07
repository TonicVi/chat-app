import React from 'react';
import Contact from './components/Contact';

function App() {
  const robert = {
    name: "Robert Stevens",
    avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    online: true
    
  }
  const michel = {
    name: "Michel Rodrigues",
    avatar: "https://randomuser.me/api/portraits/lego/6.jpg",
    online: true
  }
  const jocelyne = {
    name: "Jocelyne Flafi",
    avatar: "https://randomuser.me/api/portraits/women/58.jpg",
    online: false
  }
  return (
    <div>
      <Contact {...robert} />
      <Contact {...michel} />
      <Contact {...jocelyne} />
    </div>
  );
}

export default App;
