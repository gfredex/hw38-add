import React from 'react'

function Clone(props) {

    return React.cloneElement(props.children, { style: { color: props.color } })
}

function HighlightText(props) {

    return (
        <div>
            Текст компонента HighlightText
            <Clone color={props.color} >
                <p>Клонированный компонент1</p>
            </Clone >
        </div>
    )
}

export default HighlightText;