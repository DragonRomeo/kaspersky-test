import './App.css';
import NewsContainer from './components/news/news-container';
import { Button, ConfigProvider, Input, Space, theme } from 'antd';

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <NewsContainer />
      </ConfigProvider>
    </>
  );
}

export default App;
