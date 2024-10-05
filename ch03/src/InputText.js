import React, { useState } from 'react';

const InputText = () => {
   const [text, setText] = useState('hi');

   return (
      <div>
         <input
            type="text"
            value={text}
            onChange={(e) => {
               console.log(e);
               // 입력받은 값을 이용해 state 값 변경
               setText(e.target.value);
            }}
         />
         <p>입력한 값: {text}</p>
      </div>
   );
};

export default InputText;
