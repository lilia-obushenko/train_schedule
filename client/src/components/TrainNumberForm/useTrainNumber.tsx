import { ChangeEvent, FormEvent, useState } from "react";
import { Train } from "../../typedefs";
import client from '../../fetchingClient';

interface Options {
  onLoading: (value: boolean) => void,
  onError: (value: boolean) => void,
  onGetTrains: (trains: Train[]) => void,
}

export const useTrainNumber = (options: Options) => {
  const {
    onError,
    onGetTrains,
    onLoading,
  } = options;

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTrainNumber(Number(e.target.value))
  };

  return {
    trainNumber,
    handleChange,
    handleSubmitNumber,
  };
}