import React, { useState } from "react"

const AlertPopup = ({ children }) => {
    const [showPopup, setShowPopup] = useState(true)
    const close = () => setShowPopup(false)

    if(showPopup){
        return (
            <div className="o-alertPopup">
                <header></header>
                <main>
                    <div className="o-alertPopup__textContainer">
                        <p className="o-alertPopup__text">{children} <a onClick={close}>Chiudi</a></p>
                    </div>
                </main>
            </div>
        )
    }
    
    return null
}

export default AlertPopup
