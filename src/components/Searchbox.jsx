import {React, useState} from 'react';
import '../styles/component/Searchbox.css'
import {ImSearch} from "react-icons/im";

export default function () {
    const [placeholder, setPlaceholder] = useState()

    function inputFocusTrigger(e, trigger) {
        if (trigger) {
            setPlaceholder(e.target.placeholder);
        }
        e.target.placeholder = trigger ? '' : placeholder
    }

    return (
        <>
            <div className="search-box flex-row-center-center">
                <div className="search-input-box">
                    <input
                        onClick={(e) => inputFocusTrigger(e, true)}
                        onBlur={(e) => inputFocusTrigger(e, false)}
                        type="text"
                        className="search-input"
                        placeholder="Search"/>
                </div>
                <div className="search-button-box">
                    <button
                        className="search-button flex-row-center-center"><ImSearch color="var(--color-search-box-button-text)"/></button>
                </div>
            </div>
        </>
    )
}