
import React, { useState, useEffect, useCallback } from 'react';
import Input from './components/Input';
import ResultDisplay from './components/ResultDisplay';

const App: React.FC = () => {
  const [vcpus, setVcpus] = useState<string>('');
  const [cores, setCores] = useState<string>('');
  const [threads, setThreads] = useState<string>('');
  const [ratio, setRatio] = useState<number | null>(null);

  const calculateRatio = useCallback(() => {
    const numVcpus = parseInt(vcpus, 10);
    const numCores = parseInt(cores, 10);
    const numThreads = parseInt(threads, 10);

    if (numVcpus > 0 && numCores > 0 && numThreads > 0) {
      const pCpus = numCores * numThreads;
      setRatio(numVcpus / pCpus);
    } else {
      setRatio(null);
    }
  }, [vcpus, cores, threads]);

  useEffect(() => {
    calculateRatio();
  }, [calculateRatio]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value, 10) >= 0 && !value.includes('.'))) {
       setter(value);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-100 dark:bg-brand-dark font-sans">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white tracking-tight">
                vCPU to pCPU Ratio Calculator
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                Fine-tune performance and plan capacity by instantly calculating your CPU consolidation ratio.
            </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
          <form className="space-y-6">
            <Input 
              label="Number of vCPUs"
              id="vcpus"
              value={vcpus}
              onChange={handleInputChange(setVcpus)}
              placeholder="e.g., 64"
              helpText="Total virtual CPUs assigned to all your VMs."
            />
            <Input 
              label="Number of Physical Cores"
              id="cores"
              value={cores}
              onChange={handleInputChange(setCores)}
              placeholder="e.g., 16"
              helpText="Total physical CPU cores on the host (excluding hyper-threading)."
            />
            <Input 
              label="Threads per Core"
              id="threads"
              value={threads}
              onChange={handleInputChange(setThreads)}
              placeholder="e.g., 2"
              helpText="Usually 1 (hyper-threading off) or 2 (hyper-threading on)."
            />
          </form>
        </div>
        
        <ResultDisplay ratio={ratio} />

        <footer className="text-center mt-8">
            <p className="text-sm text-slate-500 dark:text-slate-400">
                A tool for modern infrastructure planning.
            </p>
        </footer>
      </div>
    </main>
  );
};

export default App;
