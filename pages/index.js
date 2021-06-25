import Head from 'next/head';
import fetch from 'node-fetch';
import { getRequest } from 'helpers/requests';
import Home from 'components/home';

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Discogs Releases</title>
        <meta name="description" content="This is a simple app using Discogs API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home {...props} />
      </main>

    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(getRequest('database/search?query=moderat&type=release&per_page=3&page=1'));
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
    revalidate: 60,
  };
}
