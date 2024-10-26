import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import './App.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchRecipies = async () => {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + API_KEY
      );
      const json = await response.json();
      setData(json.results);
    };    
    fetchRecipies().catch(console.error);
  }, []);

  return (
    <div className='App'>
      <div className='App-sidebar'>
        <Header />
        <Menu />
      </div>

      {/* Renders the nested routes */}
      <div className='App-content'>
        <Outlet context={{ data }} /> {/* Pass `data` to nested components if needed */}
      </div>
    </div>
  );
}

export default App;

