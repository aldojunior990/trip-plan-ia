import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { Input } from "./input";
import { SubmitButton } from "./submit-button";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { RequestDataProps } from "../../models/models";
import { InputsSchema } from "./schemas";
import { useOpenStreetData } from "../../hooks/useOpenStreetData";

type InputsProps = z.infer<typeof InputsSchema>;

type RoadMapFormProps = {
  isLoading: Boolean;
  submitFunction: (data: RequestDataProps) => void;
};

export function RoadMapForm({ isLoading, submitFunction }: RoadMapFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputsProps>({
    mode: "onBlur",
    resolver: zodResolver(InputsSchema),
  });

  const destination = useWatch({ control, name: "destination" });
  const origin = useWatch({ control, name: "origin" });

  const onSubmit: SubmitHandler<InputsProps> = (data) => {
    const currentLocalQuery = useOpenStreetData(data.origin);
    const destinationlQuery = useOpenStreetData(data.destination);
    currentLocalQuery.refetch().then((currentLocalResponse) => {
      if (currentLocalResponse.data?.cities.length === 0) return;
      destinationlQuery.refetch().then((destinationResponse) => {
        if (destinationResponse.data?.cities.length == 0) return;
      });
    });

    const requestData: RequestDataProps = {
      currentLocal: data.origin,
      countOfDays: parseInt(data.days),
      destination: data.destination,
      travelDate: data.date,
    };
    submitFunction(requestData);
  };

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Qual cidade deseja visitar?"
        type="text"
        placeholder="Cidade de destino"
        helperText={errors.destination?.message}
        {...register("destination")}
      />
      <Input
        label="Informe sua cidade de origem."
        type="text"
        placeholder="Cidade de Origem"
        helperText={errors.origin?.message}
        {...register("origin")}
      />
      <Input
        label="Data da viagem."
        type="date"
        placeholder="Data de partida"
        helperText={errors.date?.message}
        {...register("date")}
      />
      <Input
        label="Quantos dias pretende passar na cidade?"
        type="number"
        placeholder="Previsão de dias."
        helperText={errors.days?.message}
        {...register("days")}
      />
      <SubmitButton isLoading={isLoading} />
    </form>
  );
}
