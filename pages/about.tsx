import { NextPage } from "next";
import Head from "next/head";

type AboutProps = {
  title: string;
  children?: React.ReactNode;
};

function About({ title, children }: AboutProps) {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="mt-4 text-xl font-light">{children}</div>
    </>
  );
}

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Rick and Morty C-137</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="description" content="About at Rick and Morty C-137" />
        <meta name="keywords" content="about, rick and morty c-137" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 font-roboto dark:text-white min-h-screen"
        id="about"
      >
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          About
        </h1>
        <p className="mt-4 text-xl font-light">
          Rick and Morty C-137 is a place for all Ricks and Mortys to co-exist.
        </p>
        <About title="Episodes">
          <p>Coming Soon</p>
        </About>
        <About title="Locations">
          <p>Coming Soon</p>
        </About>
      </section>
    </>
  );
};

export default AboutUs;
