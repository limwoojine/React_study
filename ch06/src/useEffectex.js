import React, { useState, useEffect } from 'react';

function UseEffectEx() {
   const [name, setName] = useState('');
   const [nickname, setNickname] = useState('');

   const onChangeName = (e) => setName(e.target.value);
   const onChangeNickname = (e) => setNickname(e.target.value);

   /*
    재렌더링은 언제될까..?
    1. props이 변경될 때
    2. state가 변경될 때
    3. 부모 컴포넌트가 다시 렌더링 될 때
    */

   /*
    //1. 컴포넌트가 렌더링 될 때마다 실행
      useEffect(() => {
         console.log('렌더링이 완료되었습니다.');
         console.log({ name, nickname });
      });
    */

   /*
   // 2. 맨 처음 렌더링 될 때만 실행되고, 업데이트(재렌더링)될 때는 실행되지 않음
   useEffect(() => {
      console.log('렌더링이 완료되었습니다.');
      console.log({ name, nickname });
   }, []); // <-- 빈 배열 사용
   */

   /*
   // 3. 특정 값(state)이 변경될 때만 호출
   useEffect(() => {
      console.log('렌더링이 완료되었습니다.');
      console.log({ name, nickname });
   }, [name]); // <-- name state가 변경될 때만 useEffect 안의 코드 실행
    */
   // 4. 뒷정리 함수: 컴포넌트가 업데이트 되기 전에 실행
   useEffect(() => {
      console.log('렌더링이 완료되었습니다.');
      console.log(name);

      return () => {
         console.log('컴포넌트가 업데이트 되기 전..');
         console.log(name);
      };
   }, [name]);

   return (
      <div>
         <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickname} />
         </div>
         <div>
            <div>
               <b>이름:</b> {name}
            </div>
            <div>
               <b>닉네임:</b> {nickname}
            </div>
         </div>
      </div>
   );
}

export default UseEffectEx;
