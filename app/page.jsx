"use client";
import { useState } from "react";

export default function Home() {
  const [cantidad, setCantidad] = useState("");
  const [valorCaja, setValorCaja] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [costoUnitario, setCostoUnitario] = useState(null);
  const [precioVenta, setPrecioVenta] = useState(null);
  const [gananciaTotal, setGananciaTotal] = useState(null);

  const calcular = (e) => {
    e.preventDefault();
    if (!cantidad || !valorCaja) return;
    const cantidadNum = Number(cantidad);
    const valorCajaNum = Number(valorCaja);
    const porcentajeNum = Number(porcentaje);
    if (
      cantidadNum <= 0 ||
      valorCajaNum < 0 ||
      porcentajeNum < 0 ||
      isNaN(cantidadNum) ||
      isNaN(valorCajaNum) ||
      isNaN(porcentajeNum)
    ) {
      alert("Ingresa valores válidos y positivos.");
      return;
    }
    const costo = valorCajaNum / cantidadNum;
    const venta = costo * (1 + porcentajeNum / 100);
    const gananciaPorUnidad = venta - costo;
    const gananciaTotalCalc = gananciaPorUnidad * cantidadNum;
    setCostoUnitario(costo);
    setPrecioVenta(venta);
    setGananciaTotal(gananciaTotalCalc);
  };

  const resetear = () => {
    setCantidad("");
    setValorCaja("");
    setPorcentaje("");
    setCostoUnitario(null);
    setPrecioVenta(null);
    setGananciaTotal(null);
  };

  const monedaCL = (v) =>
    Number(v).toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    });

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center text-gray-700 py-8 px-4"
      style={{ backgroundImage: "url(pixel-bg.png)" }}
    >
      {/* Contenedor principal centrado */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Logo y título centrados */}
        <div className="flex flex-col items-center mb-6">
          <div
            className="rounded-full bg-pink-100 flex items-center justify-center shadow-lg mb-3"
            style={{ width: "80px", height: "80px" }}
          >
            <svg
              viewBox="0 0 72 72"
              width={52}
              height={52}
              fill="none"
              aria-label="Logo Estrella Kawaii Ani Shop"
            >
              <circle
                cx="36"
                cy="36"
                r="34"
                fill="#fbcfe8"
                stroke="#f472b6"
                strokeWidth="4"
              />
              <polygon
                points="36,15 41,32 59,32 44,42 49,59 36,50 23,59 28,42 13,32 31,32"
                fill="#fde68a"
                stroke="#fbbf24"
                strokeWidth="2"
              />
              <ellipse cx="25" cy="41" rx="4" ry="2.7" fill="#fff" />
              <ellipse cx="47" cy="41" rx="4" ry="2.7" fill="#fff" />
              <circle cx="26" cy="41" r="1.3" fill="#be185d" />
              <circle cx="46" cy="41" r="1.3" fill="#be185d" />
              <ellipse
                cx="36"
                cy="48"
                rx="8"
                ry="4"
                fill="#fbbf24"
                opacity="0.18"
              />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 drop-shadow-md text-center kawaii-font">
            Ani Shop
          </h1>
          <p className="text-pink-500 text-sm sm:text-base mt-2 text-center">
            Calculadora de Ganancias 💖
          </p>
        </div>

        {/* Tarjeta de calculadora centrada */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl shadow-2xl py-8 px-6 sm:px-8 md:px-10 w-full border-4 border-pink-200">
          <h2 className="text-xl font-bold text-center text-pink-600 mb-6">
            Calculadora kawaii
          </h2>
          <form className="space-y-6" onSubmit={calcular} autoComplete="off">
            <label className="block">
              <span className="text-sm font-semibold text-pink-600 block mb-2">
                🎁 Cantidad de productos en la caja
              </span>
              <input
                type="number"
                min="1"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                className="kawaii-input w-full"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-pink-600 block mb-2">
                💵 Valor total de la caja
              </span>
              <input
                type="number"
                min="0"
                value={valorCaja}
                onChange={(e) => setValorCaja(e.target.value)}
                className="kawaii-input w-full"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-pink-600 block mb-2">
                📈 Porcentaje de ganancia deseado (%)
              </span>
              <input
                type="number"
                min="0"
                value={porcentaje}
                onChange={(e) => setPorcentaje(e.target.value)}
                className="kawaii-input w-full"
                required
              />
            </label>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button
                type="submit"
                className="kawaii-btn flex-1 bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all"
              >
                Calcular 🧮
              </button>
              <button
                type="button"
                onClick={resetear}
                className="kawaii-btn flex-1 bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition-all"
              >
                Limpiar 🔄
              </button>
            </div>
          </form>

          {costoUnitario !== null && (
            <div className="mt-8 bg-gradient-to-br from-pink-50 to-purple-50 p-6 sm:p-8 rounded-2xl border-2 border-pink-300 shadow-inner">
              <h3 className="text-lg font-bold text-center text-pink-700 mb-6">
                📊 Resultados
              </h3>

              <div className="space-y-5">
                <div className="bg-white/80 p-4 rounded-xl">
                  <p className="text-pink-600 font-semibold text-sm mb-2 text-center">
                    Costo unitario =
                  </p>
                  <p className="text-xs text-pink-500 italic mb-2 text-center">
                    ({monedaCL(valorCaja)}) dividido por ({cantidad})
                  </p>
                  <p className="text-xl font-bold text-pink-900 text-center">
                    {monedaCL(costoUnitario)}
                  </p>
                </div>

                <div className="bg-white/80 p-4 rounded-xl">
                  <p className="text-green-600 font-semibold text-sm mb-2 text-center">
                    Precio de venta sugerido =
                  </p>
                  <p className="text-xs text-green-500 italic mb-2 text-center">
                    ({monedaCL(costoUnitario)}) multiplicado por (1 más{" "}
                    {porcentaje} dividido por 100)
                  </p>
                  <p className="text-xl font-bold text-green-900 text-center">
                    {monedaCL(precioVenta)}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-xl border-2 border-purple-300">
                  <p className="text-purple-600 font-semibold text-sm mb-2 text-center">
                    Ganancia total =
                  </p>
                  <p className="text-xs text-purple-500 italic mb-2 text-center">
                    ({monedaCL(precioVenta)} menos {monedaCL(costoUnitario)})
                    multiplicado por ({cantidad})
                  </p>
                  <p className="text-2xl font-bold text-purple-900 text-center">
                    {monedaCL(gananciaTotal)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
