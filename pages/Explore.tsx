
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { SubjectCard } from '../components/SubjectCard';
import { Filter, Search, X, SlidersHorizontal } from 'lucide-react';
import { MOCK_SUBJECTS, FILIERES, LEVELS, YEARS, SUBJECT_TYPES } from '../constants';

export const Explore: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('q') || '';
  const initialType = searchParams.get('type') || '';
  const initialFiliere = searchParams.get('filiere') || '';

  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState({
    filiere: initialFiliere,
    level: '',
    year: '',
    type: initialType
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredSubjects = useMemo(() => {
    return MOCK_SUBJECTS.filter(s => {
      const matchesQuery = s.title.toLowerCase().includes(query.toLowerCase()) || 
                          s.ue.toLowerCase().includes(query.toLowerCase());
      const matchesFiliere = !filters.filiere || s.filiere === filters.filiere;
      const matchesLevel = !filters.level || s.level === filters.level;
      const matchesYear = !filters.year || s.year === filters.year;
      const matchesType = !filters.type || s.type === filters.type;

      return matchesQuery && matchesFiliere && matchesLevel && matchesYear && matchesType;
    });
  }, [query, filters]);

  const resetFilters = () => {
    setFilters({
      filiere: '',
      level: '',
      year: '',
      type: ''
    });
    setQuery('');
  };

  return (
    <Layout>
      <div className="bg-gray-50/50 border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Catalogue des Sujets</h1>
          <p className="text-gray-500 text-sm">Parcourez {MOCK_SUBJECTS.length} sujets académiques validés.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 flex items-center">
                  <SlidersHorizontal size={18} className="mr-2 text-una-blue" />
                  Filtres
                </h3>
                <button onClick={resetFilters} className="text-xs text-blue-500 font-bold hover:underline">Réinitialiser</button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Filière</label>
                  <select 
                    value={filters.filiere}
                    onChange={(e) => setFilters({...filters, filiere: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Toutes les filières</option>
                    {FILIERES.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Niveau</label>
                  <div className="flex flex-wrap gap-2">
                    {LEVELS.map(l => (
                      <button
                        key={l}
                        onClick={() => setFilters({...filters, level: filters.level === l ? '' : l})}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                          filters.level === l 
                            ? 'bg-una-blue border-una-blue text-white shadow-md shadow-blue-100' 
                            : 'bg-white border-gray-200 text-gray-500 hover:border-blue-200'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Type de Sujet</label>
                  <div className="space-y-2">
                    {SUBJECT_TYPES.map(t => (
                      <label key={t} className="flex items-center space-x-3 group cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.type === t}
                          onChange={() => setFilters({...filters, type: filters.type === t ? '' : t})}
                          className="w-4 h-4 rounded text-una-blue focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Année Académique</label>
                  <select 
                    value={filters.year}
                    onChange={(e) => setFilters({...filters, year: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Toutes les années</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Search Bar & Mobile Filter Toggle */}
            <div className="flex gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher par titre ou code UE..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
                />
              </div>
              <button 
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden bg-white border border-gray-200 p-3.5 rounded-2xl flex items-center justify-center text-gray-600 shadow-sm active:bg-gray-50"
              >
                <Filter size={20} />
              </button>
            </div>

            {/* Results Grid */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm font-medium text-gray-500">
                <span className="text-gray-900 font-bold">{filteredSubjects.length}</span> résultats trouvés
              </p>
            </div>

            {filteredSubjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredSubjects.map(subject => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-20 text-center border border-dashed border-gray-300">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                  <Search size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun sujet trouvé</h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                  Essayez d'ajuster vos filtres ou changez votre recherche pour obtenir plus de résultats.
                </p>
                <button onClick={resetFilters} className="mt-6 bg-una-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all">
                  Effacer tout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer (Overlay) */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 flex flex-col animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Filtres</h2>
              <button onClick={() => setShowMobileFilters(false)} className="p-2 bg-gray-100 rounded-lg transition-colors active:bg-gray-200">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto space-y-8 pb-10">
               {/* Filière Mobile */}
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Filière</label>
                  <select 
                    value={filters.filiere} 
                    onChange={(e) => setFilters({...filters, filiere: e.target.value})} 
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Toutes les filières</option>
                    {FILIERES.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
               </div>

               {/* Niveau Mobile */}
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Niveau</label>
                  <div className="flex flex-wrap gap-2">
                    {LEVELS.map(l => (
                      <button
                        key={l}
                        onClick={() => setFilters({...filters, level: filters.level === l ? '' : l})}
                        className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
                          filters.level === l 
                            ? 'bg-una-blue border-una-blue text-white shadow-md' 
                            : 'bg-white border-gray-200 text-gray-600'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
               </div>

               {/* Type de Sujet Mobile (Requested) */}
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Type de Sujet</label>
                  <div className="space-y-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    {SUBJECT_TYPES.map(t => (
                      <label key={t} className="flex items-center space-x-3 group cursor-pointer">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.type === t}
                            onChange={() => setFilters({...filters, type: filters.type === t ? '' : t})}
                            className="w-5 h-5 rounded border-gray-300 text-una-blue focus:ring-blue-500 cursor-pointer"
                          />
                        </div>
                        <span className={`text-sm font-semibold transition-colors ${filters.type === t ? 'text-una-blue' : 'text-gray-700'}`}>
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
               </div>

               {/* Année Académique Mobile */}
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Année Académique</label>
                  <select 
                    value={filters.year} 
                    onChange={(e) => setFilters({...filters, year: e.target.value})} 
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Toutes les années</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
               </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-100">
              <button 
                onClick={resetFilters}
                className="flex-grow py-4 rounded-xl font-bold text-gray-500 border border-gray-200 hover:bg-gray-50 transition-all"
              >
                Réinitialiser
              </button>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="flex-[2] bg-una-blue text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
              >
                Appliquer
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </Layout>
  );
};
