import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { books, courses, blogs } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App books={books} courses={courses} blogs={blogs} />
  </React.StrictMode>
);