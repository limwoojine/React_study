function App() {
   // 3.&& 연산
   // A && B -> A가 true면 A, A가 false면 B
   // 문자열은 빈문자열이 아니면 true
   return <div>{'리액트' && <h1>리액트입니다.</h1>}</div>;
}

export default App;
