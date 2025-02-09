import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: { colorPrimary: '#fff', colorPrimaryBg: "#fff" },
        components: {
          Checkbox: {
            colorIcon: "#242151",
            colorPrimary: "#242151",
            colorIconHover: "#242151",
            colorFillSecondary: "#EFE7FF",
            colorPrimaryHover: "#242151",
            borderRadius: 4
          },
        }
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
