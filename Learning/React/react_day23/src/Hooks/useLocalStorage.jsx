import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
  const [name, setName] = useState(() => {
    try {
      const item = JSON.parse(localStorage.getItem(key))
      return item ? item : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const handleChange = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(name))
    } catch (error) {
      console.log(error)
    }
  }, [key, name])

  return { name, handleChange }
}

export default useLocalStorage