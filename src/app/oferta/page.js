import Script from "next/script"
import styles from './page.module.scss'

import NavBar from "../components/nav-bar/nav-bar"
import CookiesAgreement from "../components/cookies-management/cookies_agreement"

import Footer from "../components/footer/footer"

export default function Oferta(){


    return (
        <>
            <NavBar quote={"Oferta"} height={"25rem"}/>
            <div className={styles.content}>
                <div className={styles.greeting_wrapper}>
                    <div className={styles.greeting}>
                        <h1>
                            Poznaj naszą ofertę produkcyjną
                        </h1>
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
                                const targetTasma = document.getElementById("targetTasma");
                                document.getElementById('tasma').addEventListener('click', function() {
                                    if(targetTasma) {
                                        targetTasma.scrollIntoView({ behavior: 'smooth' })
                                    }
                                });
                                
                                const targetRekaw = document.getElementById("targetRekaw");
                                document.getElementById('rekaw').addEventListener('click', function() {
                                    if(targetRekaw) {
                                        targetRekaw.scrollIntoView({ behavior: 'smooth' })                                      
                                    }
                                });

                                const targetPRekaw = document.getElementById("targetPRekaw");
                                document.getElementById('prekaw').addEventListener('click', function() {
                                    if(targetPRekaw) {
                                        targetPRekaw.scrollIntoView({ behavior: 'smooth' })                                      
                                    }
                                });

                                const targetWorek = document.getElementById("targetWorek");
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
                                    <img src="./oferta/tasma.svg" alt="Graficzna reprezentacja Taśmy foliowej" />
                                </div>
                                <div className={styles.product_description}>
                                    <h1>Taśma</h1>
                                    <h2>Dostępne wymiary:</h2>
                                    <ul>
                                        <li>Szerokość taśmy: 300mm - 2500mm</li>
                                        <li>Grubość: 0,04mm - 0,2mm</li>
                                    </ul>
                                    <h2>Dostępne kolory:</h2>
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
                                    <img src="./oferta/rekaw.svg" alt="Graficzna reprezentacja Rękawa foliowego" />
                                    <img src="./oferta/rekaw_z.svg" alt="Graficzna reprezentacja Rękawa foliowego z zakładkami" />
                                </div>
                                <div className={styles.product_description}>
                                    <h1>Rękaw i Rękaw z zakładkami</h1>
                                    <h2>Dostępne wymiary:</h2>
                                    <ul>
                                        <li>Szerokość rękawa: 300mm - 2500mm</li>
                                        <div className={styles.additional}>
                                            W przypadku rękawa z zakładkami, <br />
                                            szerokość rękawa = szerokość rolki + 2 szerokości zakładek<br />
                                            np: 1500mm = 1000mm + 2 x 250mm 
                                        </div>
                                        <li>Grubość: 0,04mm - 0,2mm</li>
                                    </ul>
                                    <h2>Dostępne kolory:</h2>
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
                                    <img src="./oferta/p_rekaw.svg" alt="Graficzna reprezentacja Rękawa foliowego" />
                                    <img src="./oferta/p_rekaw_z.svg" alt="Graficzna reprezentacja Rękawa foliowego z zakładkami" />
                                </div>
                                <div className={styles.product_description}>
                                    <h1>Półrękaw i Półrękaw z zakładkami</h1>
                                    <h2>Dostępne wymiary:</h2>
                                    <ul>
                                        <li>Szerokość rękawa: 300mm - 2500mm</li>
                                        <div className={styles.additional}>
                                            W przypadku rękawa z zakładkami, <br />
                                            szerokość rękawa = szerokość rolki + 2 szerokości zakładek<br />
                                            np: 1500mm = 1000mm + 2 x 250mm 
                                        </div>
                                        <li>Grubość: 0,04mm - 0,2mm</li>
                                    </ul>
                                    <h2>Dostępne kolory:</h2>
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
                                    <img src="./oferta/worek.svg" alt="Graficzna reprezentacja Rękawa foliowego" />
                                    <img src="./oferta/worek_z.svg" alt="Graficzna reprezentacja Rękawa foliowego z zakładkami" />
                                </div>
                                <div className={styles.product_description}>
                                    <h1>Worki i Worki z zakładkami</h1>
                                    <h2>Dostępne wymiary:</h2>
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
                                    <h2>Dostępne kolory:</h2>
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