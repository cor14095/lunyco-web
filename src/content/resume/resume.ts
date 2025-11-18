import resumeData from './resume-data.json';
import type { ResumeData } from '@/types/resume';

export function getResumeData(): ResumeData {
  return resumeData as ResumeData;
}

export function formatDate(dateString: string | null): string {
  if (!dateString) return 'Present';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short' 
  });
}

export function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 (end.getMonth() - start.getMonth());
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  }
  
  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }
  
  return `${years} year${years !== 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
}
