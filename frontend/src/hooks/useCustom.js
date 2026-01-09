// Custom Hooks for ReClaim Pro

import { useState, useEffect } from 'react'

/**
 * Custom hook for fetching data
 * @param {string} url - URL to fetch from
 * @returns {Object} - {data, loading, error}
 */
export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

/**
 * Custom hook for form handling
 * @param {Function} onSubmit - Callback function when form is submitted
 * @returns {Object} - {values, handleChange, handleSubmit, reset}
 */
export function useForm(onSubmit) {
  const [values, setValues] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(values)
  }

  const reset = () => {
    setValues({})
  }

  return { values, handleChange, handleSubmit, reset }
}

/**
 * Custom hook for local storage
 * @param {string} key - Key in local storage
 * @param {any} initialValue - Initial value if key doesn't exist
 * @returns {Array} - [storedValue, setStoredValue]
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

export default {
  useFetch,
  useForm,
  useLocalStorage,
}
