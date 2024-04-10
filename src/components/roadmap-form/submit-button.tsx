import { CircularProgress } from "./circular-progress";

type SubmitButtonProps = {
  isLoading: Boolean;
};

export function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full h-12 py-2 bg-blue-400 text-blue-50 rounded-md mt-2 hover:bg-blue-500 flex items-center justify-center"
      disabled={!!isLoading}
    >
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <p className="font-poppins text-white font-semibold text-sm">
          Gerar roteiro
        </p>
      )}
    </button>
  );
}
