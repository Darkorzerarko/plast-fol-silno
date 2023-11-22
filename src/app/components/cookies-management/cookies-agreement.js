"use client"

import styles from "./cookies_agreement.module.scss"

import { MdOutlineCookie } from "react-icons/md";
import { useState, useEffect } from "react";
import { getCookie, setCookie, hasCookie } from "cookies-next";


export default function CookiesAgreement(){

    const [showConsent, setShowConsent] = useState(false)

    // console.log('COOKIE',hasCookie('user_cookie_consent'));
    // console.log('STATE',showConsent)

    useEffect(()=>{
        hasCookie('user_cookie_consent')?
            getCookie('user_cookie_consent')?
                setShowConsent(false)
            :
                setShowConsent(true)
        :
            setShowConsent(true)
    },[])

    const cookieConstent = () => {
        let date = new Date;
        date.setDate(date.getDate()+31)
        setCookie('user_cookie_consent', "true", {expires: date})
    }

    return(
        showConsent?
            <div className={styles.cookies_agreement_wrapper}>
                <div className={styles.cookie_icon}>
                    <MdOutlineCookie />
                </div>
                <p>
                    Ta strona korzysta z plików cookies, aby zapewnić najlepsze doświadczenie dla użytkownika. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
                </p>
                <button aria-label="Zgoda na pliki cookies"
                    onClick={()=>{
                        setShowConsent(false)
                        cookieConstent()
                    }}    
                >
                    Zgoda
                </button>
            </div>
        : 
            null

    )
}