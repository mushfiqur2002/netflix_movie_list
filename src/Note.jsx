import React from "react"
import SocailMediaLink from "./SocailMediaLInk"
import Box from "./Box"

function Note(){
    return(
        <div className="note_div">
            <div className="container">
                <div className="box note_text_one">
                    <p><span>NOTE: </span>You can add more movie name list just go to the Data.jsx file and add object in Data array</p>
                </div>
                <div className="box note_text_two">
                    <div className="text">
                        <h1>If you want to hire me or contact me, copy this email or click the link</h1>
                    </div>
                    <br></br>
                    <div className="copy_email">
                        <Box />
                    </div>
                    <br></br>
                    <div className="socail_media">
                        <SocailMediaLink />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Note