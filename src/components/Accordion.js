import React, {useState} from 'react'
import {Data} from './Data'
import {IconContext} from "react-icons";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

const Accordion = () => {
    const [clicked, setClicked] = useState(false)

    const toggleClicked = index => {
        if (clicked === index)  //if clicked question is already active, close it
            return setClicked(null)
        setClicked(index)
    }

    return (
        <IconContext.Provider value={{color: 'hsl(14, 88%, 65%)', size: '25px'}}>
            {Data.map((item, index) => {
                return (
                    <div className="item">
                        <div onClick={() => toggleClicked(index)} key={index} className="title">
                            <h2>{item.question}</h2>
                            <span>{clicked === index ? <FiChevronUp className="chevron"/> : <FiChevronDown className="chevron"/>}</span>
                        </div>
                        {clicked === index ? (
                            <div className="dropdown">
                                <p>{item.answer}</p>
                            </div>
                        ) : null}
                    </div>
                )
            })}
        </IconContext.Provider>
    )
}

export default Accordion