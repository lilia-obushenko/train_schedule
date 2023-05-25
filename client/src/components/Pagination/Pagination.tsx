import { Pagination } from "react-bootstrap";
import { FC, useEffect, useState } from "react";
import { Train } from "../../typedefs";

interface Props {
  trains: Train[],
  loading: boolean,
  onItemsChange: (items: Train[]) => void,
}

export const Paginator: FC<Props> = (props) => {
  const { trains, onItemsChange, loading } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  

  useEffect(() => {
    onItemsChange(trains.slice(indexOfFirstItem, indexOfLastItem));
  }, [indexOfFirstItem, indexOfLastItem, onItemsChange, trains])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(trains.length / itemsPerPage);

  return (
    <>
      {totalPages > 1 && !loading && (
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />

          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}

          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      )}
    </>
  );
};