import "../index.css";

export const metadata = {
  title: "Het Kikani — Systems & Ideas",
  description: "Developer & Author Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
