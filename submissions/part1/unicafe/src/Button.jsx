export const Button = ({ type, onClick }) => {
  return (
    <button onClick={onClick}>{type}</button>
  );
};
