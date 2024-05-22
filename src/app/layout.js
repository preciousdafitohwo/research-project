import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chakra UI",
  description: "Research project into different use-cases for chakra UI components and how to implement them on your own project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header"><h1>Chakra UI Popover Components</h1></header>
        {children}
        <footer>Made by Connor & Precious &copy;2024</footer>
        </body>
    </html>
  );
}
