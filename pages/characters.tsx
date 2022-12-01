import Head from "next/head";
import Image from "next/image";

export async function getServerSideProps(context: any) {
  const res = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

function Characters({ data }: { data: any }) {
  const { results = [] } = data;

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24">
      <Head>
        <title>Characters | Rick and Morty C-137</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="description" content="Characters at Rick and Morty C-137" />
        <meta name="keywords" content="characters, rick and morty c-137" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Image
        className="w-1/2 mx-auto"
        src="/banner/RickAndMortyBanner.png"
        alt="Banner of Rick and Morty"
        width="100"
        height="100"
        priority
      />
      <div className="grid grid-cols-2 justify-between">
        {results.map(
          (result: {
            id: string;
            species: string;
            name: string;
            location: { name: string };
            image: string;
          }) => {
            const { id, species, name, location, image } = result;
            return (
              <>
                <article
                  key={id}
                  className="flex overflow-hidden bg-black rounded-lg m-3 shadow-sm"
                >
                  <div className="flex-1">
                    <Image
                      className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg"
                      src={image ?? "image"}
                      alt={`Image of ${name}`}
                      width={100}
                      height={100}
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-md sm:text-sm text-white">
                      <h2>{name}</h2>
                      <p>{species}</p>
                      <p>Last Seen: {location.name}</p>
                    </div>
                  </div>
                </article>
              </>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Characters;
