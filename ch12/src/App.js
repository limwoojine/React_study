import { Provider } from 'react-redux';
import Counter from './UseToolkit/Counter';
import store from './UseToolkit/store';
import User from './UseToolkit/User';
// import Counter from './NonToolkit/Counter';
// import store from './NonToolkit/store';

function App() {
   //  return (
   //     <Provider store={store}>
   //        <Counter />
   //     </Provider>
   //  );
   return (
      <Provider store={store}>
         <Counter />
         <User />
      </Provider>
   );
}

export default App;
