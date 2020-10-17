import React, { useState } from "react"

const AlertPopup = ({ visible, callback, children }) => {
    const [showPopup, setShowPopup] = useState(visible)
    const close = () => {
        callback()
        setShowPopup(false)
    }

    if(showPopup){
        return (
            <div className="o-alertPopup">
                <header></header>
                <main>
                    <div className="o-alertPopup__textContainer">
                        <p className="o-alertPopup__text">{children} <a className="o-alertPopup__close" onClick={close}>Chiudi</a></p>
                    </div>
                </main>
            </div>
        )
    }
    
    return null
}

export default AlertPopup
