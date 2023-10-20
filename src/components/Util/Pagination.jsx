const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    scrollTop();
    setPage((prev) => {
      if (prev === lastPage) {
        return prev;
      }
      return prev + 1;
    });
  };
  const handlePrevPage = () => {
    scrollTop();
    setPage((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  };
  return (
    <div className="flex items-center justify-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button
        onClick={handlePrevPage}
        className="transition-all hover:text-color-accent"
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className="transition-all hover:text-color-accent"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
