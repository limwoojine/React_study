function App() {
   // 4. CSS, inline style 사용 => json 객체
   const name = '리액트';
   // css 속성 표기 -> 카멜표기법
   // px 생략 가능 -> 숫자 타입으로 표기
   const style = {
      backgroundColor: 'red',
      color: 'black',
      fontSize: '48px',
      padding: 16,
   };

   // return <div style={style}> {name}</div>;
   return (
      <div
         style={{
            backgroundColor: 'blue',
            color: 'black',
            fontSize: '48px',
            padding: 32,
            paddingLeft: 48,
         }}
      >
         {' '}
         {name}{' '}
      </div>
   );
}

export default App;
