import PropTypes from "prop-types";

const CardBlog = ({title, desc, link}) => {

    const handleClick = () => {
        window.open(link, "_blank");
    }

    return <>
        <div className="w-full h-40 rounded-lg border-white border-2 flex justify-between items-center pr-10 pl-10 gap-10 mb-3">
            <div>
                <h1 className="font-bold font-jetbrains text-white text-4xl">{title}</h1>
                <p className="text-white text-justify text-sm ">{desc}</p>
            </div>
            <button 
                onClick={handleClick} 
                className="bg-white text-gray-800 font-bold font-jetbrains text-sm rounded-lg px-4 py-2 border-2 border-gray-800 hover:bg-gray-800 hover:text-white hover:border-white hover:border-2 transition duration-200">
                Read More
            </button>
        </div>
    </>
}

CardBlog.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
export default CardBlog;