import PropTypes from "prop-types";
const Blog = ({ blog }) => {
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
        <div>
          <span>{reading_time} min read</span>
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
};
export default Blog;
