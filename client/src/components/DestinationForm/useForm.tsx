import { FormEvent, useState } from "react";
import { Train } from "../../typedefs";
import client from '../../fetchingClient';

interface Options {
  onLoading: (value: boolean) => void,
  onError: (value: boolean) => void,
  onGetTrains: (trains: Train[]) => void,
}

export const useForm = (options: Options) => {
  const { 
    onGetTrains, 
    onLoading, 
    onError, 
  } = options;

  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onLoading(true);
    onError(false);

    try {
      if (!from || !destination) {
        return;
      }

      const trainsFromServer = await client.getTrains(from, destination);

      if (!trainsFromServer.length) {
        onError(true);
      }

      onGetTrains(trainsFromServer);
    } catch {
      onError(true);
    } finally {
      onLoading(false);
    };

    setFrom('');
    setDestination('');
  };

  const handleAll = async () => {
    onError(false);

    try {
      const trainsFromServer = await client.getTrains(from, destination);

      onGetTrains(trainsFromServer);
    } catch {
      onError(true);
    };
  };

  return {
    from,
    destination,
    setFrom,
    setDestination,
    handleSubmit,
    handleAll,
  };
}