/* eslint-disable @typescript-eslint/no-unused-vars */
import { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <>
      <BrowserRouter basename="/exercise">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <p>Hello text</p>
            </>
          }
        />
      </Routes>
      </BrowserRouter>
    </>
  );
}
