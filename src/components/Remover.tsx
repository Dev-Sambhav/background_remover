import React, { useState, ChangeEvent } from "react";
import axios from 'axios';
import {FaFileDownload} from "react-icons/fa"

const Remover: React.FC = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [finalUrl, setFinalUrl] = useState<string | null>(null);
    const [isUpload, setIsUpload] = useState<boolean>(false);

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let image = e.target.files?.[0]; // it will return only the first selected file
        setSelectedFile(image || null);
    };

    const handleFileUpload = async () => {
        setIsUpload(true);
        const formData = new FormData();
        formData.append("image_file", selectedFile!);
        formData.append("size", "auto");

        const api_key = process.env.REACT_APP_API_BG as string;


        // send to the server
        try {
            const response = await axios.post("https://api.remove.bg/v1.0/removebg", formData, {
                headers: {
                    "X-Api-Key": api_key,
                },
                responseType: 'blob', // Specify the response type as blob
            });

            const url = URL.createObjectURL(response.data);
            setFinalUrl(url);
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally {
            setIsUpload(false);
        }
    };

    return (
        <div className="background w-screen h-screen ">
            <div className="remover_container text-slate-100 flex justify-evenly items-center flex-col w-screen h-screen md:flex-col lg:flex-col">
                <div className="title">
                    <h4 className="lg:text-5xl text-3xl">Remove Background <span className=" inline-block">with ease</span> </h4>
                </div>
                <div className="flex justify-center items-center flex-col h-1/2">
                    <form className="info_container flex justify-between  flex-col h-1/6 w-fit ">
                        <label htmlFor="userImg"  className="info_text">Select a File</label>
                        <input type="file" id="userImg" className=" pb-7" onChange={handleFileInputChange} required />
                        {!isUpload ? (
                            <button
                                type="button"
                                onClick={handleFileUpload}
                                className=" bg-purple-600 p-2 rounded"
                            >
                                Upload
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleFileUpload}
                                className="bg-purple-300 p-2 rounded"
                                disabled={true}
                            >
                                Uploading...
                            </button>
                        )}
                    </form>
                    <div className="flex justify-center items-center flex-col mt-8 p-4">
                        {finalUrl && (
                            <div className="final_img_area w-fit grid place-items-center">
                                <img src={finalUrl} alt="final_img" className=" w-2/6 h-auto" />
                            </div>
                        )}
                        {finalUrl && (
                            <a href={finalUrl} download="Removed Background.png" >
                                <button className=" bg-purple-600 p-2 rounded flex items-center m-1 w-full ">Download <FaFileDownload /> </button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Remover;
