import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <header className="App-header">
                <a href="https://bcode.dev">Bcode.dev</a>
                <p><b>Hooks API</b> in samples.</p>

                <h1>{ count }</h1>

                <button onClick={() => setCount(count + 1)}>Click here</button>
            </header>
        </div>
    )
}

export default App
