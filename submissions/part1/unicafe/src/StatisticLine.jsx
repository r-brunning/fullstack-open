
export const StatisticLine = ({ type, result }) => {
  return (
    <div>
      {type}{"  "}{result}{type == "positive" && "%"}
    </div>
  );
};
