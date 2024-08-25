
export const StatisticLine = ({ type, result }) => {
  return (
      <tr>
        <td>{type}</td>
        <td>{result}{type == "positive" && "%"}</td>
      </tr>
  );
};
