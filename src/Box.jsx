import React, { useState } from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'



function Box(){
    return(
        <div className="box">
            <span className="sec emailSec"><input value={"mushfiqurnasim@gmail.com"} readOnly/></span>
            <span className="sec iconSec">
                <CopyToClipboard text="mushfiqurnasim@gmail.com">
                    <FontAwesomeIcon icon={faCopy} className="icon" />
                </CopyToClipboard>
            </span>
        </div>
    )
}

export default Box