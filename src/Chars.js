import React from "react"
import Character from "./Character";
import Data from "./Data";

const allData = Data.map((val) => {
    return (
        <Character
            image={val.img}
            name={val.name}
            status={val.status}
            birthday={val.birthday}
            key={val.char_id} />
    )
})


function Chars() {
    return (
        <>
            <div className="body">
                <div className="heading">
                    <h1>Breaking Bad Character's</h1>
                </div>
                <div className="content">
                    {allData}
                </div>
            </div>
        </>
    )
}

export default Chars;