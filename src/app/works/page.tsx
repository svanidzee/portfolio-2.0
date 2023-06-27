import Worklist from '../../components/worklist';

import { client } from '../../lib/graphcms';

async function getServerSideProps() {
  const { work } = await client.query({
    // works: {
    //   __args: {
    //     where: { slug: 'portfolio' },
    //     stage: 'PUBLISHED',
    //     locales: ['en'],
    //   },
    //   name: true,
    //   description: true,
    // },
    work: {
      __args: {
        // where: { slug: 'portfolio' },
        stage: 'PUBLISHED',
        locales: ['en'],
      },
      // stack: true,
      name: true,
      // githubUrl: true,
      description: true,
    },
  });

  // console.log(work);
  return work;
}

export default async function Page() {
  const work = await getServerSideProps();
  console.log(work);
  return (
    <div>
      {work.map((w) => (
        <Worklist key={w.name} {...w} />
      ))}
      {/* <Worklist works={works} />
      <Worklist works={works} /> */}
      {/* <Worklist />
      <Worklist />
      <Worklist /> */}
    </div>
  );
}
