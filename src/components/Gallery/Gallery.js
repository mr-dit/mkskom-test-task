import style from "./Gallery.module.scss"
import search from "../../icons/search.svg"
import deleteTrash from "../../icons/delete.svg"
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {useEffect, useState} from "react";

const Gallery = ({albumId}) => {
    const [images, setImages] = useState([]);
    const [gridMode, setGridMode] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleImageClick = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                if (albumId) {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
                    const data = await response.json();
                    setImages(data);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages();
    }, [albumId]);


    return (
        <div className={style.wrapper}>
            <div className={style.head}>
                <div className={style.headContent}>
                    <div className={style.left}>
                        <div className={style.groupButton}>
                            <button className={style.button} onClick={() => {
                                setGridMode(false)
                            }}>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M21.4666 4.66666H6.53329C5.50663 4.66666 4.66663 5.50666 4.66663 6.53332V21.4667C4.66663 22.4933 5.50663 23.3333 6.53329 23.3333H21.4666C22.4933 23.3333 23.3333 22.4933 23.3333 21.4667V6.53332C23.3333 5.50666 22.4933 4.66666 21.4666 4.66666ZM10.2666 21.4667H7.46663C6.95329 21.4667 6.53329 21.0467 6.53329 20.5333V17.7333H10.2666V21.4667ZM10.2666 15.8667H6.53329V12.1333H10.2666V15.8667ZM10.2666 10.2667H6.53329V7.46666C6.53329 6.95332 6.95329 6.53332 7.46663 6.53332H10.2666V10.2667ZM15.8666 21.4667H12.1333V17.7333H15.8666V21.4667ZM15.8666 15.8667H12.1333V12.1333H15.8666V15.8667ZM15.8666 10.2667H12.1333V6.53332H15.8666V10.2667ZM20.5333 21.4667H17.7333V17.7333H21.4666V20.5333C21.4666 21.0467 21.0466 21.4667 20.5333 21.4667ZM21.4666 15.8667H17.7333V12.1333H21.4666V15.8667ZM21.4666 10.2667H17.7333V6.53332H20.5333C21.0466 6.53332 21.4666 6.95332 21.4666 7.46666V10.2667Z"
                                          fill={gridMode ? "#C3CAD9" : "#FF6633"}/>
                                </svg>
                            </button>
                            <button className={style.button} onClick={() => {
                                setGridMode(true)
                            }}>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M6.99998 13.0667C6.22531 13.0667 5.59998 13.692 5.59998 14.4667C5.59998 15.2413 6.22531 15.8667 6.99998 15.8667C7.77464 15.8667 8.39998 15.2413 8.39998 14.4667C8.39998 13.692 7.77464 13.0667 6.99998 13.0667ZM6.99998 7.46667C6.22531 7.46667 5.59998 8.09201 5.59998 8.86667C5.59998 9.64134 6.22531 10.2667 6.99998 10.2667C7.77464 10.2667 8.39998 9.64134 8.39998 8.86667C8.39998 8.09201 7.77464 7.46667 6.99998 7.46667ZM6.99998 18.6667C6.22531 18.6667 5.59998 19.3013 5.59998 20.0667C5.59998 20.832 6.23464 21.4667 6.99998 21.4667C7.76531 21.4667 8.39998 20.832 8.39998 20.0667C8.39998 19.3013 7.77464 18.6667 6.99998 18.6667ZM10.7333 21H21.9333C22.4466 21 22.8666 20.58 22.8666 20.0667C22.8666 19.5533 22.4466 19.1333 21.9333 19.1333H10.7333C10.22 19.1333 9.79998 19.5533 9.79998 20.0667C9.79998 20.58 10.22 21 10.7333 21ZM10.7333 15.4H21.9333C22.4466 15.4 22.8666 14.98 22.8666 14.4667C22.8666 13.9533 22.4466 13.5333 21.9333 13.5333H10.7333C10.22 13.5333 9.79998 13.9533 9.79998 14.4667C9.79998 14.98 10.22 15.4 10.7333 15.4ZM9.79998 8.86667C9.79998 9.38001 10.22 9.80001 10.7333 9.80001H21.9333C22.4466 9.80001 22.8666 9.38001 22.8666 8.86667C22.8666 8.35334 22.4466 7.93334 21.9333 7.93334H10.7333C10.22 7.93334 9.79998 8.35334 9.79998 8.86667Z"
                                          fill={gridMode ? "#FF6633" : "#C3CAD9"}/>
                                </svg>
                            </button>
                        </div>
                        <div className={style.buttonDelete}>
                            <Button svgPath={deleteTrash} size={"small"}/>
                        </div>
                    </div>
                    <div className={style.input}>
                        <Input leftIcon={search} placeholder={"Search"}/>
                    </div>
                </div>
            </div>
            <div className={style.galleryContainer}>
                {/*------------------------flex-----------------------------*/}
                <div style={gridMode ? {display: 'none'} : {display: 'block'}}>
                    <div className={style.galleryFlex}>
                        {images.slice(0, 16).map((image, index) => (
                            <div key={image.id}
                                 className={style.container}
                                 onClick={() => handleImageClick(index)}
                            >
                                <figure className={style.imageFlex}
                                        style={{border: index === activeIndex ? '2px solid #F63' : ''}}
                                >
                                    <img src={image.url} alt={image.title} className={style.image}/>
                                </figure>
                                <div className={style.imageTitle} style={{color: index === activeIndex ? '#F63' : ''}}>{image.title}</div>
                                <div className={style.imageTitle}>28.11.2045</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*------------------------grid-----------------------------*/}
                <div style={gridMode ? {display: 'block'} : {display: 'none'}}>
                    <div className={style.galleryGrid}>
                        {images.slice(0, 5).map((image) => (
                            <figure key={image.id} className={style.imageContainer}>
                                <img src={image.url} alt={image.title} className={style.imageGrid}/>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery