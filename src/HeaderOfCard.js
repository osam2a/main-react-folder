import React from 'react'

function HeaderOfCard(props) {
    return(<header>
        <div className="w-9 h-9 rounded-full inline-block overflow-hidden bg-gray-950">
        <img className="block w-full " src={props.first} alt="" />
        </div>
        </header>);
}