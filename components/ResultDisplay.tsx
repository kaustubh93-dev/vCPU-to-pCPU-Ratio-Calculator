
import React from 'react';
import { RATIO_INTERPRETATIONS } from '../constants';
import { RatioCategory, RatioInterpretation } from '../types';

interface ResultDisplayProps {
  ratio: number | null;
}

const getInterpretation = (ratio: number | null): RatioInterpretation | null => {
  if (ratio === null || ratio < 0 || !isFinite(ratio)) {
    return null;
  }
  return RATIO_INTERPRETATIONS.find(interp => ratio > interp.min && ratio <= interp.max) || null;
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ ratio }) => {
  const interpretation = getInterpretation(ratio);

  return (
    <div className="w-full p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg mt-8 transition-all duration-500">
      <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-4">Your Ratio</h2>
      {ratio !== null && isFinite(ratio) && interpretation ? (
        <div className="text-center">
          <div className="text-6xl font-extrabold text-brand-blue dark:text-sky-400 mb-2">
            {ratio.toFixed(1)}:1
          </div>
          <div className={`inline-block px-4 py-1.5 rounded-full text-lg font-semibold ${interpretation.color} ${interpretation.textColor}`}>
            {interpretation.category}
          </div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            {interpretation.description}
          </p>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-slate-500 dark:text-slate-400">
            Enter the values above to calculate your vCPU to pCPU ratio.
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
