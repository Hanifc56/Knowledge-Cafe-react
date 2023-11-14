import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3  my-9 mx-2 rounded-xl">
      <div className="rounded-xl bg-purple-100 my-2 mx-4 p-6">
        <h1 className="text-2xl font-bold text-purple-600">
          Spent time on read : {readingTime} min
        </h1>
      </div>
      <div className="rounded-xl bg-gray-100 my-2 mx-4 p-6">
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
