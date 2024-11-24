import React from 'react'

function Clone(props) {

    return React.cloneElement(props.children, { style: { color: "red" } })
}

function Component() {

    return (
        <div>
            Текст компонента
            <Clone>
                <p>Клонированный компонент</p>
            </Clone>
        </div>
    )
}

export default Component;