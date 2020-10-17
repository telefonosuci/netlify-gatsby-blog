import React, { useState } from "react"
import AlertPopup from "../components/alert-popup"
import Cookies from 'js-cookie'

const CookieConsents = () => {
    
    const [consents, ] = useState(Cookies.get('consents'));

    const setCookie = () => {
        Cookies.set('consents', true)
    }

    return (
        <AlertPopup visible={!consents} callback={setCookie}>
        Ciao! Questo sito utilizza i cookie per personalizzare contenuti ed annunci, per fornire funzionalità dei social media e per analizzare il nostro traffico. 
        Condividiamo inoltre informazioni sul modo in cui utilizza il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che ha fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi. 
        Acconsenta ai nostri cookie se continua ad utilizzare il nostro sito web.
        </AlertPopup>
    )
}

export default CookieConsents