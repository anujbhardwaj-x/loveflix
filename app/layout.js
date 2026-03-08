
import "./globals.css"
import CursorMagic from "../components/CursorMagic"

export const metadata = { title: "LoveFlix" }

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CursorMagic/>
        {children}
      </body>
    </html>
  )
}
