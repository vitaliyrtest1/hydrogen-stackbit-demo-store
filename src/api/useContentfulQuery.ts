import {CacheNone, useQuery} from '@shopify/hydrogen';

const SPACE_ID = Oxygen.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = Oxygen.env.CONTENTFUL_PREVIEW_TOKEN;
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

export const useContentfulQuery = ({
  query,
  variables,
  key = [],
}: {
  query: string;
  variables: any;
  key?: string[];
}) => {
  const {data} = useQuery(
    key,
    async () => {
      const response = await fetch(CONTENTFUL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });
      return response.json();
    },
    {
      cache: CacheNone(),
    },
  );

  return data;
};
