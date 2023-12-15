import Script from "next/script"
import Image from "next/image"
import styles from './page.module.scss'

import NavBar from "../components/nav-bar/nav-bar"
import CookiesAgreement from "../components/cookies-management/cookies-agreement"
import Footer from "../components/footer/footer"

// SVG oferty
import tasma from '../../../public/oferta/tasma.svg'
import rekaw from '../../../public/oferta/rekaw.svg'
import rekaw_z from '../../../public/oferta/rekaw_z.svg'
import p_rekaw from '../../../public/oferta/p_rekaw.svg'
import p_rekaw_z from '../../../public/oferta/p_rekaw_z.svg'
import worek from '../../../public/oferta/worek.svg'
import worek_z from '../../../public/oferta/worek_z.svg'


export default function Oferta(){

    return (
        <>
            <NavBar quote={"Oferta"} height={"25rem"}/>
            <div className={styles.content}>
                <div className={styles.greeting_wrapper}>
                    <div className={styles.greeting}>
                        <h2>
                            Poznaj naszą ofertę produkcyjną
                        </h2>
                    </div>
                </div>

                <div className={styles.products_wrapper}>
                    <div className={styles.products_categories_wrapper}>
                        <div className={styles.products_categories}>
                            <div className={styles.category_separator}></div>
                            <button className={styles.category} id="tasma">
                                Taśma
                            </button>
                            <div className={styles.category_separator}></div>
                            <button className={styles.category} id="rekaw">
                                Rękaw
                            </button>
                            <div className={styles.category_separator}></div>
                            <button className={styles.category} id="prekaw">
                                Półrękaw
                            </button>
                            <div className={styles.category_separator}></div>
                            <button className={styles.category} id="worek" >
                                Worki
                            </button>
                            <div className={styles.category_separator}></div>
                        </div>
                    </div>

                    <div className={styles.products_elements_wrapper}>
                        <Script >
                            {`
                                let targetTasma = document.getElementById("targetTasma");
                                document.getElementById('tasma').addEventListener('click', function() {
                                    if(targetTasma) {
                                        targetTasma.scrollIntoView({ behavior: 'smooth' })
                                    }
                                });
                                
                                let targetRekaw = document.getElementById("targetRekaw");
                                document.getElementById('rekaw').addEventListener('click', function() {
                                    if(targetRekaw) {
                                        targetRekaw.scrollIntoView({ behavior: 'smooth' })                                      
                                    }
                                });

                                let targetPRekaw = document.getElementById("targetPRekaw");
                                document.getElementById('prekaw').addEventListener('click', function() {
                                    if(targetPRekaw) {
                                        targetPRekaw.scrollIntoView({ behavior: 'smooth' })                                      
                                    }
                                });

                                let targetWorek = document.getElementById("targetWorek");
                                document.getElementById('worek').addEventListener('click', function() {
                                    if(targetWorek) {
                                        targetWorek.scrollIntoView({ behavior: 'smooth' })                                      
                                    }
                                });
                            `}
                        </Script>

                        <div className={styles.product_wrapper} >
                            <div className={styles.product_anchor} id="targetTasma"></div>
                            <div className={styles.product}>
                                <div className={styles.product_graphic}>
                                    <Image src={tasma} alt="Graficzna reprezentacja Taśmy foliowej" />
                                </div>
                                <div className={styles.product_description}>
                                    <h2>Taśma</h2>
                                    <h3>Dostępne wymiary:</h3>
                                    <ul>
                                        <li>Szerokość taśmy: 300mm - 2500mm</li>
                                        <li>Grubość: 0,04mm - 0,2mm</li>
                                    </ul>
                                    <h3>Dostępne kolory:</h3>
                                    <ul>
                                        <li>"słomka" (bezbarwny)</li>
                                        <li>biały (mleczny)</li>
                                        <li>czarny</li>
                                        <li>inny (na zapytanie)
                                            {/* <a href="/kontakt"> Zapytaj już teraz!</a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.product_separator}></div>

                        <div className={styles.product_wrapper}>
                            <div className={styles.product_anchor} id="targetRekaw"></div>
                            <div className={styles.product}>
                                <div className={styles.product_graphic} style={{justifyContent: "space-around"}}>
                                    <Image src={rekaw} alt="Graficzna reprezentacja Rękawa foliowego" />
                                    <Image src={rekaw_z} alt="Graficzna reprezentacja Rękawa foliowego z zakładkami" />
                                </div>
                                <div className={styles.product_description}>
                                    <h2>Rękaw i Rękaw z zakładkami</h2>
                                    <h3>Dostępne wymiary:</h3>
                                    <ul>
                                        <li>Szerokość rękawa: 300mm - 2500mm</li>
                                        <div className={styles.additional}>
                                            W przypadku rękawa z zakładkami, <br />
                                            szerokość rękawa = szerokość rolki + 2 szerokości zakładek<br />
                                            np: 1500mm = 1000mm + 2 x 250mm 
                                        </div>
                                        <li>Grubość: 0,04mm - 0,2mm</li>
                                    </ul>
                                    <h3>Dostępne kolory:</h3>
                                    <ul>
                                        <li>"słomka" (bezbarwny)</li>
                                        <li>biały (mleczny)</li>
                                        <li>czarny</li>
                                        <li>inny (na zapytanie)
                                            {/* <a href="/kontakt"> Zapytaj już teraz!</a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.product_separator}></div>
                        
                        <div className={styles.product_wrapper}>
                            <div className={styles.product_anchor} id="targetPRekaw"></div>
                            <div className={styles.product}>
                                <div className={styles.product_graphic} style={{justifyContent: "space-around"}}>
                                    <Image src={p_rekaw} alt="Graficzna reprezentacja Rękawa foliowego" />
                                    <Image src={p_rekaw_z} alt="Graficzna reprezentacja Rękawa foliowego z zakładkami" />
                                </div>
                                <div className={styles.product_description}>
                                    <h2>Półrękaw i Półrękaw z zakładkami</h2>
                                    <h3>Dostępne wymiary:</h3>
                                    <ul>
                                        <li>Szerokość rękawa: 300mm - 2500mm</li>
                                        <div className={styles.additional}>
                                            W przypadku rękawa z zakładkami, <br />
                                            szerokość rękawa = szerokość rolki + 2 szerokości zakładek<br />
                                            np: 1500mm = 1000mm + 2 x 250mm 
                                        </div>
                                        <li>Grubość: 0,04mm - 0,2mm</li>
                                    </ul>
                                    <h3>Dostępne kolory:</h3>
                                    <ul>
                                        <li>"słomka" (bezbarwny)</li>
                                        <li>biały (mleczny)</li>
                                        <li>czarny</li>
                                        <li>inny (na zapytanie)
                                            {/* <a href="/kontakt"> Zapytaj już teraz!</a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.product_separator}></div>
                        
                        <div className={styles.product_wrapper}>
                            <div className={styles.product_anchor} id="targetWorek"></div>
                            <div className={styles.product}>
                                <div className={styles.product_graphic} style={{justifyContent: "space-around"}}>
                                    <Image src={worek} alt="Graficzna reprezentacja Rękawa foliowego" />
                                    <Image src={worek_z} alt="Graficzna reprezentacja Rękawa foliowego z zakładkami" />
                                </div>
                                <div className={styles.product_description}>
                                    <h2>Worki i Worki z zakładkami</h2>
                                    <h3>Dostępne wymiary:</h3>
                                    <ul>
                                        <li>Szerokość rękawa: 300mm - 2500mm</li>
                                        <div className={styles.additional}>
                                            W przypadku rękawa z zakładkami, <br />
                                            szerokość rękawa = szerokość rolki + 2 szerokości zakładek<br />
                                            np: 1500mm = 1000mm + 2 x 250mm 
                                        </div>
                                        <li>Grubość: 0,04mm - 0,2mm</li>
                                        <li>Długość worka: 300mm - 3000mm</li>
                                    </ul>
                                    <h3>Dostępne kolory:</h3>
                                    <ul>
                                        <li>"słomka" (bezbarwny)</li>
                                        <li>biały (mleczny)</li>
                                        <li>czarny</li>
                                        <li>inny (na zapytanie)
                                            {/* <a href="/kontakt"> Zapytaj już teraz!</a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CookiesAgreement/>
            <Footer />
        </>
    )
}