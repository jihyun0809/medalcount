const InputFiled = ({ name, type, value, onChange, id, placeholder }) => {
  return (
    <div className="countryInput">
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : null}
      />
    </div>
  );
};

export default InputFiled;

{
  /* <div>
<label htmlFor="name">국가명🏁</label>
name="name"
 type="text"
 onChange={inputCountryName} />
</div> */
}

{
  /* <div>
<label htmlFor="bronze">동메달</label>
 <input
 id="bronze"
 type="number"
name="bronze"
 value={bronzeMedal}
onChange={inputBronzeMedal} />
 </div> */
}
