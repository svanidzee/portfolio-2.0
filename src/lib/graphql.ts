import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.hygraph.com/v2/cl7oxpeax3pg801uhhojx4bgb/master',
  cache: new InMemoryCache(),
});

export async function getHomePage() {
  try {
    const { data } = await client.query({
      query: gql`
        query MyQuery {
          page(where: { slug: "home" }) {
            name
            aboutTitle
            aboutContent
            hobbiesTitle
            hobbies
            id
            myName
            myposition
            slug
            toolsTitle
            toolsContent
            stack
          }
        }
      `,
    });
    return data.page;
  } catch (error) {
    console.log(error);
    return [];
  }
}
