import { useEffect, useState } from "react";
import { useRoadMapData } from "../hooks/useRoadMapData";
import { Roadmap } from "./roadmap";
import { RoadMapForm } from "./roadmap-form/roadmap-form";
import { RequestDataProps } from "../models/models";
import { useOpenStreetData } from "../hooks/useOpenStreetData";

export function RoadMapContainer() {
  const [requestData, setRequestData] = useState<RequestDataProps>();

  const { isLoading, isError, data, error, refetch } =
    useRoadMapData(requestData);

  useEffect(() => {
    if (requestData != undefined) refetch();
  }, [requestData]);

  const onSubmit = (props: RequestDataProps) => {
    setRequestData(props);
  };

  return (
    <nav className="flex flex-col h-full w-full items-start justify-start mt-6">
      <RoadMapForm submitFunction={onSubmit} isLoading={isLoading} />
      <Roadmap content={data} />
    </nav>
  );
}
