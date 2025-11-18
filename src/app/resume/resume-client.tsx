'use client';

import { motion } from 'motion/react';
import { Timeline } from '@/components/timeline';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Globe, 
  Download,
  Mail,
  MapPin
} from 'lucide-react';
import type { ResumeData } from '@/types/resume';

interface ResumeClientProps {
  resumeData: ResumeData;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ResumeClient({ resumeData }: ResumeClientProps) {
  const { personalInfo, experience, education, skills, languages } = resumeData;

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">{personalInfo.name}</h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>
          <Button asChild size="lg" className="group">
            <a href="/Alejandro_Cortes_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
              {personalInfo.email}
            </a>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <p className="text-base leading-relaxed">{personalInfo.summary}</p>
          </CardContent>
        </Card>
      </motion.section>

      <Separator />

      {/* Experience */}
      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div variants={item} className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Professional Experience</h2>
        </motion.div>
        <Timeline experiences={experience} />
      </motion.section>

      <Separator />

      {/* Education */}
      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div variants={item} className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Education</h2>
        </motion.div>
        {education.map((edu) => (
          <motion.div key={edu.id} variants={item}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-lg text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                </p>
                {edu.description && (
                  <p className="text-sm text-muted-foreground pt-2">{edu.description}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      <Separator />

      {/* Skills */}
      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div variants={item} className="flex items-center gap-3">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Technical Skills</h2>
        </motion.div>

        <motion.div className="grid gap-6 md:grid-cols-2" variants={container}>
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div key={category} variants={item}>
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Separator />

      {/* Languages */}
      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div variants={item} className="flex items-center gap-3">
          <Globe className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Languages</h2>
        </motion.div>
        <motion.div className="flex gap-4" variants={item}>
          {languages.map((lang) => (
            <Card key={lang.language}>
              <CardContent className="p-4 space-y-1">
                <p className="font-semibold">{lang.language}</p>
                <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
