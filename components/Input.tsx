
import React from 'react';

interface InputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  helpText: string;
}

const Input: React.FC<InputProps> = ({ label, id, value, onChange, placeholder, helpText }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min="0"
        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition duration-300 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
      />
      <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">{helpText}</p>
    </div>
  );
};

export default Input;
