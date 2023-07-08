import { client, getWorksPage, geTAssets } from '../../lib/graphcms';
import Projects from '../../components/projects';
import Projects2 from '../../components/projects2';
import Paragraph from '../../components/paragraph';
// import Pages from './layout';

export default async function Page() {
  const works = await getWorksPage();
  const assets = await geTAssets();
  // console.log(assets);

  return (
    <>
      <Paragraph
        fontSize='6.66rem'
        lineHeight='1em'
        letterSpacing='tighter'
        textTransform='uppercase'
        fontWeight={500}
        // fontStretch='extra-condensed'
        fontStyle='oblique'>
        Selected work
        {/* Projects */}
      </Paragraph>
      {/* {works.map(({ id, ...rest }) => (
        // {works.map(({ id, ...rest }) => (
        // <Projects key={id} {...rest} />
        <Projects key={id} {...rest} />
      ))} */}
      <Projects bg={assets} />
      {/* {works.map(({ id, ...rest }) => (
        <Projects2 key={id} {...rest} />
      ))} */}
      {/* {works.map((work) => (
        <Projects2 key={work.id} data={work} />
      ))} */}
      {/* <Projects2 data={works} /> */}
    </>
  );
}

// Type '{ description: string; githubUrl: string; name: string; stack: string[];
// bg: Pick < {
//   stage: Stage; locale: "en"; localizations: Asset[]; documentInStages: Asset[];
//   mimeType: string | null; ... 16 more ...; __typename: "Asset";
// }, "url" > []; key: string; }' is not assignable to type 'ProjectsProps'.
// Types of property 'bg' are incompatible.
// Type 'Pick<{ stage: Stage; locale: "en";
// localizations: Asset[]; documentInStages: Asset[]; mimeType: string | null; size: number |
//   null; width: number | null; height: number | null; ... 13 more ...; __typename: "Asset"; },
// "url" > []' is not assignable to type 'Asset[]'.

// Type 'Pick<{ stage: Stage; locale: "en"; localizations: Asset[]; documentInStages: Asset[];
// mimeType: string | null; size: number | null; width: number | null; height: number | null;
// ... 13 more ...; __typename: "Asset"; }, "url" > ' is missing the following properties from type
// 'Asset': stage, locale, localizations, documentInStages, and 17 more.ts(2322)
