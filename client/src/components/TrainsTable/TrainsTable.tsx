import { FC } from "react";
import { Train } from "../../typedefs";
import { Table } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import { TrainInfo } from "../TrainInfo/TrainInfo";

interface Props {
  trains: Train[],
  loading: boolean,
  error: boolean,
}

export const TrainsTable: FC<Props> = (props) => {
  const { trains, loading, error } = props;
  const isTableVisible = trains.length > 0 && !loading && !error;

  return (
    <div className="list">
      {loading && (
        <Spinner variant="dark" />
      )}
        
      {isTableVisible && (
        <>
          <h2>Trains in the coming week</h2>
        
          <Table striped bordered hover className="table">
            <thead>
              <tr>
                <th>Train №</th>
                <th>From</th>
                <th>To</th>
                <th>Dispatch</th>
                <th>Time</th>
                <th>Arrival</th>
                <th>Time</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {trains.map((train) => (
                <TrainInfo 
                key={train.number} 
                train={train} 
              />
              ))}
            </tbody>
          </Table>
        </>
      )}

      {error && (
        <h2>Oops..No such trains avaliable..</h2>
      )}
    </div>
  );
};
