'use client' 
// ?
import {AiOutlineZoomIn, AiFillCloseCircle} from 'react-icons/ai'
import nextConfig from '../../../../next.config'
import {useState } from 'react'    
import Image from 'next/image'

import styles from './gallery.module.scss'

export default function Gallery(){

    const [bigGalleryVisible, setBigGalleryVisible] = useState(false);
    const [image, setImage] = useState();

    const imageAlt = [
        "Tworzywa sztuczne przed recyklingiem",
        "Worki foliowe na pelet drzewny",
        "Czarny regranulat",
        "Produkcja czarnej foli"
    ]

    function toggleBigGallery(imageNumber=null) {
        setBigGalleryVisible(!bigGalleryVisible)
        setImage(imageNumber)
    }

    return (
        <>
            <div className={styles.company_activities_gallery}>
                <button onClick={() => toggleBigGallery(1)}>
                    <div id={styles.img_1} className={styles.image}>                    
                        <AiOutlineZoomIn className={styles.zoom_icon}/>
                    </div>  
                </button>
                <button onClick={() => toggleBigGallery(2)}>
                    <div id={styles.img_2} className={styles.image}>
                        <AiOutlineZoomIn className={styles.zoom_icon}/>
                    </div>
                </button>
                <button onClick={() => toggleBigGallery(3)}>
                    <div id={styles.img_3} className={styles.image}>
                        <AiOutlineZoomIn className={styles.zoom_icon}/>
                    </div>
                </button>
                <button onClick={() => toggleBigGallery(4)}>
                    <div id={styles.img_4} className={styles.image}>
                        <AiOutlineZoomIn className={styles.zoom_icon}/>
                    </div>
                </button>
                
            </div>

            {
                bigGalleryVisible?
                <div className={styles.gallery_bg}>

                    <div id="x" className={styles.image_loading}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path id="bg" fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path fill="currentColor" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>
                    </div>

                    <div className={styles.gallery_img_wrapper}>
                        <Image 
                            src={nextConfig.basePath+"/gallery-"+image+"-half-res2.jpg"}
                            alt={imageAlt[image-1]}
                            width="10000"
                            height="10000"  
                            className={styles.gallery_img}
                            onLoadingComplete={() =>{
                                document.getElementById("x").remove()
                            }}
                        />
                        
                    </div>
                    {/* ??????????????????????????????????????? */}
                    {/* <div className={styles.image_desc}>
                        {imageAlt[image-1]}
                    </div> */}
                    {/* ??????????????????????????????????????? */}
                    <button className={styles.gallery_exit_bt} onClick={() => setBigGalleryVisible(false)}>
                        <AiFillCloseCircle />
                    </button>
                </div>
                :
                null
            }

            
        </>
        
    )
}