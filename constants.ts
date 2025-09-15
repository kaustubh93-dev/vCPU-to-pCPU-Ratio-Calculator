
import { RatioCategory, RatioInterpretation } from './types';

export const RATIO_INTERPRETATIONS: RatioInterpretation[] = [
  {
    category: RatioCategory.Optimal,
    min: 0,
    max: 3,
    color: 'bg-green-100 border-green-500',
    textColor: 'text-green-800',
    description: 'Ideal for performance-sensitive workloads like databases or HPC. Ensures minimal CPU contention and predictable performance.',
  },
  {
    category: RatioCategory.Balanced,
    min: 3,
    max: 5,
    color: 'bg-blue-100 border-blue-500',
    textColor: 'text-blue-800',
    description: 'A common and effective ratio for general-purpose workloads like web servers and application servers. Balances performance and density.',
  },
  {
    category: RatioCategory.High,
    min: 5,
    max: 8,
    color: 'bg-yellow-100 border-yellow-500',
    textColor: 'text-yellow-800',
    description: 'Suitable for low-utilization environments such as development, testing, or VDI. Monitor for signs of CPU ready time or latency.',
  },
  {
    category: RatioCategory.Overprovisioned,
    min: 8,
    max: Infinity,
    color: 'bg-red-100 border-red-500',
    textColor: 'text-red-800',
    description: 'High risk of performance degradation due to significant CPU contention. Reserved for very specific, low-priority workloads. Proceed with caution.',
  },
];
