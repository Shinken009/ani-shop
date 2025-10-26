"use client";
import { useState } from "react";

export default function Home() {
  const [cantidad, setCantidad] = useState("");
  const [valorCaja, setValorCaja] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [precioVentaDeseado, setPrecioVentaDeseado] = useState("");
  const [modoCalculo, setModoCalculo] = useState("porcentaje");
  const [costoUnitario, setCostoUnitario] = useState(null);
  const [precioVenta, setPrecioVenta] = useState(null);
  const [gananciaTotal, setGananciaTotal] = useState(null);
  const [porcentajeCalculado, setPorcentajeCalculado] = useState(null);

  const calcular = (e) => {
    e.preventDefault();
    if (!cantidad || !valorCaja) return;
    const cantidadNum = Number(cantidad);
    const valorCajaNum = Number(valorCaja);

    if (
      cantidadNum <= 0 ||
      valorCajaNum < 0 ||
      isNaN(cantidadNum) ||
      isNaN(valorCajaNum)
    ) {
      alert("Ingresa valores válidos y positivos.");
      return;
    }

    const costo = valorCajaNum / cantidadNum;
    let venta;
    let porcentajeCalc;

    if (modoCalculo === "porcentaje") {
      const porcentajeNum = Number(porcentaje);
      if (porcentajeNum < 0 || isNaN(porcentajeNum)) {
        alert("Ingresa un porcentaje válido.");
        return;
      }
      venta = costo * (1 + porcentajeNum / 100);
      porcentajeCalc = porcentajeNum;
    } else {
      const precioDeseadoNum = Number(precioVentaDeseado);
      if (precioDeseadoNum < costo || isNaN(precioDeseadoNum)) {
        alert("El precio de venta debe ser mayor al costo unitario.");
        return;
      }
      venta = precioDeseadoNum;
      porcentajeCalc = ((venta - costo) / costo) * 100;
    }

    const gananciaPorUnidad = venta - costo;
    const gananciaTotalCalc = gananciaPorUnidad * cantidadNum;

    setCostoUnitario(costo);
    setPrecioVenta(venta);
    setGananciaTotal(gananciaTotalCalc);
    setPorcentajeCalculado(porcentajeCalc);
  };

  const resetear = () => {
    setCantidad("");
    setValorCaja("");
    setPorcentaje("");
    setPrecioVentaDeseado("");
    setCostoUnitario(null);
    setPrecioVenta(null);
    setGananciaTotal(null);
    setPorcentajeCalculado(null);
  };

  const monedaCL = (v) =>
    Number(v).toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    });

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center text-gray-700 py-4 px-3 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF9F3 0%, #FFE5F1 50%, #E5F4FF 100%)",
      }}
    >
      {/* Fondo mejorado con elementos decorativos */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute top-10 left-5 w-20 h-20 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-12 w-28 h-28 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-8 w-24 h-24 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>

      {/* Emojis flotantes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        <div className="absolute top-10 left-10 text-4xl sm:text-6xl animate-bounce">
          ⭐
        </div>
        <div className="absolute top-20 right-20 text-3xl sm:text-5xl animate-pulse">
          💖
        </div>
        <div className="absolute bottom-20 left-20 text-3xl sm:text-5xl animate-bounce delay-100">
          🌸
        </div>
        <div className="absolute bottom-10 right-10 text-4xl sm:text-6xl animate-pulse delay-200">
          ✨
        </div>
      </div>

      {/* Contenedor principal centrado */}
      <div className="w-full max-w-lg mx-auto flex flex-col items-center relative z-10">
        {/* Logo compacto SIN texto duplicado */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2">
            <img
              src="logo.png"
              alt="Ani Shop"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <p className="text-pink-500 text-xs sm:text-sm text-center font-medium">
            Calculadora de Ganancias 💖
          </p>
        </div>

        {/* Tarjeta de calculadora */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl py-5 px-4 sm:py-7 sm:px-6 w-full border-3 border-pink-200">
          <h2 className="text-base sm:text-lg font-bold text-center text-pink-600 mb-4">
            Calculadora kawaii
          </h2>

          <form className="space-y-4" onSubmit={calcular} autoComplete="off">
            {/* Input cantidad - ALINEADO */}
            <div className="w-full">
              <label className="flex items-center gap-2 mb-2">
                <span className="text-lg">🎁</span>
                <span className="text-xs sm:text-sm font-semibold text-pink-600">
                  Cantidad de productos en la caja
                </span>
              </label>
              <input
                type="number"
                min="1"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                className="kawaii-input w-full block"
                required
              />
            </div>

            {/* Input valor caja - ALINEADO */}
            <div className="w-full">
              <label className="flex items-center gap-2 mb-2">
                <span className="text-lg">💵</span>
                <span className="text-xs sm:text-sm font-semibold text-pink-600">
                  Valor total de la caja
                </span>
              </label>
              <input
                type="number"
                min="0"
                value={valorCaja}
                onChange={(e) => setValorCaja(e.target.value)}
                className="kawaii-input w-full block"
                required
              />
            </div>

            {/* Selector de modo */}
            <div className="bg-pink-50 p-3 rounded-2xl border-2 border-pink-200">
              <p className="text-xs sm:text-sm font-semibold text-pink-600 mb-2 text-center">
                ¿Cómo quieres calcular?
              </p>
              <div className="flex gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => setModoCalculo("porcentaje")}
                  className={`flex-1 py-2 px-2 text-xs sm:text-sm rounded-full font-semibold transition-all ${
                    modoCalculo === "porcentaje"
                      ? "bg-pink-400 text-white shadow-md"
                      : "bg-white text-pink-600 border-2 border-pink-300"
                  }`}
                >
                  📈 Porcentaje
                </button>
                <button
                  type="button"
                  onClick={() => setModoCalculo("precio")}
                  className={`flex-1 py-2 px-2 text-xs sm:text-sm rounded-full font-semibold transition-all ${
                    modoCalculo === "precio"
                      ? "bg-pink-400 text-white shadow-md"
                      : "bg-white text-pink-600 border-2 border-pink-300"
                  }`}
                >
                  💰 Precio
                </button>
              </div>

              {modoCalculo === "porcentaje" ? (
                <div className="w-full">
                  <label className="block mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-pink-600">
                      Porcentaje de ganancia (%)
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={porcentaje}
                    onChange={(e) => setPorcentaje(e.target.value)}
                    className="kawaii-input w-full block"
                    required
                  />
                </div>
              ) : (
                <div className="w-full">
                  <label className="block mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-pink-600">
                      Precio de venta deseado
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={precioVentaDeseado}
                    onChange={(e) => setPrecioVentaDeseado(e.target.value)}
                    className="kawaii-input w-full block"
                    required
                  />
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-5">
              <button
                type="submit"
                className="flex-1 bg-pink-400 hover:bg-pink-500 text-white font-bold py-2.5 px-4 text-sm rounded-full shadow-lg transition-all"
              >
                Calcular 🧮
              </button>
              <button
                type="button"
                onClick={resetear}
                className="flex-1 bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2.5 px-4 text-sm rounded-full shadow-lg transition-all"
              >
                Limpiar 🔄
              </button>
            </div>
          </form>

          {costoUnitario !== null && (
            <div className="mt-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 rounded-2xl border-2 border-pink-300">
              <h3 className="text-sm sm:text-base font-bold text-center text-pink-700 mb-4">
                📊 Resultados
              </h3>

              <div className="space-y-3">
                <div className="bg-white/90 p-3 rounded-xl shadow-sm">
                  <p className="text-pink-600 font-semibold text-xs mb-1 text-center">
                    Costo unitario
                  </p>
                  <p className="text-base sm:text-lg font-bold text-pink-900 text-center">
                    {monedaCL(costoUnitario)}
                  </p>
                </div>

                <div className="bg-white/90 p-3 rounded-xl shadow-sm">
                  <p className="text-green-600 font-semibold text-xs mb-1 text-center">
                    Precio de venta
                  </p>
                  <p className="text-base sm:text-lg font-bold text-green-900 text-center">
                    {monedaCL(precioVenta)}
                  </p>
                  {modoCalculo === "precio" && (
                    <p className="text-xs text-green-600 mt-1 text-center">
                      ({porcentajeCalculado.toFixed(1)}% ganancia)
                    </p>
                  )}
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl border-2 border-purple-300 shadow-sm">
                  <p className="text-purple-600 font-semibold text-xs mb-1 text-center">
                    Ganancia total
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-purple-900 text-center">
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
