import { InputHTMLAttributes, forwardRef, useId, useState } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, placeholder, label, helperText = "", ...props }, ref) => {
    const inputId = useId();

    return (
      <div className="mb-4 flex flex-col w-full">
        {label && (
          <label
            className="text-gray-700 text-sm font-poppins font-bold mb-2"
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
        <input
          className="shadow appearance-none border rounded py-3 px-3 text-gray-600 leading-tight focus:outline-blue-300 focus:shadow-outline"
          type={type}
          name={name}
          placeholder={placeholder}
          {...props}
          ref={ref}
          id={inputId}
        />
        {helperText?.length > 0 && (
          <p className="font-poppins font-light text-red-400 text-sm">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

// export function Input({ ...inputProps }) {
//   return (
//     <div className="mb-4 flex flex-col w-full">
//       <label
//         className="text-gray-700 text-sm font-poppins font-bold mb-2"
//         htmlFor={label}
//       >
//         {label}
//       </label>
//       <input
//         className="shadow appearance-none border rounded py-3 px-3 text-gray-600 leading-tight focus:outline-blue-300 focus:shadow-outline"
//         {...inputProps}
//       />
//       //{" "}
//     </div>
//   );
// }
