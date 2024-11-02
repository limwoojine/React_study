import styled from 'styled-components';

function ReactButton6() {
   //styled.태그명` CSS 스타일 작성 `
   const StyledButton = styled.button`
      color: white;
      background-color: green;
   `;

   //감싸기 기능으로 새로운 버튼 만들기
   const LargeButton = styled(StyledButton)`
      font-size: 50px;
   `;

   const ReactButton = (props) => {
      console.log(props);
      return <button className={props.className}>{props.children}</button>;
   };

   //리액트 전통 방식으로 만든 버튼에 감싸기 적용
   const ReactLargeButton = styled(ReactButton)`
      font-size: 50px;
   `;

   // &는 현재 컴포넌트를 의미한다.
   // 가상클래스(:hover, :focus, :active)
   // 가상요소 (::before, ::after) 선택자들과 결합하여 사용
   const PrimaryButton = styled.button`
      color: ${(props) => (props.primary ? 'black' : 'aqua')};
      background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};
      &:hover {
         background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
      }
   `;
   /*
   const PrimaryButton = styled.button`
      color: ${function (props) {
         console.log(props);

         // primary: true 여부에 따라서 color가 지정된다.
         if (props.primary) return 'Aqua';
         else return 'blue';
      }};
   `;
   */

   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
         <PrimaryButton>Normal1</PrimaryButton>
         <PrimaryButton primary>Normal2</PrimaryButton>
      </div>
   );
}

export default ReactButton6;
