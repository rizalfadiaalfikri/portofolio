import CardBlog from "./CardBlog";

const Blog = () => {
    return <>
        <div className="bg-gray-800 text-white font-jetbrains w-full h-screen">
            <div className="container mx-auto flex justify-center items-center flex-col mt-10">
                <CardBlog title="Text Trove" desc="is an application designed to extract text from digital documents or scanned images using OCR technology. This application allows users to scan physical documents such as ID cards, (NPWP) and other documents." link="https://github.com/pranav2612000/text-trove"/>
                <CardBlog title="Text Trove" desc="is an application designed to extract text from digital documents or scanned images using OCR technology. This application allows users to scan physical documents such as ID cards, (NPWP) and other documents." link="https://github.com/pranav2612000/text-trove"/>
                <CardBlog title="Text Trove" desc="is an application designed to extract text from digital documents or scanned images using OCR technology. This application allows users to scan physical documents such as ID cards, (NPWP) and other documents." link="https://github.com/pranav2612000/text-trove"/>
                <CardBlog title="Text Trove" desc="is an application designed to extract text from digital documents or scanned images using OCR technology. This application allows users to scan physical documents such as ID cards, (NPWP) and other documents." link="https://github.com/pranav2612000/text-trove"/>
            </div>
        </div>
    </>
}

export default Blog;