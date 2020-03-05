import React, { useContext } from 'react'
import './App.css'

const colors = {
    blue: "#0d90e2",
    red: "#ea172e",
}

const ColorContext = React.createContext(colors.blue)

const App = () => {
    return (
        <ColorContext.Provider value={colors}>
            <div className="App">
                <header className="App-header">
                    <a href="https://bcode.dev">Bcode.dev</a>
                    <p style={ {color:colors.blue} }><b>Hooks API</b> in samples.</p>

                    <MyComponent />
                </header>
            </div>
        </ColorContext.Provider>
    )
}

// Independent component
const MyComponent = () => {
    const colors = useContext(ColorContext);
    return <div style={{ color: colors.red }}>My independent Component</div>;
}

export default App
