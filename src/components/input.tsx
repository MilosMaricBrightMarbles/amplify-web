import React, { useCallback, useMemo } from "react";

type Props = {
  type?: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};
const classes =
  "p-3 w-full text-sm text-gray-700 rounded border border-gray-200 outline-1 focus:outline-amplify-dark-blue/60";
export const Input = ({
  type = "text",
  placeholder,
  onChange,
  value,
}: Props) => {
  const handleChange = useCallback(
    ({ target: { value: newValue } }) => {
      onChange(newValue);
    },
    [onChange]
  );

  const props = useMemo(
    () => ({
      value,
      placeholder,
      required: true,
      className: classes,
      onChange: handleChange,
    }),
    [handleChange, placeholder, value]
  );

  return type === "textarea" ? (
    <textarea rows={6} {...props} />
  ) : (
    <input {...props} />
  );
};
