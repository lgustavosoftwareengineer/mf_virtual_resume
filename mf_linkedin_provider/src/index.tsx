import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LinkedInSection from './components/LinkedInSection';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <div className="p-8">
      <h1>LinkedIn Section</h1>
      <LinkedInSection />
    </div>
  </StrictMode>
);
