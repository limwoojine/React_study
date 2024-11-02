import styled from 'styled-components';

function ReactButton3() {
   //styled.태그명` CSS 스타일 작성 `
   const StyledButton = styled.button`
      color: white;
      background-color: green;
   `;

   //감싸기 기능으로 새로운 버튼 만들기
   const LargeButton = styled(StyledButton)`
      font-size: 50px;
   `;

   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
      </div>
   );
}

export default ReactButton3;
