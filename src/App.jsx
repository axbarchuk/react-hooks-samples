import React, {useState, useEffect} from 'react'
import './App.css'

const App = () => {
    const [value, setValue] = useState("")
    const [result, setResult] = useState("Wrong")

    useEffect(
        () => setResult(value === "hello" ? "Correct" : "Wrong"),
        [value]
    )

    return (
        <div className="App">
            <header className="App-header">
                <a href="https://bcode.dev">Bcode.dev</a>
                <p><b>Hooks API</b> in samples.</p>

                <span>Enter "hello" to see the result.</span>
                <input
                    value={value}
                    onChange={(event) => setValue(event.target.value.toLowerCase())}
                />
                <p>Result: <b>{result}</b></p>
            </header>
        </div>
    )
}

export default App
