'use client';

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import type { Experience } from '@/types/resume';
import { formatDate, calculateDuration } from '@/content/resume/resume';

interface TimelineProps {
  experiences: Experience[];
  compact?: boolean;
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function Timeline({ experiences, compact = false }: TimelineProps) {
  return (
    <motion.div
      className="relative space-y-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

      {experiences.map((exp) => (
        <motion.div
          key={exp.id}
          variants={item}
          className="relative md:pl-8"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-6 -translate-x-1/2 hidden md:block">
            <div className={`h-4 w-4 rounded-full border-2 border-primary ${
              exp.current ? 'bg-primary animate-pulse' : 'bg-background'
            }`} />
          </div>

          <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <CardContent className="p-6 space-y-4">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>
                    </div>
                    <p className="text-lg font-semibold text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  {exp.current && (
                    <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                      Current Position
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-xs sm:text-sm">
                    {calculateDuration(exp.startDate, exp.endDate)}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              {!compact && (
                <>
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
