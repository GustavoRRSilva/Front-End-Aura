
import "./globals.css";

import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <title>Aura</title>
      <link rel="icon" href="/favicon.ico"type="image/x-icon"/>
      <body>
       {children}
      </body>
    </html>
  );
}