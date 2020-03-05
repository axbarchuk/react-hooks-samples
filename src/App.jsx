import React, {useReducer} from 'react'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <a href="https://bcode.dev">Bcode.dev</a>
                <p><b>Hooks API</b> in samples.</p>

                <MyCounter />
            </header>
        </div>
    )
}

const initialState = {count: 0}
const Action = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
}

const reducer = (state, action) => {
    switch (action.type) {
        case Action.INCREMENT:
            return {count: state.count + 1}
        case Action.DECREMENT:
            return {count: state.count - 1}
        default:
            throw new Error()
    }
}

const MyCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <p>Count: {state.count}</p>
            <div>
                <button onClick={() => dispatch({type: Action.DECREMENT})}>-</button>
                <button onClick={() => dispatch({type: Action.INCREMENT})}>+</button>
            </div>
        </>
    )
}


export default App
