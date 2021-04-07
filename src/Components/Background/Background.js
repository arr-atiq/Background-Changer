import React, { useState } from 'react';
import './Background.css'
import Select from 'react-select';
const Background = () => {

    const Image = [
        {
            label: "Image1",
            image: "https://image.freepik.com/free-vector/lion-hunter-vector-art_42859-28.jpg"
        },

        {
            label: "Image2",
            image: "https://static.vecteezy.com/system/resources/previews/000/229/801/non_2x/vector-beautiful-landscape-illustration.jpg"
        },

        {
            label: "Image3",
            image: "https://sotamedialab.files.wordpress.com/2019/09/vector-landscape-illustration-1.jpg"
        }
    ]

    const [bgImage, setBgImage] = useState(Image.image);

    const handleClick = (e) => {
        setBgImage(e.image);
    }

    return (
        <div>
                <Select options={Image} onChange={handleClick}></Select>
                <img className="img-design" src={bgImage} alt=""/>
        </div>
    );
};

export default Background;