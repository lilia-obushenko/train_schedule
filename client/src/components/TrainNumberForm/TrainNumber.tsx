import { FC, FormEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import client from '../../fetchingClient';
import { Train } from '../../typedefs';

interface Props {
  onLoading: (value: boolean) => void,
  onError: (value: boolean) => void,
  onGetTrains: (trains: Train[]) => void,
}

export const TrainNumber: FC<Props> = (props) => {
  const {
    onError,
    onGetTrains,
    onLoading,
  } = props;

  const [trainNumber, setTrainNumber] = useState(0);

  const handleSubmitNumber = async (e: FormEvent) => {
    e.preventDefault();
    onLoading(true);
    onError(false);

    try {
      const trainFromServer = await client.getByNumber(trainNumber);

      if (!trainFromServer) {
        onError(true);
      }

      const train = [trainFromServer];

      onGetTrains(train);
    } catch {
      onError(true);
    } finally {
      onLoading(false);
    }
  };

  return (
    <Form 
      className="forms"
      onSubmit={handleSubmitNumber}
    >
      <Form.Control
        value={trainNumber}
        type="text"
        id="inputFrom"
        placeholder="Train number"
        aria-describedby="trainNumberHelp"
        onChange={(e) => setTrainNumber(Number(e.target.value))}
      />

      <Button variant="danger" type="submit">
        Search
      </Button>
    </Form>
  );
};
