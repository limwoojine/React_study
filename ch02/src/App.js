import './App.css';

function App() {
   const name = '리액트';
   // 6. 닫는 태그가 반드시 있어야 한다.
   return (
      <>
         <div className="react">{name}</div>
         <input type="text"></input>
         <input type="text" />

         {/* 사용할 수 없다. */}
         {/* <input type="text"> */}
      </>
   );
}

export default App;
c;
