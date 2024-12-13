const CountryItem = ({ country, onClick }) => {
  return (
    <tr>
      <td>{country.name}</td>
      <td>{country.gold}</td>
      <td>{country.silver}</td>
      <td>{country.bronze}</td>
      <td>
        <button onClick={() => onClick(country.name)}>삭제</button>
      </td>
    </tr>
  );
};

export default CountryItem;
