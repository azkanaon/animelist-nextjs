import Link from "next/link";

const HeaderAnimeList = ({ title, linkHref, linkTitle }) => {
  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="font-bold text-3xl text-color-primary">{title}</h1>
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="text-md md:text-xl underline hover:text-color-accent transition-all text-color-primary"
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default HeaderAnimeList;
