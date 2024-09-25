import PropTypes from "prop-types";

const Card = ({ image, title, desc, link }) => {
    return <>
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
                src={image}
                alt="Card Image" 
                className="w-full h-64 object-cover" 
            />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-black text-justify text-sm">{desc}</p>
                <div className="mt-4">
                    <a 
                        href={link}
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 mr-2" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.2 6.84 9.54.5.09.68-.22.68-.49v-1.75c-2.79.61-3.38-1.35-3.38-1.35-.45-1.15-1.09-1.46-1.09-1.46-.89-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.53 2.33 1.09 2.9.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.568 9.568 0 0112 6.83c.85.004 1.7.115 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.68-4.56 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.68.49A10.003 10.003 0 0022 12c0-5.52-4.48-10-10-10z" 
                            />
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </>
}


Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
export default Card;