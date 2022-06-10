import { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io'

const Footer = ({divCss, footerCss, text, linkDest}) => {
    const [footerText, setFooterText] = useState("")
    const [showIcon, setShowIcon] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowIcon(true)
            setFooterText(text)
        }, 8000)
    }, [])

    return (
        <div className={`${divCss}`}>
            {showIcon && <a href={`${linkDest}`}><IoIosArrowDown size={70} className={`${footerCss}`} /></a>}
            <a href={`${linkDest}`} className='home-footer-text'>{footerText}</a>
        </div>
    )
}

export default Footer;