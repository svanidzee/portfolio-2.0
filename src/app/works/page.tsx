import Worklist from '../../components/worklist';
import Worklist2 from '../../components/worklist2';

import { client } from '../../lib/graphcms';

async function getServerSideProps() {
  const { work } = await client.query({
    work: {
      __args: {
        // where: { slug: 'portfolio' },
        stage: 'PUBLISHED',
        locales: ['en'],
      },
      id: true,
      name: true,
      // bg: {
      //   url: true,
      // },
      githubUrl: true,
      stack: true,
      description: true,
    },
  });

  return work;
}

export default async function Page() {
  const work = await getServerSideProps();
  // console.log(work);
  return (
    <div style={{ background: '#fff', color: '#000' }}>
      {work.map(({ id, ...rest }) => (
        // <Worklist key={id} {...rest} />
        <Worklist2 key={id} {...rest} />
      ))}
    </div>
  );
}
