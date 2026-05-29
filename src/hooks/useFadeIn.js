import { useEffect, useRef, useState } from "react"

const useFadeIn = (delay = 0) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return { ref, visible }
}

export default useFadeIn