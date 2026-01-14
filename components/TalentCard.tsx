
import React from 'react';
import { Talent } from '../types';

interface TalentCardProps {
  talent: Talent;
  highlighted?: boolean;
}

const TalentCard: React.FC<TalentCardProps> = ({ talent, highlighted }) => {
  return (
    <div className={`bg-white rounded-3xl lg:rounded-[2.5rem] overflow-hidden transition-all duration-500 group shadow-sm border ${highlighted ? 'border-indigo-400 ring-4 ring-indigo-50' : 'border-slate-100 hover:border-indigo-200 hover:shadow-2xl'} flex flex-col h-full`}>
      <div className="p-6 lg:p-8 flex-grow">
        <div className="flex items-start justify-between mb-4 lg:mb-6">
          <div className="relative">
            <img 
              src={talent.avatar} 
              alt={talent.name} 
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl object-cover border border-slate-100 shadow-md transition-all duration-700"
            />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg lg:text-xl font-bold text-slate-900 font-futuristic">
              ${talent.hourlyRate}<span className="text-indigo-600 text-[10px] lg:text-xs">/hr</span>
            </span>
            <div className="flex items-center text-indigo-600 text-[9px] lg:text-[10px] mt-1">
              <i className="fa-solid fa-star mr-1"></i>
              <span className="font-bold tracking-widest uppercase">{talent.rating} Rating</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors font-futuristic uppercase tracking-tight">
          {talent.name}
        </h3>
        <p className="text-indigo-600 font-bold text-[9px] lg:text-[10px] uppercase tracking-widest mb-3 lg:mb-4">
          {talent.role}
        </p>
        
        <div className="flex items-center text-slate-400 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest mb-4 lg:mb-6">
          <i className="fa-solid fa-location-dot mr-2 text-indigo-400"></i>
          {talent.location}
        </div>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
          {talent.bio}
        </p>
        
        <div className="flex flex-wrap gap-1.5 lg:gap-2">
          {talent.skills.map((skill, i) => (
            <span key={i} className="px-2 py-1 bg-slate-50 border border-slate-100 text-slate-500 text-[8px] font-bold uppercase tracking-widest rounded-lg group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 lg:px-8 py-5 lg:py-6 bg-slate-50 border-t border-slate-100 mt-auto">
        <button className="w-full bg-white border border-slate-200 text-slate-900 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm active:scale-95">
          Request Profile
        </button>
      </div>
    </div>
  );
};

export default TalentCard;
