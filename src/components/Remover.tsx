import React, { useState, ChangeEvent } from "react";
import axios from 'axios';
import "./Remover.css"

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
        <div className="container">
            <div className="remover_container">
                <form className="info_container">
                    <label className="info_text">Select a File</label>
                    <input type="file" onChange={handleFileInputChange} required />
                    {!isUpload ? (
                        <button
                            type="button"
                            onClick={handleFileUpload}
                            className="btn btn_upload"
                        >
                            Upload
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleFileUpload}
                            className="btn btn_upload btn_disabled"
                            disabled={true}
                        >
                            Uploading...
                        </button>
                    )}
                </form>
                {finalUrl && (
                    <a href={finalUrl} download="no-back.png">
                        <button className="btn btn_download">Download</button>
                    </a>
                )}
                {finalUrl && (
                    <div className="final_img_area">
                        <img src={finalUrl} alt="final_img" className="final_img" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Remover;
