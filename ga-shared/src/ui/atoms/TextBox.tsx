import React, { ReactElement } from "react"

export default function TextBox({ children }: any): ReactElement {
    return (
        <div style={{ backgroundColor: "#EEE" }}>{ children }</div>
    )
}
