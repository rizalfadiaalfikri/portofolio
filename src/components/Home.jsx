import { ReactTyped } from "react-typed";

const Home = () => {
    return <>
        <div className="bg-gray-800 text-white font-jetbrains w-full h-screen flex justify-center items-center">
            <div className="container mx-auto flex justify-center items-center flex-col">
            <ReactTyped
                    strings={["Hi I'm Rizal Fadia Al Fikri"]}
                    typeSpeed={60}
                    backSpeed={25}
                    loop={false}
                    className="text-6xl font-bold"
                />
                <h1 className="text-6xl font-bold mt-3 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Backend Developer</h1>
                <h4 className="mt-5 text-xl text-center">I'm a Backend Developer with 2+ years of experience, specializing in Java and Spring Boot. In addition, I have an interest in AI, especially related to NLP and Computer Vision.</h4>
            </div>
        </div>
    </>
}

export default Home;