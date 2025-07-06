/* eslint-disable @typescript-eslint/no-unused-vars */
import { JSX } from 'react';
import FeedbackApp from './FeedbackApp/App';
import GithubFinderApp from './GithubFinderApp/App';
import SandboxApp from './Sandbox/App';

export default function App() : JSX.Element {
  return (
    <>
      <FeedbackApp />
      <GithubFinderApp />
      <SandboxApp />
    </>
  );
}
