export const metadata = {
  title: "Mi Proyecto",
  description: "Aplicación creada con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
