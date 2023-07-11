import { createClient } from '../generated';

export const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHCMS_API as string,
});

export async function getHomePage() {
  const { home_page } = await client.query({
    home_page: {
      __args: {
        stage: 'PUBLISHED',
        locales: ['en'],
      },
      about: true,
      hobbies: true,
      title: true,
      stack: true,
    },
  });

  return home_page;
}

export async function getWorksPage() {
  const { work } = await client.query({
    work: {
      __args: {
        stage: 'PUBLISHED',
        locales: ['en'],
      },
      id: true,
      name: true,
      githubUrl: true,
      description: true,
      url: true,
    },
  });

  return work;
}
