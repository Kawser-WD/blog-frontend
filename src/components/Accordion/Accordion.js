import React, {useState} from 'react';
import './Accordion.css';
const Accordion = (props) => {
    const {question, answer} = props.item
    const [show, setShow] = useState(false)
    return (
        <div>
                        <div className='item'>
                        <div className='title'>
                            <h2>{question}</h2>
                            <p className='click' onClick={()=> setShow(!show)}>{show? '-' : '+'}</p>
                        </div>
                        <div>
                           { show &&  <p className='content'>{answer}</p> }
                        </div>
                    </div>
        </div>
    );
};

export default Accordion;