export default async function Footer() {
  return (
      <footer className="w-full py-5 bg-[#f6faff]">
        <p className="flex-1 text-center lg:text-center text-sm">
          © {new Date().getFullYear()} klassenhelfer.de, Alle Rechte vorbehalten. Entwickelt von <span className="text-primary">Sebastian Claes</span>
        </p>
      </footer>
  )
}
