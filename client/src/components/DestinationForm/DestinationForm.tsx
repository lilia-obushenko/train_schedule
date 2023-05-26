import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { Train } from "../../typedefs";
import { useForm } from "./useForm";

interface Props {
  onLoading: (value: boolean) => void,
  onError: (value: boolean) => void,
  onGetTrains: (trains: Train[]) => void,
}

export const DestinationForm: FC<Props> = (props) => {
  const {
    from,
    setFrom,
    handleAll,
    destination,
    handleSubmit,
    setDestination,
  } = useForm(props);

  return (
    <Form className="forms" onSubmit={handleSubmit}>
      <Form.Control
        className="forms__field"
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

      <Button 
        variant="danger" 
        type="submit"
      >
        Search
      </Button>

      <Button 
        variant="danger" 
        type="submit"
        onClick={handleAll}
      >
        All
      </Button>
    </Form>
  )
}
