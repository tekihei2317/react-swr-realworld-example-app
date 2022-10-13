import { ValidationErrors } from '../hooks/use-validation-error'

export const FormErrors = ({ errors }: { errors?: ValidationErrors }) => {
  if (!errors) return <></>

  return (
    <ul className="error-messages">
      {Object.entries(errors).map(([key, messages]) =>
        messages.map((message, index) => <li key={`${key}-${index}`}>{message}</li>)
      )}
    </ul>
  )
}
