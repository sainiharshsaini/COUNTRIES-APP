import { useState, useEffect } from "react";

export function useWindowSize() { // this is called Custom Hook
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        })
    }, [])

    return windowSize
}