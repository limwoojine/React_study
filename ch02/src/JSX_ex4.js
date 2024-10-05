function App() {
   // 4. || 연산
   // A || B -> A가 true면 A출력, A가 false면 B 출력
   const name = undefined; // false임  null, 0, '' 포함
   return <div> {name || '리액트zz빈문자열'}</div>;
}

export default App;
