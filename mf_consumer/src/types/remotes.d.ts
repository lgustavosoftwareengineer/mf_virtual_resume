/**
 * Type declarations for Module Federation remote modules
 * 
 * These declarations enable TypeScript to recognize the remote modules
 * that are loaded at runtime via Module Federation.
 */

declare module 'linkedin' {
  import { FC } from 'react';
  const LinkedInSection: FC;
  export default LinkedInSection;
}

declare module 'github' {
  import { FC } from 'react';
  const GitHubSection: FC;
  export default GitHubSection;
}

