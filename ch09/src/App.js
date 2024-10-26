import { Route, Routes, NavLink, useParams } from 'react-router-dom';
import './AppNavLink.css';

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   );
}
function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...
      </div>
   );
}

var contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'JS', description: 'JS is...' },
   { id: 3, title: 'React', description: 'React is...' },
];

function Topic() {
   var params = useParams(); // 경로 parameter를 가져옴
   var topic_id = params.topic_id;
   console.log(topic_id);

   var selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   };

   for (var i = 0; i < contents.length; i++) {
      // contents에서 id가 같은 데이터를 찾은 후 selected_Topic에 넣어준다.
      if (contents[i].id === Number(topic_id)) {
         selected_topic = contents[i];
         break; // 찾은 이후에는 for 문을 빠져나옴.
      }
   }
   return (
      <div>
         <h3>{selected_topic.title}</h3>
         {selected_topic.description}
      </div>
   );
}

function Topics() {
   var lis = [];
   for (var i = 0; i < contents.length; i++) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>
      );
   }
   return (
      <div>
         <h2>Topics</h2>
         <ul>{lis}</ul>
         <Routes>
            <Route path="/:topic_id" element={<Topic />} />
         </Routes>
      </div>
   );
}
// NavLink는 내가 접속한 컴포넌트에 css를 입힐 수 있음.

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>
         {/* 주소의 경로에 따라서 어떤 컴포넌트를 보여줄지 지정 */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   );
}

export default App;
