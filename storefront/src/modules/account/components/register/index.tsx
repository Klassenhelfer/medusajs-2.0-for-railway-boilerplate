"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signup, null)

  return (
    <div
      className="max-w-xl flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-3xl md:text-5xl font-bold md:text-center text-slate-800 text-center mb-4">Benutzerkonto erstellen</h1>
      <p className="text-xl font-medium text-gray-800 mb-6 text-center mb-12">
        Erstellen Sie Ihr Klassenhelfer Benutzerkonto und erhalten Sie Zugang zu einem verbesserten Einkaufserlebnis.
      </p>
      <form className="w-full max-w-sm flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Vorname"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Nachname"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="E-Mail"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="Telefonnummer"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label="Passwort"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Durch die Erstellung eines Kontos stimmen Sie Klassenhelfer&apos;s{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Datenschutzrichtlinie
          </LocalizedClientLink>{" "}
          und{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Nutzungsbedingungen zu
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">
          Konto erstellen
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Du hast schon ein Benutzerkonto?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Anmelden
        </button>
        .
      </span>
    </div>
  )
}

export default Register
