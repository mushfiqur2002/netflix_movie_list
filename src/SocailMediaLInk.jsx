import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faWhatsapp, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function SocailMediaLink(){
    return(
        <ul>
            <li><a href="https://www.facebook.com/mushfiqurrahman.nasim/" target="_blank"><FontAwesomeIcon icon={faFacebook} className="icon"/></a></li>
            <li><a href="https://wa.me/8801517823960" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
            <li><a href="https://github.com/mushfiqur2002" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/mushfiqur-rahman-nasim-840605253/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
    )
}

export default SocailMediaLink