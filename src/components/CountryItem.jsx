const CountryItem = ({ country }) => {
  //한개를 표시하는 컴포넌트
  return (
    <>
      <tr key={country.name}>
        <td>{country.name}</td>
        <td>{country.gold}</td>
        <td>{country.silver}</td>
        <td>{country.bronze}</td>
        <td>
          <button>삭제!</button>
        </td>
      </tr>
    </>
  );
};

export default CountryItem;
