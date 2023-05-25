import { FC } from "react";
import { Train } from "../../typedefs";

interface Props {
  train: Train,
}

export const TrainInfo: FC<Props> = (props) => {
  const { train } = props;
  const {
    number,
    from,
    to,
    dispatch,
    arrival,
    dispatchTime,
    arrivalTime,
    price,
  } = train;

  return (
    <tr>
      <td>{`№ ${number}`}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{new Date(dispatch).toLocaleDateString()}</td>
      <td>{dispatchTime}</td>
      <td>{new Date(arrival).toLocaleDateString()}</td>
      <td>{arrivalTime}</td>
      <td>{price}</td>
    </tr>
  );
};
