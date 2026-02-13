
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  GraduationCap, 
  Archive, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  FileText,
  MousePointerClick,
  ChevronRight,
  School
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { MOCK_SUBJECTS, FILIERES } from '../constants';
import { SubjectCard } from '../components/SubjectCard';

export const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/explore?q=${encodeURIComponent(query)}`);
    }
  };

  const recentSubjects = MOCK_SUBJECTS.slice(0, 3);

  const steps = [
    {
      icon: <Search className="text-blue-500" size={24} />,
      title: "Recherchez",
      description: "Utilisez des mots-clés ou les filtres par filière et niveau."
    },
    {
      icon: <MousePointerClick className="text-blue-500" size={24} />,
      title: "Sélectionnez",
      description: "Consultez l'aperçu pour vérifier que c'est le bon sujet."
    },
    {
      icon: <Download className="text-blue-500" size={24} />,
      title: "Téléchargez",
      description: "Récupérez le PDF gratuitement en un clic."
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Sophisticated Background */}
      <div className="relative overflow-hidden bg-white border-b border-gray-50">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] bg-blue-50 rounded-full opacity-40 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-blue-50 rounded-full opacity-40 blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm border border-blue-100 animate-fade-in-up">
                <School size={14} />
                <span>Portail Académique Officiel • UNA</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Accédez à votre <br />
                <span className="text-una-blue bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">succès académique.</span>
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                La banque numérique de sujets n°1 pour les étudiants de Nangui Abrogoua. 
                Des milliers d'examens, TD et rattrapages à portée de clic.
              </p>

              {/* Main Search Bar */}
              <form 
                onSubmit={handleSearch} 
                className="max-w-2xl relative group animate-fade-in-up" 
                style={{ animationDelay: '0.3s' }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[24px] blur opacity-15 group-hover:opacity-30 transition duration-1000 group-focus-within:opacity-40"></div>
                <div className="relative flex items-center bg-white border border-gray-100 rounded-[22px] shadow-2xl p-2 pr-2">
                  <div className="flex-grow flex items-center pl-5">
                    <Search className="text-gray-400 mr-4" size={24} />
                    <input
                      type="text"
                      placeholder="Quelle matière révisez-vous aujourd'hui ?"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full py-4 text-gray-700 font-medium bg-transparent outline-none text-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-una-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 active:scale-95 flex items-center space-x-3"
                  >
                    <span>Rechercher</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>

              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-500">Accès Libre</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-500">Documents Vérifiés</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-500">Format PDF</span>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="lg:w-2/5 hidden lg:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-gray-100 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-10">
                    <div className="space-y-2">
                      <div className="h-3 w-20 bg-blue-100 rounded-full"></div>
                      <div className="h-3 w-32 bg-gray-50 rounded-full"></div>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                      <BookOpen size={24} />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                        <div className={`w-10 h-10 rounded-xl mr-4 flex items-center justify-center ${i === 1 ? 'bg-red-50 text-red-500' : i === 2 ? 'bg-emerald-50 text-emerald-500' : 'bg-amber-50 text-amber-500'}`}>
                          <FileText size={20} />
                        </div>
                        <div className="flex-grow">
                          <div className="h-2 w-24 bg-gray-200 rounded-full mb-2"></div>
                          <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-300">
                          <Download size={14} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-50 flex justify-between items-center">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(j => (
                        <div key={j} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm">
                          U
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">+2.5K Actifs</span>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 flex items-center space-x-4 animate-bounce-slow">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900 uppercase">Validé</p>
                    <p className="text-[10px] text-gray-500">Par l'Université</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Category Access */}
      <section className="py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Que recherchez-vous ?</h2>
            <div className="h-1.5 w-16 bg-una-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/explore?type=EXAMEN" className="group bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Archive size={40} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-red-500 transition-colors">Examens</h3>
              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                Les sessions principales et uniques classées par UE et année académique.
              </p>
              <div className="mt-auto flex items-center text-xs font-bold text-red-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Explorer <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>

            <Link to="/explore?type=TD" className="group bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <BookOpen size={40} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-500 transition-colors">Travaux Dirigés</h3>
              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                Toutes les fiches de TD pour maîtriser vos cours au quotidien.
              </p>
              <div className="mt-auto flex items-center text-xs font-bold text-emerald-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Explorer <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>

            <Link to="/explore?type=RATTRAPAGE" className="group bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <GraduationCap size={40} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-amber-500 transition-colors">Rattrapages</h3>
              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                Préparez vos sessions de rattrapage avec les sujets des années précédentes.
              </p>
              <div className="mt-auto flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Explorer <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured/Recent Subjects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Ajouts récents</h2>
              <p className="text-gray-500 font-medium">Les derniers sujets mis en ligne par vos délégués.</p>
            </div>
            <Link to="/explore" className="bg-gray-50 text-gray-900 px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-100 transition-all flex items-center space-x-2 border border-gray-100">
              <span>Tout voir</span>
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentSubjects.map(subject => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Steps Section */}
      <section className="py-24 bg-una-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full opacity-20 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Comment ça marche ?</h2>
            <p className="text-blue-100 text-lg">Trois étapes simples pour récupérer vos ressources académiques.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-sm font-black border-2 border-white">
                    {i + 1}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed text-sm opacity-80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filières Grid with Icons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-16 tracking-tight">Explorez par filière</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {FILIERES.map((f, i) => (
              <Link 
                key={f} 
                to={`/explore?filiere=${f}`}
                className="px-10 py-6 bg-gray-50 rounded-3xl border border-gray-100 font-black text-gray-900 hover:bg-una-blue hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[140px]"
              >
                {f}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="pb-24 pt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Prêt à réviser ?</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Accédez à la plus grande bibliothèque de ressources universitaires de l'UNA dès maintenant. Aucun compte requis.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => navigate('/explore')}
                  className="bg-una-blue text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 active:scale-95 w-full sm:w-auto"
                >
                  Ouvrir le catalogue
                </button>
                <Link 
                  to="/about"
                  className="text-white font-bold hover:text-blue-400 transition-colors w-full sm:w-auto py-5"
                >
                  Comment ça marche ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up { 
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
          opacity: 0;
        }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </Layout>
  );
};
