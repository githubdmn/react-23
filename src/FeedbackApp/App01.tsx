import {
  AboutLinkIcon,
  FeedbackForm,
  FeedbackList,
  FeedbackStats,
  Header,
} from './components';
import { AboutPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FeedbackProvider } from './context';

function App01() {
  return (
    <FeedbackProvider>
      <BrowserRouter basename='/feedback'>
        <Header title="This is optional" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutLinkIcon />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App01;
