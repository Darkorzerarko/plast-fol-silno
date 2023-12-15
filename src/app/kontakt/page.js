import styles from './page.module.scss'

import NavBar from "../components/nav-bar/nav-bar"
import CookiesAgreement from '../components/cookies-management/cookies-agreement'
import Footer from "../components/footer/footer"
import LocationEmbeded from '../components/company-location/company_location'

import {HiPhone} from "react-icons/hi"
import {MdPlace, MdMailOutline} from "react-icons/md"

export default function Kontakt(){

    return (
        <>
            <NavBar quote={"Kontakt"} height={"25rem"}></NavBar>
            <div className={styles.content}>
                <div className={styles.contact}>
                    <div className={styles.contact_wrapper}>
                        <div className={styles.contact_address}>
                            <h2>Siedziba firmy</h2> 
                            <div className={styles.address}>
                                <MdPlace />
                                <div>
                                    ul. Dworcowa 50<br />
                                    89-620 Silno <br />
                                    <div className={styles.office_opening_hours}>
                                        (biuro czynne w dni robocze w godzinach 8-16)
                                    </div>
                                </div>
                            </div>

                        </div> 
                        <div className={styles.contact_separator}></div>
                        <div className={styles.contact_data}>
                            <h2>Dane kontaktowe</h2>
                            <h3>Biuro</h3>
                            <a href='tel:52 398 76 32' ><HiPhone /> 52 398 76 32 </a><br />
                            <a href='mailto: plastfol.silno@gmail.com' ><MdMailOutline /> plastfol.silno@gmail.com </a>
                            <h3>Artur Rzeźnik</h3>
                            <a href='tel:608 444 259' ><HiPhone /> 608 444 259<br /></a>
                            <h3>Mariusz Rzeźnik</h3>
                            <a href='tel:602 391 918' ><HiPhone /> 602 391 918</a><br />
                            <a href='mailto: mariusz.rz@op.pl' ><MdMailOutline /> mariusz.rz@op.pl </a>
                        </div>
                    </div>
                </div>

                <LocationEmbeded>
                    Znajdź nas na mapie
                </LocationEmbeded>
            </div>
            <CookiesAgreement/>
            <Footer />
        </>
    )
}