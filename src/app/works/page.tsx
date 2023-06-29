// import Worklist from '../../components/worklist';

import { client } from '../../lib/graphcms';

// async function getServerSideProps() {
//   const { work } = await client.query({
//     work: {
//       __args: {
//         // where: { slug: 'portfolio' },
//         stage: 'PUBLISHED',
//         locales: ['en'],
//       },
//       id: true,
//       name: true,
//       githubUrl: true,
//       description: true,
//       stack: true,
//     },
//   });

//   return work;
// }

export default async function Page() {
  // const work = await getServerSideProps();
  // console.log(work);
  return (
    <div>
      {/* {work.map(({ id, ...rest }) => (
        <Worklist key={id} {...rest} />
      ))} */}
      1
    </div>
  );
}
