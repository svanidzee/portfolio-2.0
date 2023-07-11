import Hobbies from 'components/hobbies';
import Info from 'components/info';
import Layout from 'components/layouts/main';
import Stack from 'components/stack';

import { getHomePage } from 'lib/graphcms';

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
