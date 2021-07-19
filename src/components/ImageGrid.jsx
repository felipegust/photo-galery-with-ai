import React, { useEffect } from "react";
import { useState } from "react";
import '../App.css';

function ImageGrid() {
    const [images, setImages] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(data => data.slice(0, 20))
            console.log(JSON.stringify(result))
            setImages(result)
        }

        fetchImages()

    }, [])

    // const filteredImages = images.filter((image) == image.properties.some(property => filter.includes(property)))

    return (
        <div className="imageGrid">
            {images.map((image) => {
                return (

                        <img className="imageGridItem" width="600" height="600" src={image.url}></img>

                )
            })}
        </div>
    )
}

export default ImageGrid