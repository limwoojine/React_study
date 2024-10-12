import React, { useState } from 'react';

function IternationSample3() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ]);
   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

   /* 
    리액트에서는 요소를 반복해서 생성할 때 key를 지정해주는 것이 좋다.
    key -> 요소들을 구분하기 위한 것

    nameList = [<li key="0">눈사람</li>, <li key="1">얼음</li>, <li key="2">눈</li>, <li key="3">바람</li>]
    */
   return <ul>{nameList}</ul>;
}

export default IternationSample3;
