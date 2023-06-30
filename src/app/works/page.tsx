import Projects from '../../components/projects';

import { client } from '../../lib/graphcms';

async function getServerSideProps() {
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
    },
  });

  return work;
}

export default async function Page() {
  const work = await getServerSideProps();
  return (
    <div style={{ background: '#fff', color: '#000' }}>
      {work.map(({ id, ...rest }) => (
        <Projects key={id} {...rest} />
      ))}
    </div>
  );
}
