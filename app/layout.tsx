import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 🔴 AQUÍ ESTÁ LA CORRECCIÓN: Importamos FolderLayout desde el archivo FolderLayout
import FolderLayout from "@/components/FolderLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CámbiAlo | Agencia Creativa",
  description: "Hacemos realidad tus proyectos.",
};

// Nota: Quité LayoutProps<"/"> porque a veces da problemas de tipos en Next 15 si no está bien configurado, 
// usar { children: React.ReactNode } es la forma estándar y más segura.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FolderLayout>{children}</FolderLayout>
      </body>
    </html>
  );
}