import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Готовые рационы правильного питания. Ежедневная доставка по Сочи, Адлеру, Дагомысу",
  description: "правильное питание сочи, готовая еда для похудения",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
