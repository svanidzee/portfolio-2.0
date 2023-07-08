import { getHomePage } from '../lib/graphcms';
import { Info, Hobbies, Stack } from '../components';
import Layout from '../components/layout/layout';

export default async function Page() {
  const about_page = await getHomePage();
  const [{ about, hobbies, title, stack }] = about_page;

  return (
    <Layout>
      <Info about={about} />
      <Hobbies hobbies={hobbies} />
      <Stack title={title} stack={stack} />
    </Layout>
  );
}
