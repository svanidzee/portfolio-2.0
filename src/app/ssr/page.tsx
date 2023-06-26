import { getHomePage } from '../../lib/graphql';

type Repo = {
  aboutContent: string;
  aboutTitle: string;
  hobbies: string;
  hobbiesTitle: string;
  id: string;
  myName: string;
  myposition: string;
  name: string;
  slug: string;
  stack: string[];
  toolsContent: string;
  toolsTitle: string;
  __typename: string;
};

async function getServerSideProps(): Promise<Repo> {
  const res = await getHomePage();
  // console.log(res);
  return res;
}

export default async function Home() {
  const repo = await getServerSideProps();
  console.log(repo);
  return <div>{repo.aboutContent}</div>;
}
