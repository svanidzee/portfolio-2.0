import { getWorksPage } from '../../lib/graphcms';
import Projects from '../../components/projects';

export default async function Page() {
  const works = await getWorksPage();
  return (
    <>
      {works.map(({ id, ...rest }) => (
        <Projects key={id} {...rest} />
      ))}
    </>
  );
}
