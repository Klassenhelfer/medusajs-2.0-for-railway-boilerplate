import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Bei Klassenhelfer anmelden",
  description: "Melden Sie sich bei Ihrem Klassenhelfer Shop Benutzerkonto an.",
}

export default function Login() {
  return <LoginTemplate />
}
