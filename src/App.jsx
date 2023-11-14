import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  // bookmark
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  // reading time
  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    console.log(newReadingTime);
    // remove readed blog
    // console.log("removd book", id);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
