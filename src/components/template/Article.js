import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";

export function Article({ post, prev, next }) {
  return (
    <>
      <Head>
        <title>
          {post.title} | {SITE_NAME}
        </title>
      </Head>
    </>
  );
}
