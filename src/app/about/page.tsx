import Hobbies from '../../components/hobbies';
import { client } from '../../lib/graphcms';
import Info from '../../components/info';
import Stack from '../../components/stack';

async function getServerSideProps() {
  const { about_page } = await client.query({
    about_page: {
      __args: {
        stage: 'PUBLISHED',
        locales: ['en'],
      },
      id: true,
      content1: true,
      content2: true,
      toolsTitle: true,
      stack: true,
      hobbies: true,
    },
  });

  return about_page;
}

export default async function Page() {
  const about_page = await getServerSideProps();
  const [{ toolsTitle, stack, content1, content2, hobbies }] = about_page;

  return (
    <div>
      <Info content1={content1} content2={content2} />
      <Hobbies hobbies={hobbies} />
      <Stack title={toolsTitle} data={stack} />
    </div>
  );
}
