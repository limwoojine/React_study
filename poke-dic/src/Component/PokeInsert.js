import './css/PokeInsert.css';
import React, { useState, useCallback } from 'react';

function PokeInsert({ onInsert }) {
   const [value, setValue] = useState('');
   const onChange = useCallback((e) => setValue(e.target.value), []);

   const onSubmit = useCallback(
      (e) => {
         onInsert(value);
         setValue(''); // value state 초기화
         // submit 이벤트는 브라우저 새로고침을 발생시키므로 이를 방지하기 위해 사용
         e.preventDefault();
      },
      [value, onInsert]
   );
   return (
      <form className="PokeInsert" onSubmit={onSubmit}>
         <input placeholder="포켓몬 이름을 입력하세요." value={value} onChange={onChange} />
         <button type="submit">추가</button>
      </form>
   );
}

export default PokeInsert;
