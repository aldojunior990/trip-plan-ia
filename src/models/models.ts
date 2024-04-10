export type RequestDataProps = {
  currentLocal: string;
  destination: string;
  countOfDays: number;
  travelDate: string;
};

export type Choice = {
  finish_reason: string;
  index: number;
  message: {
    content: string;
  };
  role: string;
};

export type ResponseDataProps = {
  choices: Choice[];
};

export type CityProps = {
  name: string;
};

export type OpenStreetProps = {
  cities: CityProps[];
};
