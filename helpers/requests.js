export function getRequest(relativeUrl) {
  const myHeaders = new Headers({
    'Authorization': `Discogs token=${process.env.NEXT_PUBLIC_DISCOGS_SECRET_TOKEN}`
  });

  return new Request(`https://api.discogs.com/${relativeUrl}`, {
    method: 'GET',
    headers: myHeaders,
  });
}
