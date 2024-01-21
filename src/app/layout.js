import SmoothProvider from "@/providers/SmothProvider"

import { IBM_Plex_Mono, Noto_Sans } from "next/font/google"
import "@/styles/index.scss"

const IBM = IBM_Plex_Mono({ weight: '700', subsets: ["latin"], variable: '--font-ibm'})
const Noto = Noto_Sans({ subsets: ["latin"], variable: '--font-noto'})

export const metadata = {
  title: "Company Smoothism",
  description: "Smoothism: Artistic Web Design for Businesses,Crafting visually stunning and functional websites for artists and businesses. Our responsive designs, SEO optimization, and diverse portfolio ensure your online presence stands out. Explore custom solutions and ongoing support. Let's create something extraordinary together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothProvider>
        <body className={`${IBM.variable} ${Noto.variable}`}>
          {children}
        </body>
      </SmoothProvider>
    </html>
  );
}
