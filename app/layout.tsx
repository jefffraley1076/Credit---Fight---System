import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Credit Fight System",
  description:
    "The consumer law based credit repair system designed to delete negative items, force compliance, and legally make the bureaus pay YOU.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
