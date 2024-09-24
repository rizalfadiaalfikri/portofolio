import { useState } from "react";

const About = () => {

    const [activeTab, setActiveTab] = useState(0);

    return <>
        <div className="bg-gray-800 text-white font-jetbrains w-full pb-20">
            <div className="container mx-auto flex justify-center items-center flex-col mt-10">
                <p className="text-justify text-lg">I am a Backend Developer with approximately 2 years of experience, specializing in Java and Spring Boot. I have developed efficient backend applications and collaborated with teams to create innovative software solutions. Additionally, I have a strong interest in Artificial Intelligence, particularly in Computer Vision and Natural Language Processing, and I continuously enhance my knowledge in these areas. I believe my combination of backend expertise and interest in AI allows me to make meaningful contributions to the projects I work on.</p>
                <div className="mt-5 w-full">
                    <ul className="flex justify-start flex-wrap -mb-px">
                        <li className="me-2">
                            <button
                            className={`inline-block pt-4 pb-4 pr-4 border-b-2 rounded-t-lg ${activeTab === 0 ? 'text-white border-white' : 'border-transparent hover:text-blue-600 hover:border-blue-300'}`}
                            onClick={() => setActiveTab(0)} // Set the active tab to 0
                            >
                            Experience
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                            className={`inline-block pt-4 pb-4 pr-4 border-b-2 rounded-t-lg ${activeTab === 1 ? 'text-white border-white' : 'border-transparent hover:text-blue-600 hover:border-blue-300'}`}
                            onClick={() => setActiveTab(1)} // Set the active tab to 1
                            >
                            Education
                            </button>
                        </li>
                    </ul>

                    <div className="pt-4 pb-4 pr-4">
                        {activeTab === 0 && (
                        <div>

                            <div className="flex justify-start mt-5">
                                <div className="w-3/4">
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">PT SWAMEDIA INFORMATIKA</h2>

                                    <section className="mt-5 relative pl-10">
                                        <div className="absolute left-0 top-0 h-full border-l-4 border-gray-400"></div> {/* Garis di samping kiri */}
                                        {/* Lingkaran di ujung atas */}
                                        <div className="absolute left-[-6px] top-0 h-4 w-4 rounded-full bg-gray-400"></div>
                                        
                                        {/* Lingkaran di ujung bawah */}
                                        <div className="absolute left-[-6px] bottom-0 h-4 w-4 rounded-full bg-gray-400"></div>
                                        <p className="text-gray-100 mb-1">Backend Developer</p>
                                        <p className="text-gray-400 mb-4">Nov 2023 - Present</p>
                                        <p className="text-justify">As a Backend Developer, I have developed several projects using the Java programming language, as well as the Spring framework and Oracle database.</p>
                                    </section>
                                </div>
                            </div>

                            <div className="flex justify-start mt-5">
                                <div className="w-3/4">
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">PT DOPAY APLIKASI INDONESIA</h2>

                                    <section className="mt-5 relative pl-10">
                                        <div className="absolute left-0 top-0 h-full border-l-4 border-gray-400"></div> {/* Garis di samping kiri */}
                                        {/* Lingkaran di ujung atas */}
                                        <div className="absolute left-[-6px] top-0 h-4 w-4 rounded-full bg-gray-400"></div>
                                        
                                        {/* Lingkaran di ujung bawah */}
                                        <div className="absolute left-[-6px] bottom-0 h-4 w-4 rounded-full bg-gray-400"></div>
                                        <p className="text-gray-100 mb-1">Fullstack Developer</p>
                                        <p className="text-gray-400 mb-4">Feb 2023 - Nov 2023</p>
                                        <ul className="list-disc pl-5">
                                            <li>
                                                <p>Performing maintenance on the machine learning and hardware aspects for the Biofarma CPE Polio project.</p>
                                            </li>
                                            <li>
                                                <p>Developing the Telkomsel Radio Network Private (RNP) system using Java EE / Jakarta EE and JSP (Java Server Pages).</p>
                                            </li>
                                            <li>
                                                <p>Building and developing face recognition to identify a person&apos;s face.</p>
                                            </li>
                                        </ul>
                                    </section>

                                    <section className="mt-5 relative pl-10">
                                        <div className="absolute left-0 top-0 h-full border-l-4 border-gray-400"></div> {/* Garis di samping kiri */}
                                        {/* Lingkaran di ujung atas */}
                                        <div className="absolute left-[-6px] top-0 h-4 w-4 rounded-full bg-gray-400"></div>
                                        
                                        {/* Lingkaran di ujung bawah */}
                                        <div className="absolute left-[-6px] bottom-0 h-4 w-4 rounded-full bg-gray-400"></div>
                                        <p className="text-gray-100 mb-1">Artificial Intelligence Engineer Intern</p>
                                        <p className="text-gray-400 mb-4">Nov 2022  - Feb 2023</p>
                                        <ul className="list-disc pl-5">
                                            <li>
                                                <p>Building an object detection system to identify houses and tanks using the YOLO framework.</p>
                                            </li>
                                            <li>
                                                <p>Developing an OCR system to extract information from a document.</p>
                                            </li>
                                            <li>
                                                <p>Creating a document scanner using OpenCV Python.</p>
                                            </li>
                                            <li>
                                                <p>Building a handwritten recognition system to identify sentences written by hand.</p>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            
                        </div>
                        )}
                        {activeTab === 1 && (
                        <div>
                            <div className="flex justify-start mt-5">
                                <div className="w-3/4">
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">PIKSI GANESHA POLYTECHNIC</h2>

                                    <section className="mt-5 relative pl-10">
                                        <div className="absolute left-0 top-0 h-full border-l-4 border-gray-400"></div> {/* Garis di samping kiri */}
                                        {/* Lingkaran di ujung atas */}
                                        <div className="absolute left-[-6px] top-0 h-4 w-4 rounded-full bg-gray-400"></div>
                                        
                                        {/* Lingkaran di ujung bawah */}
                                        <div className="absolute left-[-6px] bottom-0 h-4 w-4 rounded-full bg-gray-400"></div>
                                        <p className="text-gray-100 mb-1">Information Systems</p>
                                        <p className="text-gray-400 mb-4">2019 - 2024</p>
                                        <p className="text-justify">I completed a D4 degree in Information Systems at Piksi Polytechnic for approximately 4 years with a GPA of 3.50. I published a scientific journal entitled  <a href="https://jurnal.univrab.ac.id/index.php/rabit/article/view/4067" target="_blank"><span className="italic font-semibold">&quot;IMPLEMENTATION OF THE MODEL VIEW CONTROLLER PRINCIPLE IN A WEB-BASED FACULTY INFORMATION SYSTEM.&quot;</span></a></p>
                                    </section>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>   
        </div>
    </>
}

export default About;