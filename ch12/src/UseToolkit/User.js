import { useDispatch, useSelector } from 'react-redux';
import { setName, setAge } from './userSlice';

function User() {
   const dispatch = useDispatch();
   const { name, age } = useSelector((state) => {
      console.log(state);
      return state.user;
   });
   return (
      <div>
         <input
            placeholder="이름"
            type="text"
            onChange={(e) => {
               dispatch(setName(e.target.value));
            }}
         ></input>
         <input
            placeholder="나이"
            type="number"
            onChange={(e) => {
               dispatch(setAge(e.target.value));
            }}
         ></input>
         <p>이름: {name}</p>
         <p>나이: {age}</p>
      </div>
   );
}

export default User;
