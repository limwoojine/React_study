import { useDispatch, useSelector } from 'react-redux';
import { up, down } from './counterSlice';

function Counter() {
   const dispatch = useDispatch();
   const count = useSelector((state) => {
      console.log(state);
      // counter => store에 지정한 슬라이스 key값(slice가 여러개이므로 구분)
      return state.counter.value;
   });
   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2));
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               dispatch(down(2));
            }}
         >
            -
         </button>
         {count}
      </div>
   );
}

export default Counter;
