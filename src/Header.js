import './Header.css';

import React from 'react';

function Header() {
    return (
        <div className = 'header'>
            <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
            <div className='header_search'>
             <input type = 'text'></input>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>hello motor</span>
                    <span className='header_optionLinetwo'>hello motor</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>hello motor</span>
                    <span className='header_optionLinetwo'>hello motor</span>
                </div>
                <div className='header_option'></div>
            </div>
        </div>
    )
}

export default Header
