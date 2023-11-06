import styles from "./footer.module.scss"
import nextConfig from "../../../../next.config"

import { AiOutlineHome} from 'react-icons/ai'
import { GrCircleInformation } from "react-icons/gr"
import { HiPhone } from "react-icons/hi"
import { MdOutlineLocalOffer } from "react-icons/md"

export default function Footer(){


    return (
        <div className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_top}>
                    <div className={styles.company_logo_name}>
                        <a href="/" alt="Strona główna" className={styles.logo}>
                            <img src={nextConfig.basePath+"/logo.svg"} alt="Logo Plast-Fol" 
                                height={"100%"}
                                width={"auto"}
                            />
                        </a>
                        <div style={{paddingLeft: "1em"}}>
                            P.P.H.U. PLAST-FOL s.c<br />
                            Mariusz i Artur Rzeźnik
                        </div>
                    </div>
                    <div className={styles.bottom_nav}>
                        <a href={nextConfig.basePath+'/'} tabIndex="0"><AiOutlineHome /> Strona Główna</a>
                        <a href={nextConfig.basePath+'/o-nas'} tabIndex="0"><GrCircleInformation /> O nas</a>   
                        <a href={nextConfig.basePath+'/oferta'} tabIndex="0"><MdOutlineLocalOffer /> Oferta</a>
                        <a href={nextConfig.basePath+'/kontakt'} tabIndex="0"><HiPhone /> Kontakt</a>
                    </div>
                </div>
                
                <div className={styles.author}>
                    Projekt i realizacja: Dariusz Rzeźnik <a href="mailto:rz.dariusz@gmail.com">rz.dariusz@gmail.com</a>
                </div>
            </div>
        </div>
    )
}