import React, { useState, useEffect } from 'react';

// 평균값 계산하는 함수
const getAverage = (numbers) => {
   console.log('평균값 계산...');

   // ex) numbers = [1,2,3]
   if (numbers.length === 0) return 0;

   const sum = numbers.reduce((a, b) => a + b); // 누적 합산
   return sum / numbers.length; // 평균 값 반환(return)
};

// 컴포넌트 함수
function UseMemoEx1() {
   const [list, setList] = useState([]);
   const [number, setNumber] = useState('');

   const onChange = (e) => setNumber(e.target.value);
   const onInsert = (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
   };
   return (
      <div>
         <input value={number} onChange={onChange} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값:{getAverage(list)}</b>
         </div>
      </div>
   );
}

export default UseMemoEx1;
