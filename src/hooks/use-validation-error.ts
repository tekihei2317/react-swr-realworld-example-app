import { useState } from 'react'

export type ValidationErrors = {
  [key: string]: string[]
}

export function useValidationErrors() {
  const [errors, setErrors] = useState<ValidationErrors>()

  return { errors, setErrors }
}
