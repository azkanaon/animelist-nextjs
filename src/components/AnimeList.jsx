import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((data) => (
        <Link
          key={data.mal_id}
          href={`/${data.mal_id}`}
          className="cursor-pointer text-color-primary md:text-red-600 hover:text-color-accent transition-all"
        >
          <Image
            src={data.images.webp.image_url}
            alt="..."
            width={350}
            height={350}
            className="w-full max-h-64 object-cover"
          />
          <h3 className=" font-bold text-md md:text-xl p-4">{data.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
