import { FC } from "react";
import { Button } from "react-bootstrap";

interface Props {
  isNumber: boolean,
  onChoiseChange: (value: boolean) => void,
}

export const ChoiseButtons: FC<Props> = (props) => {
  const {
    isNumber,
    onChoiseChange,
  } = props;

  return (
    <div className="buttons">
      <Button
        variant={isNumber ? "light" : "info"}
        onClick={() => onChoiseChange(false)}
      >
        Search by route
      </Button>

      <Button
        variant={!isNumber ? "light" : "info"}
        onClick={() => onChoiseChange(true)}
      >
        Search by train number
      </Button>
    </div>
  )
};
