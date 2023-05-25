import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Train } from "./typedefs";
import { ChoiseButtons } from "./components/ChoiceButtons/ChoiseButtons";
import { DestinationForm } from "./components/DestinationForm/DestinationForm";
import { TrainsTable } from "./components/TrainsTable/TrainsTable";
import { TrainNumber } from "./components/TrainNumberForm/TrainNumber";
import { Paginator } from "./components/Pagination/Pagination";

export const App = () => {
  const [trains, setTrains] = useState<Train[]>([]);
  const [currentItems, setCurrentItems] = useState<Train[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNumberSearch, setIsNumberSearch] = useState(false);

  const handleChangeItems = (items: Train[]) => {
    setCurrentItems(items);
  };

  return (
    <div className="App">
      <h1 className="title">
        Trains schedule
      </h1>

      <ChoiseButtons
        isNumber={isNumberSearch}
        onChoiseChange={setIsNumberSearch}
      />

      {!isNumberSearch ? (
        <DestinationForm
          onGetTrains={setTrains}
          onLoading={setIsLoading}
          onError={setIsError}
        />
      ) : (
        <TrainNumber 
          onLoading={setIsLoading} 
          onGetTrains={setTrains}
          onError={setIsError}
        />
      )}

      <TrainsTable
        error={isError}
        trains={currentItems}
        loading={isLoading}
      />

      <Paginator 
        trains={trains}
        loading={isLoading}
        onItemsChange={handleChangeItems} 
      />
    </div>
  );
};
