import { IInputProps } from "../../providers/@types";

function InputComponent({ label, register, error, type, placeholder }: IInputProps) {
  return (
    <div className="flex flex-col mx-auto my-auto">
      <label className="text-lg font-bold mb-2">
        {label}
      </label>
      <input
        className="border rounded-lg py-2 px-3 mb-2"
        placeholder={placeholder}
        {...register}
        type={type}
      />
      {error ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
}

export default InputComponent;