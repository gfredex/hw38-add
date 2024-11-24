import React from 'react'

function ClonIcon(props) {
    return React.cloneElement(props.children, { style: { backgroundImage: "URL(./icon.png)", height: "128px", width: "128px" }, })
}

function Icon() {
    return (
        <div>
            <ClonIcon>
                <div></div>
            </ClonIcon>
        </div>
    )
}

export default Icon