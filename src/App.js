import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'; // Importing Navbar component

const App = () => {
  const [cart, setCart] = useState([]); // Cart state to hold cart items
  
  return (
    <Navbar />
  );
};

export default App;
