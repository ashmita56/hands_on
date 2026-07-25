import React from 'react';
import './App.css';

function App(props) {

  const bookdet = (
    <ul>
      {props.books.map((book) =>
      <div key={book.id}>
      <h3> {book.bname}</h3>
        <h4>{book.price}</h4>
        </div>
      )}
    </ul>
  );

  const content = (
    <ul>
      {props.blogs.map((blog) =>
      <div key={blog.id}>
      <h3> {blog.title}</h3>
        <h4>{blog.author}</h4>
        <p>{blog.content}</p>
        </div>
      )}
    </ul>
  );

  const coursedet = (
    <ul>
      {props.courses.map((course) =>
      <div key={course.id}>
      <h3> {course.cname}</h3>
        <h4>{course.date}</h4>
        </div>
      )}
    </ul>
  );

  return (
    <div>
    <div className="container">
    <div className="st2">
      <h1> Book Details</h1>
      {bookdet}
      </div>
      <div className="v1">
      <h1> Blog Details</h1>
      {content}
      </div>
      <div className="mystyle1">
        <h1> Course Details</h1>
      {coursedet}
      </div>
    </div>
    </div>
  );
}

export default App;