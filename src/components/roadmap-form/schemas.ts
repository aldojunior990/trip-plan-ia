import { z } from "zod";

export const InputsSchema = z.object({
  destination: z.string(),
  origin: z.string(),
  date: z.string().refine(
    (value) => {
      const currentDate = new Date();
      const selectedDate = new Date(value);
      return selectedDate > currentDate;
    },
    {
      message: "Insira uma data atual ou futura.",
    }
  ),
  days: z.string().refine(
    (value) => {
      return parseInt(value) > 0;
    },
    {
      message: "O número de dias deve ser maior que zero",
    }
  ),
});
