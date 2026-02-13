
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { MOCK_SUBJECTS } from '../constants';
import { ArrowLeft, Download, Minus, Plus, Share2 } from 'lucide-react';

export const Preview: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(100);
  
  const subject = MOCK_SUBJECTS.find(s => s.id === id);

  if (!subject) return null;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50));

  return (
    <div className="flex flex-col h-screen bg-gray-800 overflow-hidden">
      {/* Action Bar */}
      <div className="h-16 bg-gray-900 flex items-center justify-between px-4 md:px-8 border-b border-gray-700 shrink-0 z-20">
        <div className="flex items-center space-x-6">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white transition-colors flex items-center">
            <ArrowLeft size={20} />
            <span className="hidden sm:inline ml-2 text-sm font-bold">Quitter</span>
          </button>
          <div className="hidden xs:block h-6 w-px bg-gray-700"></div>
          <div className="hidden xs:block">
            <h1 className="text-white text-sm font-bold truncate max-w-[150px] md:max-w-md">{subject.title}</h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{subject.ue} • {subject.pages} Pages</p>
          </div>
        </div>

        {/* Interactive Zoom Controls */}
        <div className="flex items-center space-x-2 md:space-x-6">
           <div className="flex items-center bg-gray-800 rounded-xl p-1 border border-gray-700 shadow-inner">
              <button 
                onClick={handleZoomOut}
                disabled={zoom <= 50}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                title="Zoom arrière"
              >
                <Minus size={18} />
              </button>
              
              <div className="px-2 flex items-center space-x-3">
                <input 
                  type="range" 
                  min="50" 
                  max="200" 
                  step="5"
                  value={zoom} 
                  onChange={(e) => setZoom(parseInt(e.target.value))}
                  className="hidden md:block w-24 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-una-blue"
                />
                <span className="w-12 text-center text-xs font-bold text-gray-300 tabular-nums">{zoom}%</span>
              </div>

              <button 
                onClick={handleZoomIn}
                disabled={zoom >= 200}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                title="Zoom avant"
              >
                <Plus size={18} />
              </button>
           </div>

           <div className="hidden sm:flex items-center space-x-2">
             <Link
               to={`/subject/${subject.id}`}
               className="bg-una-blue text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-600 transition-all flex items-center space-x-2 shadow-lg shadow-blue-900/20"
             >
               <Download size={16} />
               <span>Télécharger</span>
             </Link>
             <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Share2 size={20} />
             </button>
           </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-grow overflow-auto bg-gray-700 p-4 md:p-8 flex justify-center items-start">
         <div 
           className="w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col items-center transition-transform duration-200 ease-out origin-top"
           style={{ transform: `scale(${zoom / 100})` }}
         >
            {/* Mock Page Content */}
            <div className="w-full aspect-[1/1.4] bg-white p-12 relative flex flex-col items-center justify-center shrink-0">
               <div className="absolute top-12 left-12 right-12 border-b-2 border-gray-100 pb-8 flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                     <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center">
                        <img src="https://picsum.photos/seed/una-logo/100/100" alt="UNA" className="w-8 h-8 opacity-50 grayscale" />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Université Nangui Abrogoua</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Abidjan, Côte d'Ivoire</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-bold text-gray-900 uppercase">{subject.year}</p>
                     <p className="text-[10px] font-bold text-gray-400 uppercase">{subject.level} - {subject.filiere}</p>
                  </div>
               </div>

               <div className="max-w-md text-center mt-20">
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
                     {subject.ue} : {subject.title}
                  </h2>
                  <div className="h-1 w-20 bg-una-blue mx-auto mb-8"></div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] mb-12">Session de {subject.type}</p>
               </div>

               <div className="w-full space-y-6 opacity-40 select-none pointer-events-none px-4">
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  <div className="py-4"></div>
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
               </div>

               <div className="mt-auto pt-10 text-center">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Aperçu interactif • Page 1 / {subject.pages}</p>
               </div>
               
               {/* Watermark */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 pointer-events-none opacity-[0.03]">
                  <p className="text-9xl font-black text-gray-900 uppercase">SUJETHÈQUE UNA</p>
               </div>
            </div>

            {/* Pagination / "See More" Divider */}
            <div className="w-full p-10 bg-gray-50 border-t border-dashed border-gray-200 text-center shrink-0">
               <div className="max-w-sm mx-auto">
                  <p className="text-sm text-gray-500 font-medium mb-4">Pour voir l'intégralité du sujet ({subject.pages} pages), veuillez le télécharger.</p>
                  <Link to={`/subject/${subject.id}`} className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-black transition-colors">
                    Télécharger la version complète
                  </Link>
               </div>
            </div>
         </div>
      </div>
      
      <style>{`
        /* Custom slider styling for the zoom range input */
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #1E90FF;
          cursor: pointer;
          margin-top: -6px;
          box-shadow: 0 0 10px rgba(30, 144, 255, 0.4);
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: #374151;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};
