import { useState } from "react";
import CountryItem from "./components/CountryItem";
import InputFiled from "./components/inputFiled";

//css 가져오겠다 
const App = () => {

  const [countryName, setCountryName] = useState("")
  const [goldMedal, setGoldName] = useState(0)
  const [silverMedal, setSilverName] = useState(0)
  const [bronzeMedal, setBronzeName] = useState(0)
  //[a,b]라고 한다면 처음에는 a의 초기값 0 b함수를 사용해 a의 값을 업데이트할수있다
  //const[변수,set변수]=useState("")
  //사용자가 입력한 국가와 메달갯수가 있는 데이터!
  const [medalCountries, setMedalCountries] = useState([])
  //사용자에게 국가명을 입력받는 함수
  //useState 란? 상태변수:컴포넌트가 기억해야할 값 상태업데이트함수:상태를 변경하고 컴포넌트를 다시 렌더링
  //렌더링:상태가 변경되면 해당 컴포넌트는 업데이트된 상태로 다시 화면에 그려진다
  //useState안에  useState 초기 값을 넣을수 있따 값을 바꾼다?

  const inputCountryName = (e) => {
    setCountryName(e.target.value);//e.target.value->이벤트가 발생한 요소->입력값
  }
  //여기서 e는 inputCountryName함수가 호출될때 리엑트가 자동으로 이벤트 객체 e를 전달

  //금메달 갯수를 입력받는 함수
  const inputGoldMedal = (e) => {
    setGoldName(Number(e.target.value))//e타겟 어쩌구의 값<<(goldMedal)을 setGoldName을 사용해서 9번째줄 goldMedald의 값을 변경!!!!!!!!!!!!!!!
  }
  //은메달
  const inputSilverMedal = (e) => {
    setSilverName(Number(e.target.value))
  }
  const inputBronzeMedal = (e) => {
    setBronzeName(Number(e.target.value))
  }




  //추가하기 기능함수
  const addCountry = (e) => {
    e.preventDefault();
    //이벤트 객체의 기본 동작을 막는 메서드->브라우저가 특정 이벤트에 대해 기본적으로 수행하는 동작 차단
    //새로고침을 막아줌
    //제일 위에서 사용하는건가?

    let result = medalCountries.some((country) => country.name === countryName);

    //some메서드는 배열의 각 요소에 대해 조건을 검사하고 조건을 만족하는 요소가 하나라도 있으면 true반환





    //중복 국가 추가
    if (result) {
      alert("이미 등록된 국가가 있습니다~~")
      return;
    }

    if (!countryName) {
      alert("국가가 입력되지 않았습니다!!!!")
      return
    }

    //새로운 객체  setMedalCountries([...medalCountries, newData]):medalCountries
    //상태에 newData 객체를 추가하여 배열을 업데이트 한다
    const newData = {
      name: countryName,
      gold: goldMedal,
      silver: silverMedal,
      bronze: bronzeMedal
    }

    setMedalCountries([...medalCountries, newData])
    //초기화가 없었다!ㅇ0ㅇ!!!
    setGoldName(0);
    setSilverName(0);
    setBronzeName(0);
    setCountryName("");


  };




  //삭제하기 기능 함수
  const deleteCountry = (name) => {//매개변수로 name을 받아온다 삭제하고자 하는 국가의 이름!
    let newCountries = medalCountries.filter(
      //필터 메서드를 사용해 country.name이name과 일치하지 않는 국가들만
      //남긴 새배열을 생성
      //name과 일치하지 않는 국가들만 새로담긴 newCountries생성
      country => country.name !== name)
    setMedalCountries([...newCountries])
  }



  const updateCountry = () => {
    //업데이트 기능 함수~
    //countryName과 일치하는 국가가 존재하면 그 국가의 메달 정보르 업데이트 하고 없으면 경고 메세지
    let result = medalCountries.some((country) => country.name === countryName);
    //배열 이름이 countryName와 같은 국가가 있는지 확인
    //some() 매서드를 만족하는 항목이 배열에 하나라도 있으면 true 아니면 false
    if (result) {//true면 해당 국가 정보 업데이트
      let newArr = medalCountries.map(country =>//배열에서 map을 사용하여 같은 이름이 있는 국가를 찾음
        country.name === countryName ?//조건부로 새로운 객체 생성
          {
            ...country,
            name: countryName,
            gold: goldMedal,
            silver: silverMedal,
            bronze: bronzeMedal

          }
          : country
      )
      setMedalCountries([...newArr])//상태 업데이트
    } else {
      alert("해당 국가가 존재하지 않습니다!!!!")
    }

  }


  //정렬
  const selectMedalList = (e) => {//e라는 매개변수로 받아온다->사용자가 선택한 드롭다운 메뉴의 값을 기준으로 작동
    if (e.target.value === 'goldMedal') {//goldMedal을 선택했을때 
      let newArr = [...medalCountries].sort((a, b) => b.gold - a.gold);//sort를 사용해 gold기준으로 내림차순
      setMedalCountries(newArr);//정렬된 배열을 상태로 업데이트
      console.log(newArr)

    } else if (e.target.value === "totalMedal") {
      let newArr1 = [...medalCountries].sort((a, b) => (b.gold + b.silver + b.bronze) - (a.gold + a.silver + a.bronze))
      setMedalCountries(newArr1);
    } else {//조건을 만족x 아무것도 실행x
      return
    }

  }
  //[].sort((a,b)=>a-b) 내림차순
  //[].sort((a,b)=>b-a) 오름차순


  ///////////////////////////////////////////////////////////////////////////////////////////





  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <div className="inputGroup">
        <div className="header">
          {/* //서치바와 정렬 */}
          <div className="serchBar" >
            <label></label>
            <input className="serchInput" placeholder="찾으실 국가를 입력하세요!" />
          </div>
          {/* //총 메달수 나라 이름순으로 정렬하고 싶을때느,ㄴ? */}
          <select className="select" onChange={selectMedalList}>
            <option value="default">정렬방법</option>
            {/* <option value="default"> 태그는 html에서 드롭다운 메뉴를 만들때 사용한다 주로 <select> 태그 안에 들어간다. */}
            <option value='goldMedal'>금메달 순으로 정렬</option>
            <option value="totalMedal">총 메달 합순으로 정렬</option>
          </select>


        </div>




        <form className="inputForm" onSubmit={addCountry}>
          {/* //아래 매달과 버튼 */}

          <InputFiled
            name="국가명🚩"//입력필드의 이름 주로 접근성 및 설명을 위해 사용된다
            type="text"//입력 유형을 텍스트로 지정하여 일반 텍스트 입력을 받음
            id="name"// html 요소에 고유 id를 부여 접근성 및 스타일 적용에 사용
            value={countryName}//'countryName' 상태변수를 필드의 값으로 설정
            onChange={inputCountryName}//값이 변경될때마다 호출할 함수
            placeholder="추가할 국가명을 입력하세요"//필드가 비어있을때 보여줄 안내 텍스트
          //required=>무조건 입력하세요
          />


          <InputFiled
            name="금메달🥇"
            type="number"
            id="gold"
            value={goldMedal}
            onChange={inputGoldMedal}
          />

          <InputFiled
            name="은메달🥈"
            type="number"
            id="gold"
            value={silverMedal}
            onChange={inputSilverMedal}
          />

          <InputFiled
            name="동메달🥉"
            type="number"
            id="gold"
            value={bronzeMedal}
            onChange={inputBronzeMedal}
          />

          <div className="btn">
            <button type="submit">국가 추가</button>
            <button type="button" onClick={updateCountry} >업데이트</button>
          </div>
        </form>


      </div>

      {/* //medalCountries에 데이터가 있는경우 각나라 데이터를 CountryItem 컴포넌트로 표시하고
        //없으면 데이터가 없습니다를 표시! */}
      <div className="outValue">
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {medalCountries.length > 0 ? (
              //배열 edalCountries가 비어있지 않을때와 비어 있을때 다른 내용을 렌더링 하도록 한다
              medalCountries
                .map((country) => (
                  //배열이 비어있지않으면(위 조건이 참일때) 배열을 .map함수로 순회하여 각 
                  //counrt항목에 대해CountryItem 컴포넌트 생성
                  //배열이 비어있을때 데이터가 없습니다 표시
                  <CountryItem
                    key={country.name}
                    country={country}
                    onClick={deleteCountry}

                  />
                ))
            ) : (
              <p>데이터가 없습니다.</p>
            )}

          </tbody>
        </table>
        {/* //전체 틀 스타일링 */}
      </div>
    </div>
  )
}

export default App;