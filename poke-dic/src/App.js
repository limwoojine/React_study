import PokeInsert from './Component/PokeInsert';
import PokeTemplate from './Component/PokeTemplate';
import PokeList from './Component/PokeList';
import React, { useState, useRef, useCallback } from 'react';

function App() {
   const [pokes, setPokes] = useState([]);

   // useRef를 사용하여 변수 담기
   const nextId = useRef(1);

   // 포켓몬 등록
   const onInsert = useCallback(
      (text) => {
         const poke = {
            id: nextId.current, //useRef의 현재값을 가져옴
            text, // text: text
            imageUrl: `/images/${text}.png`, // 이미지 url 저장
         };
         setPokes(pokes.concat(poke));
         nextId.current += 1; // nextId 1씩 더하기
      },
      [pokes]
   );
   const onRemove = useCallback(
      (id) => {
         const removedPokes = pokes.filter((poke) => poke.id !== id);
         setPokes(removedPokes);
      },
      [pokes]
   );
   return (
      <PokeTemplate>
         <PokeInsert onInsert={onInsert} />
         <PokeList pokes={pokes} onRemove={onRemove} />
      </PokeTemplate>
   );
}

export default App;
