import React, { useState } from 'react';

function IternationSample4() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ]);
   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

   const [inputText, setInputText] = useState('');

   const onChangeEvent = (e) => setInputText(e.target.value);

   return (
      <>
         <input value={inputText} onChange={onChangeEvent}></input>
         <ul>{nameList}</ul>
      </>
   );
}

export default IternationSample4;
