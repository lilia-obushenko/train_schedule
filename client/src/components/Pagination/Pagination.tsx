import { Pagination } from "react-bootstrap";
import { FC } from "react";
import './Paginator.css';
import { Train } from "../../typedefs";
import { usePagination } from "./usePagination";

interface Props {
  trains: Train[],
  loading: boolean,
  onItemsChange: (items: Train[]) => void,
}

export const Paginator: FC<Props> = (props) => {
  const { trains, onItemsChange, loading } = props;

  const {
    totalPages,
    currentPage,
    handlePageChange,
  } = usePagination({ trains, onItemsChange });
  

  return (
    <div className="paginator">
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
    </div>
  );
};