import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
    metadataBase: new URL(getBaseURL()),
    title: "Klassenhelfer Shop",
    icons: {
        icon: [
            { rel: "icon", type: "image/png", url: "/images/favicon-96x96.png", sizes: "96x96" },
            { rel: "icon", type: "image/svg+xml", url: "/images/favicon.svg" },
            { rel: "shortcut icon", url: "/images/favicon.ico" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
