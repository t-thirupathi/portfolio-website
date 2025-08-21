import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thirupathi Thangavel",
  description: "Thirupathi Thangavel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NavBar />
          <main style={{ padding: "2rem" }}>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
