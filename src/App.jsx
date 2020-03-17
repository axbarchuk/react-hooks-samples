import React, { useRef } from 'react'
import './App.css'
import image1 from './images/emptyLike.png'
import image2 from './images/like.png'

const App = () => {
    return (
        <div className="App">
                <a href="https://bcode.dev">Bcode.dev</a>
                <p><b>Hooks API</b> in samples.</p>

                <LikeComponent />
        </div>
    )
}

const LikeComponent = () => {
    const imageRef = useRef(null)
    return <img
        src={image1}
        ref={imageRef}
        width={50}
        onClick={() => imageRef.current.src = image2}
    />
}

export default App
