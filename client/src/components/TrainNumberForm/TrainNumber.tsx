import { FC } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Train } from '../../typedefs';
import { useTrainNumber } from './useTrainNumber';

interface Props {
  onLoading: (value: boolean) => void,
  onError: (value: boolean) => void,
  onGetTrains: (trains: Train[]) => void,
}

export const TrainNumber: FC<Props> = (props) => {
  const {
    trainNumber,
    handleChange,
    handleSubmitNumber,
  } = useTrainNumber(props);

  return (
    <Form 
      className="forms"
      onSubmit={handleSubmitNumber}
    >
      <Form.Control
        value={trainNumber}
        type="text"
        onChange={handleChange}
      />

      <Button variant="danger" type="submit">
        Search
      </Button>
    </Form>
  );
};
