import "./Toggle.css";

interface Props {
  isChecked: boolean;
  handleChange: () => void;
}

function Toggle({ handleChange, isChecked }: Props) {
  return (
    <div className="toggle container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Theme</label>
    </div>
  );
}

export default Toggle;
