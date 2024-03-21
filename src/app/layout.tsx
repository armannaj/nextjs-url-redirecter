import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs Url Redirecter",
  description: "Nextjs Url Redirecter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
