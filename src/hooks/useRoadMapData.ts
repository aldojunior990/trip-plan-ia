import { useQuery } from "@tanstack/react-query";
import { RequestDataProps, ResponseDataProps } from "../models/models";
import { gptApi } from "../services/axios";

const fetchData = async (requestData: RequestDataProps) => {
  try {
    const response = await gptApi.get<ResponseDataProps>("/roadmap/generate", {
      params: {
        currentLocal: requestData.currentLocal,
        destination: requestData.destination,
        countOfDays: requestData.countOfDays,
        travelDate: requestData.travelDate,
      },
    });

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export function useRoadMapData(data: RequestDataProps | any) {
  const query = useQuery<ResponseDataProps>({
    queryKey: ["roadmap-data", data],
    queryFn: async () => {
      const result = await fetchData(data);
      if (result === undefined) {
        throw new Error("fetchData retornou undefined");
      }
      return result;
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return query;
}
