import logo8Tech from '/LogoPNG-removebg-preview.png'

function App() {
  return (
    <div className="min-h-screen text-white" style={{fontFamily: 'Inter, sans-serif', background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #e94560 100%)', margin: '0', padding: '0'}}>
      
      {/* Header Corrigido 8Tech */}
      <header className="w-full py-6 flex flex-col items-center justify-center bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full flex justify-center mb-4">
          <img 
            src={logo8Tech} 
            alt="8Tech Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>
        
        <nav className="flex flex-wrap gap-8 justify-center items-center">
          <a href="#services" className="text-xs uppercase tracking-widest font-bold text-purple-400 hover:text-white transition-all">Serviços</a>
          <a href="#about" className="text-xs uppercase tracking-widest font-bold text-purple-400 hover:text-white transition-all">Sobre</a>
          <a href="#contact" className="text-xs uppercase tracking-widest font-bold text-purple-400 hover:text-white transition-all">Contato</a>
        </nav>
      </header>

      {/* Seção Serviços */}
      <section id="services" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transformação Digital & Inteligência de Negócios
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Especialistas em otimizar processos com Microsoft Power Platform e Dynamics 365. Criamos soluções personalizadas que automatizam tarefas e transformam seus dados em decisões estratégicas.
          </p>
          <div className="bg-purple-600/20 border border-purple-500/40 rounded-lg p-4 mb-8">
            <p className="text-white font-semibold">
              <span className="text-purple-300">✨</span> Mais de 2 anos de expertise entregando soluções complexas de CRM e ERP
            </p>
          </div>
          <a href="https://wa.me/5583981901739" target="_blank" rel="noreferrer" className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 px-10 py-4 rounded-lg hover:from-yellow-700 hover:to-yellow-600 transition-all transform hover:scale-105 font-semibold shadow-lg">
            Falar com Especialista
          </a>
        </div>
      </section>

      {/* Seção Sobre - Expertise Real */}
      <section id="about" className="py-24 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Expertise & Trajetória
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Especialista em <span className="text-purple-400 font-bold">Dynamics 365</span>, 
            <span className="text-purple-400 font-bold"> Power Platform</span> e 
            <span className="text-purple-400 font-bold"> RPA com Power Automate</span>, 
            com sólido background em <span className="text-purple-400 font-bold">C#</span>, 
            <span className="text-purple-400 font-bold">.NET</span> e 
            <span className="text-purple-400 font-bold">JavaScript</span>. 
            Após mais de 2 anos entregando soluções complexas na <span className="text-purple-400 font-bold">Alfapeople</span>, 
            fundei a <span className="text-white font-bold">8Tech</span> para oferecer consultoria ágil em 
            automação e transformação digital de ponta.
          </p>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Contato
          </h2>
          <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto border border-purple-500/20">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <p className="text-gray-400 text-sm">Telefone:</p>
                <p className="text-gray-300">83-98190-1739</p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-gray-400 text-sm">E-mail:</p>
                <p className="text-gray-300">contato8techsolutions@gmail.com</p>
              </div>
              <a href="https://wa.me/5583981901739" target="_blank" rel="noreferrer" className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition-all font-bold">
                Enviar Mensagem no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;