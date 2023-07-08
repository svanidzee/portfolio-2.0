import { createClient } from '../generated';

export const client = createClient({
  url: 'https://api-eu-central-1.hygraph.com/v2/cl7oxpeax3pg801uhhojx4bgb/master',
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
      stack: true,
      description: true,
      bg: {
        url: true,
      },
    },
  });

  return work;
}

export async function geTAssets() {
  const { assets } = await client.query({
    assets: {
      __args: {
        stage: 'PUBLISHED',
        locales: ['en'],
      },
      url: true,
    },
  });

  return assets;
}
