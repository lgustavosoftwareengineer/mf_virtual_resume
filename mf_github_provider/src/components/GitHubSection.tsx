import React from 'react';

const GitHubSection: React.FC = () => {
  const profileData = {
    username: 'lgustavosoftwareengineer',
    name: 'Luiz Gustavo',
    bio: 'Software engineer with focus in JavaScript/TypeScript technologies',
    location: 'Brazil, Pernambuco',
    followers: 14,
    following: 5,
    repositories: 57,
    stars: 56,
    highlights: [
      'Frontend Engineer at SK Intertainment, Inc.',
      'Bachelor\'s Degree in Software Engineering from UPE',
      '4+ years of experience',
      'Specialized in React, Remix, NestJS, and GraphQL',
    ],
    pinnedRepos: [
      { name: 'react-random-anime-card-visualizator', language: 'TypeScript' },
      { name: 'pokedex-with-infinite-scroll', language: 'TypeScript' },
      { name: 'electron-note-app', language: 'JavaScript' },
      { name: 'giftcard-website', language: 'CSS' },
      { name: 'read-it-later', language: 'Dart' },
      { name: 'react-native-walkthrough', language: 'TypeScript' },
    ],
  };

  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg p-6 border-l-4 border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          GH
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">GitHub</h2>
          <p className="text-sm text-gray-600">Code Repository</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">@{profileData.username}</h3>
          <p className="text-gray-600">{profileData.bio}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded p-3 shadow-sm text-center">
            <p className="text-2xl font-bold text-gray-800">{profileData.repositories}</p>
            <p className="text-xs text-gray-600">Repositories</p>
          </div>
          <div className="bg-white rounded p-3 shadow-sm text-center">
            <p className="text-2xl font-bold text-gray-800">{profileData.stars}</p>
            <p className="text-xs text-gray-600">Stars</p>
          </div>
          <div className="bg-white rounded p-3 shadow-sm text-center">
            <p className="text-2xl font-bold text-gray-800">{profileData.followers}</p>
            <p className="text-xs text-gray-600">Followers</p>
          </div>
          <div className="bg-white rounded p-3 shadow-sm text-center">
            <p className="text-2xl font-bold text-gray-800">{profileData.following}</p>
            <p className="text-xs text-gray-600">Following</p>
          </div>
        </div>
        
        <div className="bg-white rounded p-4 shadow-sm">
          <h4 className="font-semibold text-gray-800 mb-2">Career Highlights</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            {profileData.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Pinned Repositories</h4>
          <div className="grid grid-cols-2 gap-2">
            {profileData.pinnedRepos.map((repo, index) => (
              <div key={index} className="bg-white rounded p-3 shadow-sm">
                <p className="font-medium text-gray-800 text-sm">{repo.name}</p>
                <p className="text-xs text-gray-500 mt-1">{repo.language}</p>
              </div>
            ))}
          </div>
        </div>
        
        <a
          href={`https://github.com/${profileData.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-center w-full"
        >
          View GitHub Profile →
        </a>
      </div>
    </div>
  );
};

export default GitHubSection;

