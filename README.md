# Music Releases

This is an Music Release App using [Discogs Apis](https://www.discogs.com/developers), [NextJs](https://nextjs.org/), and [React](https://reactjs.org/).

## Getting Started

First, Discogs Apis needed a developer token and for the sake of security I put it in *.env.local* and add it as a local variable on [vercel](https://vercel.com/) to can deploy it,
So If you are about to run this app in your system you need to create a *.env.local* file and put your Discogs token there, like bellow(put your token instead of *abcdefg*):

**.env.local**

```
NEXT_PUBLIC_DISCOGS_SECRET_TOKEN=abcdefg
```

Then you can run the app by:

```bash
npm i
npm run dev
# or
yarn
yarn dev
```

**notice**: The App need *Node.js 12.0 or later*

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

For deployment I use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) so you can check out the result [here](https://music-releases.marzzy-codes.com/)

## Options

The App supports:

- Responsive
- Accessible: In this App, I try to use the correct HTML tags and using [Material-ui](https://material-ui.com/) component which leads to getting a good mark on accessibility tests.
- Paginated
- Progressively enhanced: As we mentioned below this App use server-side rendering so ........
- Deployed on [vercel](https://vercel.com/)
- Perform well over slow internet connections: Please check the relevant section in the resulting test below.
- Work offline: It uses server-side rendering solutions so it sends the initial request by the server. This approach makes the App faster and makes it possible to cache. Plus the initial request gets an update by the server every 5 minutes(which can be changed in pages/index.js line 25) so the data is always accurate and update.

In order to test these features I use the [Lighthouse Chrome](https://developers.google.com/web/tools/lighthouse) and set the result below, you also can test it by yourself on every single system that you want.

//TODO: Progressively enhanced
//TODO: lighthouse pics
//TODO: change deployed address on github repo
