import styled from 'styled-components';

function ReactButton2() {
   //styled.태그명` CSS 스타일 작성 `
   const StyledButton = styled.button`
      color: white;
      background-color: green;
   `;

   return <StyledButton>버튼4</StyledButton>;
}

export default ReactButton2;
