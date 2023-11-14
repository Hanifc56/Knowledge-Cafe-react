import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="">
      <h3 className="text-lg font-semibold bg-white rounded-xl p-5 my-4">
        {title} !
      </h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.array.isRequired,
};
export default Bookmark;
