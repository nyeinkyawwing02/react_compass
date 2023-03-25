import React from "react"
import Child from './Child'

export default function Parent() {
    return (
        <>
            <h1 className="grid place-items-center my-5">Parent Component</h1>
            <Child />
        </>
    )
}
