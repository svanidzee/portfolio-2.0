import { client } from '../lib/graphcms';
import Highlight from '../components/highlight';

// async function getServerSideProps() {
//   const { page } = await client.query({
//     page: {
//       __args: {
//         where: { slug: 'home' },
//         stage: 'PUBLISHED',
//         locales: ['en'],
//       },
//       name: true,
//       // aboutTitle: true,
//       // aboutContent: true,
//       // hobbiesTitle: true,
//       // hobbies: true,
//       // id: true,
//       // myName: true,
//       // myposition: true,
//       // slug: true,
//       // toolsTitle: true,
//       // toolsContent: true,
//       // stack: true,
//     },
//   });
//   // console.log(page);
//   return page;
// }

export default async function Home() {
  // const page = await getServerSideProps();
  // console.log(repo);

  // return <div>1</div>;
  // return <Highlight page={page} />;
  return <Highlight />;
}
