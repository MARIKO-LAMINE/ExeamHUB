
import React from 'react';
import { Layout } from '../components/Layout';
import { 
  ShieldCheck, 
  GraduationCap, 
  Archive, 
  HelpCircle, 
  Mail, 
  MapPin, 
  Users, 
  FileCheck, 
  Zap, 
  ChevronRight,
  School,
  Globe,
  Award
} from 'lucide-react';

export const About: React.FC = () => {
  const faqs = [
    {
      q: "Comment puis-je ajouter un sujet ?",
      a: "Le dépôt de sujets est réservé aux administrateurs et délégués autorisés. Si vous possédez un sujet de qualité non répertorié, veuillez vous rapprocher de votre délégué de niveau ou du bureau des étudiants de votre faculté."
    },
    {
      q: "L'accès est-il vraiment gratuit ?",
      a: "Absolument. La Sujethèque est un bien commun académique mis à disposition par l'Université Nangui Abrogoua pour soutenir la réussite de chaque étudiant. Aucun abonnement ni frais n'est requis."
    },
    {
      q: "Je ne trouve pas le sujet d'une matière spécifique.",
      a: "Notre base de données est enrichie chaque semestre. Si un sujet manque, c'est probablement qu'il n'a pas encore été numérisé ou validé. N'hésitez pas à nous le signaler par email."
    },
    {
      q: "Les corrigés sont-ils disponibles ?",
      a: "La priorité actuelle est la mise à disposition des énoncés. Certains sujets incluent des éléments de correction, mais la Sujethèque encourage avant tout la recherche personnelle et le travail en groupe."
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Academic Backdrop */}
      <div className="relative bg-white pt-20 pb-24 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="academic-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#academic-grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100 shadow-sm">
              <School size={14} />
              <span>Institutionnel • UNA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              L'excellence à portée <br/>
              <span className="text-una-blue">de chaque étudiant.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              Sujethèque UNA est la plateforme numérique officielle de centralisation des archives académiques, conçue pour propulser la réussite des étudiants de l'Université Nangui Abrogoua.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: "Sujets Validés", val: "5,000+", icon: <FileCheck className="text-blue-500" /> },
            { label: "Filières", val: "12", icon: <Award className="text-amber-500" /> },
            { label: "Étudiants Actifs", val: "15k+", icon: <Users className="text-emerald-500" /> },
            { label: "Mises à jour / jour", val: "20+", icon: <Zap className="text-purple-500" /> }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 text-center flex flex-col items-center">
              <div className="mb-4">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-gray-900 mb-1">{stat.val}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Mission Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Notre Mission & Valeurs</h2>
              <div className="h-1.5 w-16 bg-una-blue rounded-full mb-8"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              La Sujethèque est née d'un constat simple : l'accès aux archives d'examens est un levier majeur de réussite. Trop souvent, ces documents circulaient de manière informelle ou restaient inaccessibles à la majorité.
            </p>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-100 transition-all">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-gray-100 mr-5 flex-shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Transparence & Équité</h4>
                  <p className="text-sm text-gray-500">Garantir que chaque étudiant, peu importe son réseau, dispose des mêmes ressources pour se préparer.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-emerald-100 transition-all">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm border border-gray-100 mr-5 flex-shrink-0">
                  <Archive size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Patrimoine Académique</h4>
                  <p className="text-sm text-gray-500">Numériser et préserver l'histoire pédagogique de l'UNA pour les générations futures.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-amber-100 transition-all">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm border border-gray-100 mr-5 flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Réussite Étudiante</h4>
                  <p className="text-sm text-gray-500">Réduire le stress des examens en offrant une vision claire des attentes des enseignants.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-[60px] blur-3xl opacity-30"></div>
            <div className="relative bg-white p-2 rounded-[50px] shadow-2xl border border-gray-100 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1523050853064-59f6f32e3a8d?auto=format&fit=crop&q=80&w=1200" 
                alt="Library" 
                className="w-full h-[600px] object-cover rounded-[48px] grayscale-[0.2] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-12">
                <div className="text-white">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Université Nangui Abrogoua</p>
                  <h3 className="text-3xl font-black">Bâtir l'avenir de l'éducation ivoirienne.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-32">
           <div className="flex items-center space-x-3 mb-12">
              <div className="w-10 h-10 bg-blue-50 text-una-blue rounded-xl flex items-center justify-center">
                 <HelpCircle size={22} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Questions Fréquentes</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <div key={i} className="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                   <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-start">
                      <ChevronRight size={18} className="text-una-blue mr-2 mt-1 shrink-0" />
                      {faq.q}
                   </h4>
                   <p className="text-gray-500 text-sm leading-relaxed pl-7">
                      {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </div>

        {/* Contact & Legal Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-gray-900 rounded-[50px] p-12 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
          
          <div className="lg:col-span-1 space-y-6 relative z-10">
            <div className="flex items-center space-x-2 mb-4">
               <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Globe size={22} />
               </div>
               <span className="font-black text-xl">Sujethèque</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
               La plateforme numérique officielle pour les étudiants de l'UNA. Développée avec passion pour la communauté académique.
            </p>
            <div className="pt-4 space-y-3">
               <div className="flex items-center text-sm text-gray-300">
                  <Mail size={16} className="mr-3 text-blue-400" />
                  <span>info@una.edu.ci</span>
               </div>
               <div className="flex items-center text-sm text-gray-300">
                  <MapPin size={16} className="mr-3 text-blue-400" />
                  <span>Campus Abobo-Adjamé, Abidjan</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6 relative z-10">
             <h3 className="text-lg font-bold">Liens Utiles</h3>
             <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="https://una.edu.ci" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center">Site Officiel UNA <ChevronRight size={14} className="ml-1" /></a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center">Espace Étudiant <ChevronRight size={14} className="ml-1" /></a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center">Inscriptions <ChevronRight size={14} className="ml-1" /></a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center">Délégués de filières <ChevronRight size={14} className="ml-1" /></a></li>
             </ul>
          </div>

          <div className="lg:col-span-1 space-y-6 relative z-10">
             <h3 className="text-lg font-bold">Mentions Légales</h3>
             <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest border-l-2 border-blue-600 pl-4 py-1">
               LES DOCUMENTS FOURNIS SONT À USAGE STRICTEMENT PÉDAGOGIQUE. L'UNIVERSITÉ DÉCLINE TOUTE RESPONSABILITÉ QUANT À L'UTILISATION DES CORRIGÉS NON OFFICIELS. LES DROITS D'AUTEURS DES ÉNONCÉS APPARTIENNENT AUX ENSEIGNANTS RESPECTIFS ET À L'INSTITUTION.
             </p>
             <div className="pt-4 flex items-center space-x-3">
                <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all cursor-pointer">
                   <Users size={18} />
                </div>
                <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all cursor-pointer">
                   <Mail size={18} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
