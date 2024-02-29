interface Props {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: Props) {
  return (
    <div>
      <button className="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
