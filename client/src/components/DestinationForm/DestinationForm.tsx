import { FC, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import client from '../../fetchingClient';
import { Train } from "../../typedefs";

interface Props {
  onLoading: (value: boolean) => void,
  onError: (value: boolean) => void,
  onGetTrains: (trains: Train[]) => void,
}

export const DestinationForm: FC<Props> = (props) => {
  const { 
    onGetTrains, 
    onLoading, 
    onError, 
  } = props;

  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onLoading(true);
    onError(false);

    try {
      const trainsFromServer = await client.getTrains(from, destination);

      if (!trainsFromServer.length) {
        onError(true);
      }

      onGetTrains(trainsFromServer);
    } catch {
      onError(true);
    } finally {
      onLoading(false);
    }

    setFrom('');
    setDestination('');
  };
  
  return (
    <Form className="forms" onSubmit={handleSubmit}>
      <Form.Control
        value={from}
        type="text"
        id="inputFrom"
        placeholder="From"
        aria-describedby="fromHelpBlock"
        onChange={(e) => setFrom(e.target.value)}
      />

      <Form.Control
        value={destination}
        type="text"
        id="inputFrom"
        placeholder="To"
        aria-describedby="toHelpBlock"
        onChange={(e) => setDestination(e.target.value)}
      />

      <Button variant="danger" type="submit">
        Search
      </Button>
    </Form>
  )
}
