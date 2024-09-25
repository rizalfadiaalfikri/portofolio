import Card from "./Card";

const Project = () => {
    return <>
        <div className="bg-gray-800 text-white font-jetbrains w-full h-screen">
            <div className="container mx-auto flex justify-center items-center flex-col mt-10">
                <div className="flex justify-between items-center w-full">
                    <Card title="Text Trove" desc="is an application designed to extract text from digital documents or scanned images using OCR technology. This application allows users to scan physical documents such as ID cards, (NPWP) and other documents." image="https://i.pinimg.com/736x/63/7e/22/637e224ed6cca7d07c912dd14b8dc738.jpg" link="https://github.com/pranav2612000/text-trove"/>
                    <Card title="Text Trove" desc="is an application designed to extract text from digital documents or scanned images using OCR technology. This application allows users to scan physical documents such as ID cards, (NPWP) and other documents." image="https://i.pinimg.com/736x/63/7e/22/637e224ed6cca7d07c912dd14b8dc738.jpg" link="https://github.com/pranav2612000/text-trove"/>
                    <Card title="Text Trove" desc="is an application designed to extract text from digital documents or scanned images using OCR technology. This application allows users to scan physical documents such as ID cards, (NPWP) and other documents." image="https://i.pinimg.com/736x/63/7e/22/637e224ed6cca7d07c912dd14b8dc738.jpg" link="https://github.com/pranav2612000/text-trove"/>
                </div>
            </div>
        </div>
    </>
}

export default Project;