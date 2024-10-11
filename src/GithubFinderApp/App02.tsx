import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, About, NotFound } from './pages';
import { GithubContextProvider } from './context/GithubContext';

function App01() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
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
function App01() {
  return (
    <div className="container">
      <h1>Github Finder</h1>
    </div>
=======
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
>>>>>>> 77fc0f2 (Refactored to Context)
  );
}

export default App01;
