import Link from "next/link";

const Page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-color-primary font-semibold text-3xl">
      <div className="flex justify-center flex-col">
        <h1>404 | Page Not Found</h1>
        <Link
          href="/"
          className="text-xl text-color-primary text-center py-2 hover:text-color-accent transition-all hover:font-semibold hover:underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
