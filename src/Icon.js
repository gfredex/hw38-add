import React from 'react'

function ClonIcon(props) {
    return React.cloneElement(props.children, { style: { backgroundImage: props.bgImg, height: "128px", width: "128px" }, })
}

function Icon(props) {

    return (
        <div>
            <ClonIcon bgImg={props.bgImg}>
                <div></div>
            </ClonIcon>
        </div >
    )
}

export default Icon