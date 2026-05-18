function Home() {  
  return (
    <>
      {/* HOME page for the project (Introduction) */}
      <div className="min-h-screen flex items-center justify-center ">
        
        {/* Floating Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 p-12 text-center">
          
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold text-indigo-300 tracking-wide mb-6 drop-shadow-lg">
            Welcome to Employees Pro
          </h1>

          {/* Tagline (10 words) */}
          <p className="text-lg text-gray-200 font-medium max-w-xl mx-auto drop-shadow-md">
            Manage employees 
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
