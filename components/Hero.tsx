import logo from 'figma:asset/8bf9306281aa64a8dbaee4629b299149f053197b.png';

export function Hero() {
  const scrollToWorkshop = () => {
    const workshopElement = document.getElementById('workshop');
    if (workshopElement) {
      const navHeight = 80; // Hauteur approximative de la navigation
      const targetPosition = workshopElement.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block p-6 border-4 border-blue-400 rounded-lg" style={{ boxShadow: '0 0 20px rgba(96, 165, 250, 0.8), 0 0 40px rgba(96, 165, 250, 0.5), inset 0 0 20px rgba(96, 165, 250, 0.2)' }}>
          <img src={logo} alt="Back to the Steam" className="h-48 mx-auto" />
        </div>
        <h1 className="text-5xl md:text-6xl">
          Back to the Future.<br />
          Powered by Steam.
        </h1>
        <button 
          onClick={scrollToWorkshop}
          className="border-2 border-white px-12 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider"
        >
          ENTER WORKSHOP
        </button>
      </div>
    </section>
  );
}