import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/landing/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty - C137</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="description" content="Rick and Morty C-137" />
        <meta name="keywords" content="rick and morty c-137" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="min-h-screen flex flex-col">
        <Hero />
      </section>
    </>
  );
};

export default Home;
