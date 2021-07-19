import React from "react";
import { useState } from "react";
import RenderedImage from "./RenderedImage";
function ImageUpload() {

    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const onFileUpload = (e) => {
        const formData = new formData();

        formData.append(selectedFile.name, selectedFile, selectedFile.name)
        console.log(selectedFile.text)

        fetch("api/imageUpload", { method: "POST", body: formData })
    }

    return (
        <div>
            <div>
                <input type="file" onChange={(e) => onFileChange(e)} />
                <button onClick={(e) => onFileUpload(e)}>
                    Upload!
                </button>
                {selectedFile ? <RenderedImage arrayBuffer={selectedFile} /> : null}
            </div>
        </div>
    );

}

export default ImageUpload;