export const metadata = {
  title: "Ani Shop",
  description: "Tienda de Anita Sol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
