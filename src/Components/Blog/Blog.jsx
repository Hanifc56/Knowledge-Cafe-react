import { IoBookmarkOutline } from "react-icons/io5";
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    cover,
    author_img,
    author,
    posted_date,
    title,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="my-10">
      <img
        className="w-full rounded-xl mt-7"
        src={cover}
        alt={`This is a title of ${title}`}
      />
      <div className="flex justify-between items-center my-4">
        <div className="flex items-center pl-2">
          <div className="w-14 ">
            <img src={author_img} alt="" />
          </div>
          <div className="ml-6">
            <h3>{author}</h3>
            <p> {posted_date} </p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-400 font-bold text-2xl"
          >
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href=""> #{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};
export default Blog;
