import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, About, NotFound } from './pages';
import { GithubContextProvider } from './context/GithubContext';

function App() {
  return (
    <GithubContextProvider>
      <BrowserRouter basename='/github-finder'>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </GithubContextProvider>
  );
}

export default App;
