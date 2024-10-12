import React, { useRef } from 'react';

function UseRefEx() {
   const inputRef = useRef(null);

   const handleClick = () => {
      inputRef.current.focus(); // input 요소에 포커스
   };

   return (
      <div>
         {/* dom을 직접적으로 다루고 싶은 요소에 inputRef 적용 */}
         <input ref={inputRef} type="text"></input>
         <button onClick={handleClick}>Focus</button>
      </div>
   );
}

export default UseRefEx;
