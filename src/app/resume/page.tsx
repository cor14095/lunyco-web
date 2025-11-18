import type { Metadata } from 'next';
import { getResumeData } from '@/content/resume/resume';
import { ResumeClient } from './resume-client';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Professional resume of ${siteConfig.author.name} - Full-Stack Engineer & QA Automation Specialist`,
  openGraph: {
    title: `Resume | ${siteConfig.name}`,
    description: `Professional resume of ${siteConfig.author.name}`,
  },
};

export default function ResumePage() {
  const resumeData = getResumeData();
  
  return <ResumeClient resumeData={resumeData} />;
}
