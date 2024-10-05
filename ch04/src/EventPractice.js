import React, { useState } from 'react';

function EventPractice() {
   const [username, setUsername] = useState('');
   const [message, setMessage] = useState('');

   const onClick = (e) => {
      alert('첫 번째 입력값: ' + username + '\n두 번째 입력값: ' + message);

      //alert 창 종료 후 state값 초기화
      setUsername('');
      setMessage('');
   };
   const onKeyDown = (e) => {
      console.log(e.key); // 누른 Key의 이름 출력
      if (e.key === 'Enter') {
         // Enter Key를 눌렀을 때
         onClick();
      }
   };
   const onChangeUsername = (e) => setUsername(e.target.value);
   const onChangeMessage = (e) => setMessage(e.target.value);
   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChangeUsername} />
         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />
         <button onClick={onClick}>확인</button>
      </div>
   );
}

export default EventPractice;
