export const metadata = {
  title: "Ani Shop",
  description: "Tienda de Anita Sol, calculadora kawaii para emprendimiento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
