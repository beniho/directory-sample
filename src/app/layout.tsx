import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Todoアプリ",
  description: "シンプルなTodoアプリケーション",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
