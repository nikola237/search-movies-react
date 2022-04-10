import { useState, useEffect } from "react"

const useDebounce = (value, delay) => {
    const [dbValue, setDbValue] = useState('')


    useEffect(() => {
        const timer = setTimeout(() => {
            setDbValue(value)
        }, delay || 500)

        return () => clearTimeout(timer)
    }, [value, delay])
    
    return dbValue
}

export default useDebounce