export function getRequest(relativeUrl) {
  const myHeaders = new Headers({
    'Authorization': `Discogs token=${process.env.NEXT_PUBLIC_DISCOGS_SECRET_TOKEN}`
  });

  return new Request(`https://api.discogs.com/${relativeUrl}`, {
    method: 'GET',
    headers: myHeaders,
  });
}

export const getInitialRequestUrl = 'database/search?type=release&per_page=6&page=1';
export const getSearchRequestUrl = (value, page) => `database/search?${value ? `query=${value}&` : ''}type=release&per_page=6&page=${page || 1}`;
