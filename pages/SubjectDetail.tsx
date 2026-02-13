
import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { MOCK_SUBJECTS } from '../constants';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  User, 
  Tag, 
  ArrowLeft, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  CloudDownload,
  Info,
  Clock,
  ChevronRight,
  Printer,
  Layers
} from 'lucide-react';
import { SubjectType } from '../types';

export const SubjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const subject = MOCK_SUBJECTS.find(s => s.id === id);

  // Recherche des sujets similaires (même filière ET même niveau)
  const similarSubjects = useMemo(() => {
    if (!subject) return [];
    return MOCK_SUBJECTS.filter(s => 
      s.id !== subject.id && 
      s.filiere === subject.filiere && 
      s.level === subject.level
    ).slice(0, 3);
  }, [subject]);

  if (!subject) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
            <Info size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sujet introuvable</h2>
          <p className="text-gray-500 mb-8">Le document que vous recherchez n'existe pas ou a été déplacé.</p>
          <Link to="/explore" className="inline-flex items-center px-6 py-3 bg-una-blue text-white font-bold rounded-xl hover:bg-blue-600 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Retour au catalogue
          </Link>
        </div>
      </Layout>
    );
  }

  const handleDownload = () => {
    if (downloading || downloadSuccess) return;
    
    setDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setDownloadSuccess(true);
          setTimeout(() => setDownloadSuccess(false), 8000);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const getTypeStyles = (type: SubjectType) => {
    switch (type) {
      case SubjectType.EXAMEN: return 'bg-red-50 text-red-600 border-red-100';
      case SubjectType.TD: return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case SubjectType.RATTRAPAGE: return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-una-blue transition-colors">Accueil</Link>
            <ChevronRight size={12} />
            <Link to="/explore" className="hover:text-una-blue transition-colors">Catalogue</Link>
            <ChevronRight size={12} />
            <span className="text-gray-600 truncate max-w-[200px]">{subject.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          
          {/* Left Side: Document Visualization & Action Summary */}
          <div className="lg:w-1/3">
             <div className="sticky top-24 space-y-8">
                <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[40px] blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
                    <div className="relative bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-sm">
                       <div className="aspect-[3/4] bg-[#F8FAFC] flex items-center justify-center p-8 relative">
                          {/* Stylized Paper Visual */}
                          <div className="w-full h-full bg-white rounded-lg shadow-xl border border-gray-200 p-8 flex flex-col relative overflow-hidden">
                             <div className="flex justify-between mb-8">
                                <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-blue-500">
                                   <FileText size={24} />
                                </div>
                                <div className="text-right">
                                   <div className="h-2 w-16 bg-gray-100 rounded mb-1 ml-auto"></div>
                                   <div className="h-2 w-12 bg-gray-50 rounded ml-auto"></div>
                                </div>
                             </div>
                             <div className="space-y-4 mb-8">
                                <div className="h-3 bg-gray-100 rounded w-full"></div>
                                <div className="h-3 bg-gray-100 rounded w-full"></div>
                                <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                             </div>
                             <div className="grid grid-cols-2 gap-4 mt-auto">
                                <div className="h-12 bg-gray-50 rounded"></div>
                                <div className="h-12 bg-gray-50 rounded"></div>
                             </div>
                             <div className="absolute bottom-1/4 right-8 w-20 h-20 border-4 border-blue-50/50 rounded-full flex items-center justify-center rotate-12 opacity-20">
                                <span className="text-[10px] font-black text-blue-900 text-center uppercase leading-none">UNA<br/>VALIDÉ</span>
                             </div>
                          </div>
                          
                          <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                             <Link to={`/preview/${subject.id}`} className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-bold shadow-2xl flex items-center space-x-2 transform scale-95 group-hover:scale-100 transition-transform">
                                <Eye size={20} className="text-una-blue" />
                                <span>Aperçu interactif</span>
                             </Link>
                          </div>
                       </div>
                       
                       <div className="p-6 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between">
                          <div className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                             <ShieldCheck size={14} className="text-emerald-500 mr-2" />
                             Source Académique
                          </div>
                          <div className="flex space-x-2">
                             <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-400 hover:text-blue-500 transition-all hover:shadow-sm">
                                <Share2 size={16} />
                             </button>
                             <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-400 hover:text-blue-500 transition-all hover:shadow-sm">
                                <Printer size={16} />
                             </button>
                          </div>
                       </div>
                    </div>
                </div>

                <div className="bg-blue-600 text-white p-6 rounded-3xl shadow-xl shadow-blue-100">
                    <h4 className="font-bold mb-4 flex items-center">
                       <Clock size={18} className="mr-2 opacity-80" />
                       Dernière consultation
                    </h4>
                    <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                       Ce document a été téléchargé plus de <span className="text-white font-bold">{subject.downloads} fois</span> par des étudiants cette année.
                    </p>
                    <Link to="/explore" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white flex items-center transition-colors">
                       Voir les sujets similaires <ChevronRight size={14} className="ml-1" />
                    </Link>
                </div>
             </div>
          </div>

          {/* Right Side: Detailed Metadata & Actions */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-[40px] border border-gray-100 p-8 md:p-12 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className={`text-[10px] font-bold px-4 py-1.5 rounded-full border tracking-[0.15em] uppercase ${getTypeStyles(subject.type)}`}>
                    {subject.type}
                  </span>
                  <span className="text-[10px] font-bold px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50 text-gray-500 tracking-[0.15em] uppercase">
                    {subject.level}
                  </span>
                  <span className="text-[10px] font-bold px-4 py-1.5 rounded-full border border-blue-50 bg-blue-50 text-blue-600 tracking-[0.15em] uppercase">
                    {subject.year}
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
                  {subject.title}
                </h1>

                <div className="bg-gray-50/50 rounded-3xl p-6 mb-10 border border-gray-100">
                   <p className="text-gray-600 text-lg leading-relaxed italic">
                      {subject.description || "Ce document est une ressource pédagogique mise à disposition par les départements de l'UNA pour accompagner la préparation des examens."}
                   </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-gray-100 mr-4">
                       <Tag size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Unité d'Enseignement</p>
                      <p className="text-gray-900 font-extrabold text-lg">{subject.ue}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-gray-100 mr-4">
                       <User size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Filière / Faculté</p>
                      <p className="text-gray-900 font-extrabold text-lg">{subject.filiere}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-gray-100 mr-4">
                       <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Taille du fichier</p>
                      <p className="text-gray-900 font-extrabold text-lg">{subject.pages} pages • PDF</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-gray-100 mr-4">
                       <Download size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Popularité</p>
                      <p className="text-gray-900 font-extrabold text-lg">{subject.downloads} téléchargements</p>
                    </div>
                  </div>
                </div>

                {/* Main Action Block */}
                <div className="space-y-6">
                  <div className="relative">
                    <button
                      onClick={handleDownload}
                      disabled={downloading}
                      className={`group relative w-full py-6 rounded-2xl flex items-center justify-center font-bold text-xl transition-all overflow-hidden ${
                        downloadSuccess 
                          ? 'bg-emerald-500 text-white' 
                          : downloading 
                          ? 'bg-blue-50 text-blue-300 cursor-not-allowed border border-blue-100' 
                          : 'bg-una-blue text-white hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 active:scale-[0.98]'
                      }`}
                    >
                      {downloading && (
                        <div 
                          className="absolute left-0 bottom-0 top-0 bg-blue-100 transition-all duration-300 ease-out" 
                          style={{ width: `${downloadProgress}%`, zIndex: 0 }}
                        ></div>
                      )}
                      
                      <div className="relative z-10 flex items-center">
                        {downloadSuccess ? (
                          <>
                            <CheckCircle2 size={28} className="mr-3 animate-bounce" />
                            Téléchargement réussi
                          </>
                        ) : downloading ? (
                          <>
                            <CloudDownload size={28} className="mr-3 animate-pulse" />
                            Téléchargement {downloadProgress}%
                          </>
                        ) : (
                          <>
                            <Download size={28} className="mr-3 group-hover:-translate-y-1 transition-transform" />
                            Récupérer le sujet complet
                          </>
                        )}
                      </div>
                    </button>
                  </div>

                  <Link
                    to={`/preview/${subject.id}`}
                    className="w-full py-6 rounded-2xl bg-white border-2 border-gray-100 text-gray-700 font-bold text-xl flex items-center justify-center hover:bg-gray-50 hover:border-gray-200 transition-all shadow-sm group"
                  >
                    <Eye size={28} className="mr-3 text-gray-300 group-hover:text-una-blue transition-colors" />
                    Lecture en ligne rapide
                  </Link>
                </div>

                <div className="mt-12 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                   <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Student avatar" />
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm">
                         +20
                      </div>
                   </div>
                   <p className="text-sm text-gray-500 font-medium text-center sm:text-left">
                     <span className="text-gray-900 font-bold">24 étudiants</span> de votre filière consultent ce sujet en ce moment.
                   </p>
                </div>
            </div>
          </div>
        </div>

        {/* Dynamic Similar Subjects Section */}
        {similarSubjects.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-blue-50 text-una-blue rounded-xl flex items-center justify-center">
                <Layers size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Sujets similaires</h2>
                <p className="text-sm text-gray-500">Même filière ({subject.filiere}) et même niveau ({subject.level})</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarSubjects.map((s) => (
                <Link 
                  key={s.id} 
                  to={`/subject/${s.id}`}
                  className="bg-white rounded-[32px] border border-gray-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border tracking-widest uppercase ${getTypeStyles(s.type)}`}>
                      {s.type}
                    </span>
                    <span className="text-xs font-bold text-gray-400">{s.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-una-blue transition-colors line-clamp-2 leading-tight">
                    {s.title}
                  </h3>
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                    <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <Tag size={14} className="mr-2" />
                      {s.ue}
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-una-blue transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Success Message Notification (Floating) */}
        {downloadSuccess && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce-in">
             <div className="bg-emerald-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                   <Download size={16} />
                </div>
                <div>
                   <p className="font-bold">Sujet prêt !</p>
                   <p className="text-xs text-emerald-300">Le document a été enregistré dans vos téléchargements.</p>
                </div>
             </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-in {
          0% { transform: translate(-50%, 100px); opacity: 0; }
          60% { transform: translate(-50%, -20px); opacity: 1; }
          100% { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>
    </Layout>
  );
};
