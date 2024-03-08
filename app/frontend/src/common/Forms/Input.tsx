import { useField } from "formik";
import { PropsWithChildren, ComponentProps } from "react";

interface FormicInputProps extends ComponentProps<"input">, PropsWithChildren {
  label: string;
}
export default function FormicInput({
  children,
  label,
  ...resProps
}: FormicInputProps) {
  const [field, meta] = useField(label);
  const createId = label + Math.random();
  return (
    <label className="flex flex-col item-start my-5 gap-y-4" htmlFor={createId}>
      <h1 className=" text-lg">{label}</h1>
      <input
        id={createId}
        {...resProps}
        {...field}
        className="border-2 border-black text-left text-lg px-2  rounded-sm"
      />
      {children}
      {meta.touched && meta.error ? (
        <div className="text-red-400   ">{meta.error}</div>
      ) : null}
    </label>
  );
}
