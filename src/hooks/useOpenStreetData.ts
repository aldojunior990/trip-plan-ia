import { useQuery } from "@tanstack/react-query";
import { openStreetApi } from "../services/axios";
import { OpenStreetProps } from "../models/models";

const fetchData = async (search: string) => {
  try {
    const response = await openStreetApi.get<OpenStreetProps>(
      "${" + `${search}` + "}"
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export function useOpenStreetData(search: string) {
  const query = useQuery<OpenStreetProps>({
    queryKey: ["city", search],
    queryFn: async () => {
      const result = await fetchData(search);
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
