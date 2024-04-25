import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from '../redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 專案進入點使用redux包住 */}
    {/* 讓所有元件能夠與資料庫取得聯繫 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
