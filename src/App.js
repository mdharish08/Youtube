import { Provider } from 'react-redux';
import Store from './utils/Store'
import './App.css';
import Header from './components/MainPage/Header';
import Body from './components/MainPage/Body';

function App() {
  return (
    <Provider store={Store}>
      <Header/>
      <Body/>
    </Provider>
  );
}

export default App;
