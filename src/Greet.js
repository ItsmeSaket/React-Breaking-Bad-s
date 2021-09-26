import React from 'react'

let greet
const newDate = new Date().getHours()
let grtClr


if (newDate >= 3 && newDate < 12) {
    greet = "Good Morning"
    grtClr = { color: "green" }
}
else if (newDate >= 12 && newDate < 17) {
    greet = "Good Afternoon"
    grtClr = { color: "orange" }
}
else if (newDate >= 17 && newDate < 20) {
    greet = "Good Evening"
    grtClr = { color: "yellow" }
}
else {
    greet = "Good Night"
    grtClr = { color: "black" }
}

export default function Body() {
    return (
        <>
            <div className="container1">
                <h1>Hello sir, <span style={grtClr}>{greet}</span></h1>
            </div>
        </>
    )
}
