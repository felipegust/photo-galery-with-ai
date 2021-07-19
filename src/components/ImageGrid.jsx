import React, { useEffect } from "react";
import { useState } from "react";
import '../App.css';

function ImageGrid({ filter }) {
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            const result = await fetch('http://localhost:3000/images', { method: "GET", })
                .then(response => response.json())
                .then(data => data)
            setImages(result)
        }

        fetchImages()
    }, [])

    const filteredImages = filter.length > 0 ? images.filter(image => image.properties.some(property => filter.includes(property))) : images

    return (
        <div className="imageGrid">
            {filteredImages.map(image => <img className="imageGridItem" width="600" height="600" src={`data:image/jpeg;base64,${image.file}`} />)}
        </div>
    )
}

export default ImageGrid