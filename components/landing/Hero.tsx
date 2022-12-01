import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid w-full place-items-center bg-cover bg-center min-h-screen bg-base-200">
      <div className="z-0 flex items-center justify-center max-w-7xl flex-col lg:flex-row gap-4 p-4">
        <Image
          src="/landing/RickAndMortyHero.jpeg"
          alt="Rick and Morty entering through a portal"
          className="max-w-sm rounded-lg shadow-2xl object-contain"
          width="260"
          height="400"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Welcome to Rick and Morty C-137!
          </h1>
          <p className="py-6">
            Wubba lubba dub dub! Enter through the portal if you wish to see all
            the characters.
          </p>
          <Link
            href="/characters"
            className="flex cursor-pointer items-center justify-center px-4 py-2 bg-green-500 rounded-lg hover:bg-purple-600 text-white"
          >
            Characters
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
