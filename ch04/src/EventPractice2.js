import React, { useState } from 'react';

function EventPractice2() {
   //input 창이 여러개인 경우는 state를 한꺼번에 관리해야 한다. -> json 객체로 관리
   //하나의 form state를 가지고 여러개의 값을 관리
   const [form, setForm] = useState({
      username: '',
      message: '',
   });
   //비구조화 할당을 통해 form state안의 값을 할당
   const { username, message } = form;

   // username, message = ''

   const onClick = (e) => {
      alert('첫 번째 입력값: ' + username + '\n두 번째 입력값: ' + message);

      //alert 창 종료 후 state값 초기화
      setForm({ username: '', message: '' });
   };

   //사용자가 입력한 값을 가져와서 state값을 바꿔준다.
   const onChange = (e) => {
      const nextForm = {
         ...form, // 기존 form 내용을 복사한 뒤
         [e.target.name]: e.target.value, // 덮어쓰기가 일어난다.
      };

      setForm(nextForm); // 덮어씌운 값으로 상태변화시킴
   };
   const onKeyDown = (e) => {
      console.log(e.key); // 누른 Key의 이름 출력
      if (e.key === 'Enter') {
         // Enter Key를 눌렀을 때
         onClick();
      }
   };

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange} />
         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChange} onKeyDown={onKeyDown} />
         <button onClick={onClick}>확인</button>
      </div>
   );
}

export default EventPractice2;
