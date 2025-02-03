import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { login } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(login, null)

  return (
    <div
      className="max-w-lg w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <h1 className="text-3xl md:text-5xl font-bold md:text-center text-slate-800 text-center mb-4">Willkommen zurück!</h1>
      <p className="text-xl font-medium text-gray-800 mb-6 text-center mb-12">
        Melden Sie sich für ein verbessertes Einkaufserlebnis an.
      </p>
      <form className="w-full max-w-sm" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="E-Mail"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="Passwort"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6">
          Anmelden
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Noch kein Mitglied?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
          data-testid="register-button"
        >
          Jetzt Registrieren
        </button>
        .
      </span>
    </div>
  )
}

export default Login
