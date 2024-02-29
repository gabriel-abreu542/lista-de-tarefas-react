import { useState } from "react";

interface Props {
  label: string;
}

function Checkbox({ label }: Props) {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="input">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
