import PokeInsert from './Component/PokeInsert';
import PokeTemplate from './Component/PokeTemplate';
import PokeList from './Component/PokeList';
import React, { useState, useRef, useCallback } from 'react';

/*
   추가 예정 목록
   1. 중복된 포켓몬 추가 시 추가하지 못하도록 Alert 출력 (완료)
   2. 추가한 포켓몬이 없을 때 '목록이 없습니다.' 화면 표시 (완료)
   3. 포켓몬 카드 더블 클릭 시 비활성화<>활성화 (완료)
   4. 비활성화 상태일 때 이미지 흑백으로 변경 (완료)
   5. CSS 파일 정리 (완료)
*/

function App() {
   const [pokes, setPokes] = useState([]);

   // useRef를 사용하여 변수 담기
   const nextId = useRef(1);

   // 포켓몬 등록
   const onInsert = useCallback(
      (text) => {
         let duplicateFlag = false; // 중복된 포켓몬 여부를 판단하는 flag
         for (let i = 0; i < pokes.length; i++) {
            if (text === pokes[i].text) {
               duplicateFlag = true;
               break;
            }
         }
         if (!duplicateFlag) {
            const poke = {
               id: nextId.current, //useRef의 현재값을 가져옴
               text, // text: text
               imageUrl: `/images/${text}.png`, // 이미지 url 저장
            };
            setPokes(pokes.concat(poke));
            nextId.current += 1; // nextId 1씩 더하기
         } else {
            alert('이미 등록된 포켓몬입니다.');
         }
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
