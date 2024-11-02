import ReducerCounter1 from './ReducerCounter1';
import ReducerCounter2 from './ReducerCounter2';
import ReducerCounter3 from './ReducerCounter3';
import React, { useState } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

// action => { type: 'PLUS' }
// reducer: 직접적으로 state를 변경해주는 역할
function reducer(currentState, action) {
   // 현재 state가 없다면 number state에 1을 할당
   if (currentState === undefined) {
      return { number: 1 };
   }

   // 현재 state에 데이터가 있다면
   const newState = [...currentState]; // 깊은 복사(현재 state 값 복사)
   if (action.type === 'PLUS') {
      newState.number++; // number state 증가
   }
   return newState; // 새로운 state를 반영
}
// store: state를 저장, reducer 저장 (창고같은 역할)
const store = createStore(reducer);

function Left1() {
   return (
      <div>
         <h1>Left1</h1>
         <Left2></Left2>
      </div>
   );
}
function Left2() {
   return (
      <div>
         <h1>Left2</h1>
         <Left3></Left3>
      </div>
   );
}
function Left3() {
   // useSelector: state값을 무선으로 연결해서 가져올 수 있다.
   const number = useSelector((state) => state.number);
   return (
      <div>
         <h1>Left3: {number}</h1>
      </div>
   );
}

function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2></Right2>
      </div>
   );
}
function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3></Right3>
      </div>
   );
}
function Right3() {
   const dispatch = useDispatch();
   return (
      <div>
         <h1>Right3</h1>
         <input
            type="button"
            value="+"
            onClick={() => {
               dispatch({ type: 'PLUS' });
            }}
         />
      </div>
   );
}

function App() {
   return (
      <div className="container">
         <h1>Root</h1>
         <div className="grid">
            {/* Provider: store에 저장되어있던 state, reducer를 어떤 Component에 제공할 것인지 지정*/}
            <Provider store={store}>
               <Left1 />
               <Right1 />
            </Provider>
         </div>
      </div>
   );
}

export default App;
