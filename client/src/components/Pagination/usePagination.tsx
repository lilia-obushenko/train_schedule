import { useEffect, useState } from "react";
import { Train } from "../../typedefs";

interface Options {
  trains: Train[],
  onItemsChange: (items: Train[]) => void,
}

export const usePagination = (options: Options) => {
  const { trains, onItemsChange } = options;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    onItemsChange(trains.slice(indexOfFirstItem, indexOfLastItem));
  }, [trains, indexOfFirstItem, indexOfLastItem])
  

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(trains.length / itemsPerPage);

  return {
    currentPage,
    totalPages,
    handlePageChange,
  }
}