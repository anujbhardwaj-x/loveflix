
import "./globals.css"
import Navbar from "../components/Navbar"

export const metadata = {
  title: "LoveFlix"
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
