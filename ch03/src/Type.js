const Type = (props) => {
   console.log(props);
   const { str, num, bool, arr, json, func } = props;

   return (
      <div>
         {/* bool, array, json 타입은 문자열로 변경해서 화면에 출력가능 */}
         <p>StringProps: {str}</p>
         <p>NumberProps: {num}</p>
         <p>BooleanProps: {bool.toString()}</p>
         <p>ArrayProps: {arr.toString()}</p>
         <p>JsonProps: {JSON.stringify(json)}</p>
         {/* <p>FunctionProps: {func} </p> */}
      </div>
   );
};

export default Type;
