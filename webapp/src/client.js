import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';

const link = new HttpLink({
  uri: 'https://gsopapi.gnt.co.jp/graphql',
  headers: {
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncmFudF90eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwidXNlcl9uYW1lIjoiZG9uZy5kcUBnbnQuY29tLnZuIiwic2NvcGUiOlsiU0VSVkVSIl0sIm5hbWUiOiJEYW5nIFF1YW5nIERvbmciLCJhdmF0YXIiOm51bGwsImV4cCI6MTYzMDYyOTcxMSwiYXV0aG9yaXRpZXMiOlsiRU1QTE9ZRUUiXSwianRpIjoiMTk3ZGIzNTMtYWViMy00OWRjLTgzM2YtMTdlMzM1MTEwYWM3IiwiZW1haWwiOiJkb25nLmRxQGdudC5jb20udm4iLCJjbGllbnRfaWQiOiJnc29wIiwiZ3JvdXAiOltdfQ.qZEGPZfiELnqChQh4CVA9JV0hnwUx3Y2zDjLP_7hGwOxF8eOQfMZsxVtOgHPOngmPI7ldyqBsRKW5K7vMatx4tOuTTDvAVZaHT0D65I1UCtEkfnO0b8vhk72WzIIqo8Fpd3Lt17sID20gUj8bmdcTzrlV_SOvRW6lUlUZao4UQAbiiv9j-qYw8yVNbFv4t-GLrai54tXSxTdW-9w48r5ZBNOTDLMY26trc66CXGngvGA1BYtoJfyOTuAKbsr2xnFvn4oq7R_l_fCZgVnI8qJg7jZug192GYq0fEmT8xeMMOOWku3rI7CCuGVf-zM0OicmuJ3-YQ3oDZmvDKVr-Slzw',
  },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

const findInOutTodayQuery = gql`
  {
    findInOutToDay {
      id
      date
      checkIn
      checkOut
      __typename
    }
  }
`;

client
  .query({ query: findInOutTodayQuery })
  .then((result) => console.log(result))
  .catch((error) => console.log({ error }));

export default client;
