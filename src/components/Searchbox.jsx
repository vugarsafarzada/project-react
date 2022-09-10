import {React, useState} from 'react';
import '../styles/component/Searchbox.css'
import {ImSearch} from "react-icons/im";

import {useSelector, useDispatch} from "react-redux";
import { plus, minus } from "../store/actions/counter";

export default function () {
    const [placeholder, setPlaceholder] = useState()
    const dispatch = useDispatch();

    const {counter} = useSelector(state => state);

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
                        placeholder={counter}/>
                </div>
                <div className="search-button-box">
                    <button
                        onClick={() => dispatch(plus())}
                        className="search-button flex-row-center-center"><ImSearch color="var(--color-search-box-button-text)"/></button>
                </div>
            </div>
        </>
    )
}