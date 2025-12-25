import React from 'react';

const LinkedInSection: React.FC = () => {
  const profileData = {
    name: 'Luiz Gustavo',
    title: 'Software Engineer',
    location: 'Brazil, Pernambuco',
    education: 'UPE - Garanhuns',
    email: 'luizgustavoupe@gmail.com',
    linkedin: 'lgustavosoftwareengineer',
    currentRole: 'Frontend Engineer at SK Intertainment, Inc.',
    experience: '4+ years',
    skills: ['JavaScript', 'TypeScript', 'React', 'Remix', 'NestJS', 'GraphQL', 'Prisma'],
  };

  return (
    <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          LI
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">LinkedIn</h2>
          <p className="text-sm text-gray-600">Professional Profile</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{profileData.name}</h3>
          <p className="text-gray-600">{profileData.title}</p>
        </div>
        
        <div className="bg-white rounded p-4 shadow-sm">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Current Role:</span> {profileData.currentRole}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Experience:</span> {profileData.experience}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Location:</span> {profileData.location}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Education:</span> {profileData.education}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Email:</span>{' '}
            <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">
              {profileData.email}
            </a>
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Key Skills</h4>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <a
          href={`https://www.linkedin.com/in/${profileData.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
        >
          View Full Profile →
        </a>
      </div>
    </div>
  );
};

export default LinkedInSection;

