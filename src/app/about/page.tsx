// import Stacks from '../../components/stacks';
import Hobbies from '../../components/hobbies';
import { client } from '../../lib/graphcms';
import Info from '../../components/info';
import Stacks from '../../components/stacks';

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
  console.log(about_page);
  const [{ toolsTitle, stack, content1, content2, hobbies }] = about_page;
  return (
    <div>
      <Info content1={content1 as string} content2={content2 as string} />
      <Hobbies hobbies={hobbies as string} />
      <Stacks title={toolsTitle as string} data={stack} />
      {/* <div>{content1}</div>
      <div style={{ marginTop: '30px' }}>{content2}</div>

      <div>
        <h1 style={{ marginTop: '30px' }}>{toolsTitle}:</h1>
        {stack.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>
      <div style={{ marginTop: '30px' }}>{hobbies}</div> */}
      {/* {pages.map(({ id, ...rest }) => (
        <Hobbies key={id} {...rest} />
      ))} */}
      {/* {stacks.map(({ id, ...rest }) => (
        <Stacks key={id} {...rest} />
      ))} */}
    </div>
  );
}
