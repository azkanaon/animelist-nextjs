import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/HeaderAnimeList";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      <section>
        <HeaderAnimeList
          title="Paling Populer"
          linkHref="/popular"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
