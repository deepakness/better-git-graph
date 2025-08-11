import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import PrivacyPolicy from './components/PrivacyPolicy';
import './index.css';

function Router() {
  const path = window.location.pathname;
  
  if (path === '/privacy') {
    return <PrivacyPolicy />;
  }
  
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
