import styles from "./company_location.module.scss"
import {TbMap2} from "react-icons/tb"
import {CgSpinner} from "react-icons/cg"

export default function LocationEmbeded({children}) {

    return (
        <div className={styles.location}>
            <div className={styles.location_wrapper}>
                <h2>{children}</h2>
                <div className={styles.map_loading_icon}>
                    <TbMap2 />
                </div>
                <div className={styles.map_loading_spinner}>
                    <CgSpinner />
                </div>
                
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1406.3799973682044!2d17.696285602173656!3d53.642696303071745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47024ff85132e6bf%3A0x36f30088c5fa9f8d!2sPPHU%20Plast%20Fol%20Mariusz%20I%20Artur%20Rze%C5%BAnik!5e0!3m2!1spl!2spl!4v1695765558830!5m2!1spl!2spl"
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokalizacja naszej firmy"
                ></iframe>
            </div>
        </div>
    )
}