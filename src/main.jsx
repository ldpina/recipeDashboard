import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // App acts as the layout
import Dashboard from './components/Dashboard';
import './index.css'
import RecipeDetails from './components/recipeDetail';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} /> {/* Dashboard as the main route */}
          <Route path="recipe/:id" element={<RecipeDetails />} />
          <Route path="search" element={<Dashboard />} />
          <Route path="about" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
