import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GitHubSection from './components/GitHubSection';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <div className="p-8">
      <GitHubSection />
    </div>
  </StrictMode>
);
