import { PropTypes } from "prop-types";

const Title = ({ children, title }) => (
  <div className="mb-4 bg-gray-800">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold font-jetbrains text-white text-4xl text-center">{title}</h1>
    </div>
    {children}
  </div>
);


Title.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Title;