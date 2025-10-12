// Placeholder posts data

const posts = [
  {
    title: 'Coming Soon...', 
    slug: 'coming-soon', 
    excerpt: 'This blog is under construction. Stay tuned for updates!',
    date: '2024-06-01',
    readingTime: 1,
    content: 'Content will be available soon.'
  }
];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug: string) {
  return posts.find(p => p.slug === slug);
}


