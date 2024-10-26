import React, { useState } from 'react';

function IternationSample5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ]);

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

   const [inputText, setInputText] = useState('');
   const [nextId, setNextId] = useState(5);

   const onChangeEvent = (e) => setInputText(e.target.value);

   // 사용자가 input에 입력한 값을 names state에 추가하는 함수
   const onClickEvent = () => {
      const nextNames = names.concat({
         id: nextId, // 5
         text: inputText, // input창에서 사용자가 입력한 값
      });

      setNames(nextNames); // names state를 합친 배열로 변경
      setNextId(nextId + 1); // 다음에 데이터 추가 시 nextId를 1씩 증가시키기 위해
      setInputText('');
      console.log(nextNames);
   };
   return (
      <>
         <input value={inputText} onChange={onChangeEvent}></input>
         <button onClick={onClickEvent}>추가</button>
         <ul>{nameList}</ul>
      </>
   );
}

export default IternationSample5;
