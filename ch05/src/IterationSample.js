import React from 'react';

function IternationSample() {
   const names = ['눈사람', '얼음', '눈', '바람'];
   const nameList = names.map((name) => <li>{name}</li>);
   return <ul>{nameList}</ul>;
}

export default IternationSample;
