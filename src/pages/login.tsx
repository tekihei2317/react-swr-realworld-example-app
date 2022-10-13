import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login, UserCredentials } from '../api/auth-api'
import { FormErrors } from '../components/FormErrors'
import { useValidationErrors } from '../hooks/use-validation-error'

export const LoginPage = () => {
  const [form, setForm] = useState<UserCredentials>({
    email: '',
    password: '',
  })
  const { errors, setErrors } = useValidationErrors()
  const navigate = useNavigate()

  type ChangeEventHandler = (name: keyof UserCredentials) => React.ChangeEventHandler<HTMLInputElement>
  const handleChange: ChangeEventHandler = (name) => (event) => {
    setForm({ ...form, [name]: event.currentTarget.value })
    console.log(form)
  }

  type SubmitEventHandler = React.FormEventHandler<HTMLFormElement>
  const handleSubmit: SubmitEventHandler = async (event) => {
    event.preventDefault()

    const { error, status } = await login(form)
    if (status === 200) navigate('/')
    if (status === 422) setErrors(error.errors)
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            {/* TODO: バリデーションエラー */}
            <FormErrors errors={errors} />

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange('email')}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange('password')}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
