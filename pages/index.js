import Head from 'next/head';
import fetch from 'node-fetch';
import { getRequest, getInitialRequestUrl } from 'helpers/requests';
import Home from 'components/home';

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Discogs Releases</title>
      </Head>

      <main>
        <Home data={props} />
      </main>

    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(getRequest(getInitialRequestUrl));
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
