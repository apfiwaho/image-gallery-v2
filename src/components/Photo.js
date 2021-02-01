import React from 'react';
import './Photo.css'

const Photo = (props) => {
    return (
        <section>
            <img src={props.url} alt=' '/>
        </section>
    )
}

export default Photo