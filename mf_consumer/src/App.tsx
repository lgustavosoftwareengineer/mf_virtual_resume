import { Suspense } from 'react';
import LinkedInSection from 'linkedin';
import GitHubSection from 'github';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center gap-4">
          <img
            src="/profile-image.jpg"
            alt="Luiz Gustavo"
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 shadow-md"
          />

          <div>
            <h1 className="text-4xl font-bold text-gray-800">Luiz Gustavo</h1>
            <p className="text-xl text-gray-600 mt-2">Software Engineer - Virtual Resume</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LinkedIn Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Profile</h2>
            <Suspense fallback={<LoadingSpinner />}>
              <LinkedInSection />
            </Suspense>
          </section>

          {/* GitHub Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Code Portfolio</h2>
            <Suspense fallback={<LoadingSpinner />}>
              <GitHubSection />
            </Suspense>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600">
          <p>Developed with Module Federation and React</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
