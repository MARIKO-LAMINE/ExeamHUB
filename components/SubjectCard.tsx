
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Eye, Calendar, User } from 'lucide-react';
import { Subject, SubjectType } from '../types';

interface SubjectCardProps {
  subject: Subject;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const getTypeColor = (type: SubjectType) => {
    switch (type) {
      case SubjectType.EXAMEN: return 'bg-red-50 text-red-600 border-red-100';
      case SubjectType.TD: return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case SubjectType.RATTRAPAGE: return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <span className={`text-[10px] font-bold px-2 py-1 rounded-md border tracking-wider uppercase ${getTypeColor(subject.type)}`}>
            {subject.type}
          </span>
          <span className="text-xs font-semibold text-gray-400 flex items-center space-x-1">
            <Download size={12} />
            <span>{subject.downloads}</span>
          </span>
        </div>
        
        <Link to={`/subject/${subject.id}`} className="block">
          <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
            {subject.title}
          </h3>
        </Link>
        
        <div className="space-y-2 mt-4">
          <div className="flex items-center text-xs text-gray-500 font-medium">
            <div className="w-5 h-5 bg-gray-50 rounded flex items-center justify-center mr-2">
              <Calendar size={12} />
            </div>
            <span>{subject.year} • {subject.level}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500 font-medium">
            <div className="w-5 h-5 bg-gray-50 rounded flex items-center justify-center mr-2">
              <User size={12} />
            </div>
            <span>{subject.filiere} — {subject.ue}</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-3 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
        <Link 
          to={`/preview/${subject.id}`}
          className="text-gray-600 hover:text-blue-600 text-xs font-bold flex items-center transition-colors"
        >
          <Eye size={14} className="mr-1" />
          Aperçu
        </Link>
        <Link 
          to={`/subject/${subject.id}`}
          className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center"
        >
          Détails
          <FileText size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};
