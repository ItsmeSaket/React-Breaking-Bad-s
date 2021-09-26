import React from 'react';

export default function Characters(props) {
    return (
        <>
            <div className="characters">
                <div className="character">
                    <img src={props.image} alt="Walter White" />
                    <div className="charInfo">
                        <h3 className="charName"><u> {props.name} </u></h3>
                        <span className="status">Status - {props.status}</span>
                        <span className="birthday">Birthday - {props.birthday}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
