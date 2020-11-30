import React from 'react'
import {Link} from "react-router-dom";
export default function About() {
    return (
        <div>
            This is about Page
            <>
                    <Link to="/Home">Home </Link>
                    <Link exact to="/about">About </Link>
                </>

        </div>
    )
}
