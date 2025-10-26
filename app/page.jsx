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
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center text-gray-700 py-4 px-4"
      style={{ backgroundImage: "url(pixel-bg.png)" }}
    >
      {/* Contenedor principal centrado */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center relative z-10">
        {/* Logo PEQUEÑO y compacto */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative w-16 h-16 mb-2">
            <img
              src="logo.png"
              alt="Ani Shop"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-pink-700 text-center">
            Ani Shop
          </h1>
          <p className="text-pink-500 text-xs sm:text-sm mt-1 text-center">
            Calculadora de Ganancias 💖
          </p>
        </div>

        {/* Tarjeta de calculadora */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl py-6 px-4 sm:py-8 sm:px-8 w-full border-4 border-pink-200">
          <h2 className="text-base sm:text-lg font-bold text-center text-pink-600 mb-5">
            Calculadora kawaii
          </h2>

          <form className="space-y-4" onSubmit={calcular} autoComplete="off">
            <label className="block">
              <span className="text-xs sm:text-sm font-semibold text-pink-600 block mb-2">
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
              <span className="text-xs sm:text-sm font-semibold text-pink-600 block mb-2">
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

            {/* Selector de modo */}
            <div className="bg-pink-50 p-3 rounded-2xl border-2 border-pink-200">
              <p className="text-xs sm:text-sm font-semibold text-pink-600 mb-2 text-center">
                ¿Cómo quieres calcular?
              </p>
              <div className="flex gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => setModoCalculo("porcentaje")}
                  className={`flex-1 py-2 px-3 text-xs sm:text-sm rounded-full font-semibold transition-all ${
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
                  className={`flex-1 py-2 px-3 text-xs sm:text-sm rounded-full font-semibold transition-all ${
                    modoCalculo === "precio"
                      ? "bg-pink-400 text-white shadow-md"
                      : "bg-white text-pink-600 border-2 border-pink-300"
                  }`}
                >
                  💰 Precio
                </button>
              </div>

              {modoCalculo === "porcentaje" ? (
                <label className="block">
                  <span className="text-xs sm:text-sm font-semibold text-pink-600 block mb-2">
                    Porcentaje de ganancia (%)
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
              ) : (
                <label className="block">
                  <span className="text-xs sm:text-sm font-semibold text-pink-600 block mb-2">
                    Precio de venta deseado
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={precioVentaDeseado}
                    onChange={(e) => setPrecioVentaDeseado(e.target.value)}
                    className="kawaii-input w-full"
                    required
                  />
                </label>
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
            <div className="mt-6 bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-2xl border-2 border-pink-300">
              <h3 className="text-sm sm:text-base font-bold text-center text-pink-700 mb-4">
                📊 Resultados
              </h3>

              <div className="space-y-3">
                <div className="bg-white/90 p-3 rounded-xl">
                  <p className="text-pink-600 font-semibold text-xs mb-1 text-center">
                    Costo unitario
                  </p>
                  <p className="text-xs text-pink-500 italic mb-1 text-center">
                    ({monedaCL(valorCaja)}) ÷ ({cantidad})
                  </p>
                  <p className="text-base sm:text-lg font-bold text-pink-900 text-center">
                    {monedaCL(costoUnitario)}
                  </p>
                </div>

                <div className="bg-white/90 p-3 rounded-xl">
                  <p className="text-green-600 font-semibold text-xs mb-1 text-center">
                    Precio de venta
                  </p>
                  <p className="text-base sm:text-lg font-bold text-green-900 text-center">
                    {monedaCL(precioVenta)}
                  </p>
                  {modoCalculo === "precio" && (
                    <p className="text-xs text-green-600 mt-1 text-center">
                      ({porcentajeCalculado.toFixed(1)}% de ganancia)
                    </p>
                  )}
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl border-2 border-purple-300">
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
