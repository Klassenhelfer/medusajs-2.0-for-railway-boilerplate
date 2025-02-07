export default async function Footer() {
  return (
      <footer className="w-full py-5 bg-[#f6faff]">
          <nav className="content-small-container flex flex-col items-center lg:flex-row gap-4">
              <ul className="flex gap-4">
                  <li>
                      <a className="text-sm" href={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/datenschutz`}>Datenschutz</a>
                  </li>
                  <li>
                      <a className="text-sm" href={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/impressum`}>Impressum</a>
                  </li>
              </ul>
              <p className="flex-1 text-center lg:text-right text-sm">
                  © {new Date().getFullYear()} shop.klassenhelfer.de, Alle Rechte vorbehalten. Entwickelt von <span className="text-primary">Sebastian Claes</span>
              </p>
          </nav>
      </footer>
  )
}
