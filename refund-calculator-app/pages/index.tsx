import Container from "../components/container";
import CountriesPages from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>VAT Refund Calculator</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <CountriesPages posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "country",
    "taxrate",
    "minimumSpend",
    "flag",
    "timetoclaim",
    "exemptions",
    "restrictions",
    "checkInLuggage",
    "carryOnLuggage",
  ]);

  return {
    props: { allPosts },
  };
};
