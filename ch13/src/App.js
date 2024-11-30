import React, { createContext, useContext } from 'react';
import './App.css';

const themeDefault = { border: '10px solid red' };
const themeContext = createContext(themeDefault); // 데이터를 공유하기 위한 context 생성

function App() {
   const theme = useContext(themeContext);
   return (
      <themeContext.Provider value={{ border: '10px solid blue' }}>
         <div className="root" style={theme}>
            <h1>Hello world!</h1>
            <Sub1 />
         </div>
      </themeContext.Provider>
   );
}

function Sub1() {
   const theme = useContext(themeContext);
   return (
      <themeContext.Provider value={{ border: '10px solid green' }}>
         <div style={theme}>
            <h1>Sub1</h1>
            <Sub2 />
         </div>
      </themeContext.Provider>
   );
}

function Sub2() {
   const theme = useContext(themeContext);
   return (
      <div>
         <h1>Sub2</h1>
         <Sub3 />
      </div>
   );
}

function Sub3() {
   const theme = useContext(themeContext);
   return (
      <div>
         <h1>Sub3</h1>
      </div>
   );
}

export default App;
