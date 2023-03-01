import { useEffect, useState } from "react"

const Time = () => {
    const [message, setMessage] = useState<string>("")

    useEffect(() => {
        setTimeout(() => {
            setMessage("Mensaje devuelto después de 5 segundos")
        }, 5000)
    }, [])

    return <div>{message} otro mensaje</div>
}

export default Time
