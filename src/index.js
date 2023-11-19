import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WatchBody from './components/WatchPage/WatchBody';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import VideoContainer from './components/MainPage/VideoContainer';
import SearchContainer from './components/ResultPage/SearchContainer';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <VideoContainer/>
      },
      {
        path : 'watch',
        element : <WatchBody/>
      },
      {
        path : 'results',
        element : <SearchContainer/>
      }
    ]
  }]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
