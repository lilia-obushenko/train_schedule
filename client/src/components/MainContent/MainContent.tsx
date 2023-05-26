import { useState } from "react";
import { Train } from "../../typedefs";
import { ChoiseButtons } from "../ChoiceButtons/ChoiseButtons";
import { DestinationForm } from "../DestinationForm/DestinationForm";
import { TrainNumber } from "../TrainNumberForm/TrainNumber";
import { TrainsTable } from "../TrainsTable/TrainsTable";
import { Paginator } from "../Pagination/Pagination";

export const MainContent = () => {
  const [trains, setTrains] = useState<Train[]>([]);
  const [currentItems, setCurrentItems] = useState<Train[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNumberSearch, setIsNumberSearch] = useState(false);

  const handleChangeItems = (items: Train[]) => {
    setCurrentItems(items);
  };
  
  return (
    <>
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
    </>
  );
};
