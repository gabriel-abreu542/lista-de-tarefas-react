import { useState } from "react";

interface Props {
  value?: string;
  id: string;
  label?: string;
}

function TextInput({ id }: Props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default TextInput;
