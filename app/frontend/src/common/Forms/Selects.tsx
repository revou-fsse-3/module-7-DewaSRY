import { useField } from "formik";
import { Fragment, PropsWithChildren, ComponentProps } from "react";

interface MySelectProps extends ComponentProps<"select">, PropsWithChildren {
  label: string;
  options: string[];
}

export default function SelectFormic({
  children,
  label,
  options,
}: MySelectProps) {
  const [field, meta] = useField(label);
  const createId = label + Math.random();

  return (
    <Fragment>
      <label className="flex flex-col item-start my-5" htmlFor={createId}>
        <h1 className="text-lg  my-2">{label}</h1>
        <select
          id={createId}
          {...field}
          className="border-2 border-black px-2  text-left text-lg rounded-sm py-2"
        >
          {options.map((o) => (
            <Fragment key={o}>
              <option value={o.trim()}>{o}</option>
            </Fragment>
          ))}
        </select>
        {children}
        {meta.touched && meta.error ? (
          <div className="text-red-400 text-left  my-2">{meta.error}</div>
        ) : null}
      </label>
    </Fragment>
  );
}
