export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alejandro Cortes',
    url: 'https://lunyco.com',
    email: 'ale@lunyco.com',
    jobTitle: 'Full-Stack Engineer',
    description: 'Full-Stack Engineer specializing in Next.js, Django, and AI Engineering',
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Django',
      'PostgreSQL',
      'AWS',
      'Test Automation',
      'AI/ML Engineering'
    ],
    sameAs: [
      'https://github.com/cor14095',
      'https://lunyco.com'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'The SilverLogic'
    }
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lunyco - Alejandro Cortes Portfolio',
    url: 'https://lunyco.com',
    description: 'AI-focused Full-Stack portfolio: Next.js, Django, automations, and public projects.',
    author: {
      '@type': 'Person',
      name: 'Alejandro Cortes'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://lunyco.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  date: string;
  excerpt?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    url: `https://lunyco.com/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: 'Alejandro Cortes',
      url: 'https://lunyco.com'
    }
  };
}

export function generateProjectSchema(project: {
  title: string;
  date: string;
  summary: string;
  slug: string;
  tech: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.summary,
    dateCreated: project.date,
    url: `https://lunyco.com/projects/${project.slug}`,
    author: {
      '@type': 'Person',
      name: 'Alejandro Cortes'
    },
    programmingLanguage: project.tech
  };
}
