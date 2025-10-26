"use client";
import { useState } from "react";

export default function Home() {
  const [cantidad, setCantidad] = useState("");
  const [valorCaja, setValorCaja] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [costoUnitario, setCostoUnitario] = useState(null);
  const [precioVenta, setPrecioVenta] = useState(null);
  const [gananciaTotal, setGananciaTotal] = useState(null);

  const calcular = () => {
    if (!cantidad || !valorCaja) return;
    const costo = valorCaja / cantidad;
    const venta = costo * (1 + (porcentaje || 0) / 100);
    const gananciaPorUnidad = venta - costo;
    const gananciaTotalCalc = gananciaPorUnidad * cantidad;
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

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-gray-700 p-6"
      style={{ backgroundImage: "url('/pixel-bg.png')" }}
    >
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-8 w-full max-w-md border-4 border-pink-200">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/ani-logo.png"
            alt="Ani Shop Logo"
            className="w-32 mb-2 animate-bounce"
          />
          <h1 className="text-3xl font-extrabold text-pink-500 drop-shadow-md">
            Ani Shop
          </h1>
        </div>

        <h2 className="text-lg font-semibold text-center text-pink-600 mb-4">
          Calculadora de Productos 💖
        </h2>

        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-pink-500">
              Cantidad de productos:
            </span>
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="w-full mt-1 p-2 rounded-xl border-2 border-pink-300 bg-pink-50 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-pink-500">
              Costo total de la caja ($):
            </span>
            <input
              type="number"
              value={valorCaja}
              onChange={(e) => setValorCaja(e.target.value)}
              className="w-full mt-1 p-2 rounded-xl border-2 border-pink-300 bg-pink-50 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-pink-500">
              Porcentaje de ganancia (%):
            </span>
            <input
              type="number"
              value={porcentaje}
              onChange={(e) => setPorcentaje(e.target.value)}
              className="w-full mt-1 p-2 rounded-xl border-2 border-pink-300 bg-pink-50 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </label>

          <div className="flex justify-between mt-6">
            <button
              onClick={calcular}
              className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded-full shadow-md"
            >
              Calcular ✨
            </button>
            <button
              onClick={resetear}
              className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md"
            >
              Reset 🧸
            </button>
          </div>

          {costoUnitario !== null && (
            <div className="mt-6 bg-white/80 p-4 rounded-2xl text-center border-2 border-pink-200 shadow-inner">
              <p className="text-pink-600 font-semibold text-lg">
                💰 Costo unitario:{" "}
                <span className="font-bold text-pink-700">
                  ${costoUnitario.toFixed(2)}
                </span>
              </p>
              <p className="text-green-600 font-semibold text-lg">
                🛍️ Precio sugerido:{" "}
                <span className="font-bold text-green-700">
                  ${precioVenta.toFixed(2)}
                </span>
              </p>
              <p className="text-purple-600 font-semibold text-lg">
                🌈 Ganancia total:{" "}
                <span className="font-bold text-purple-700">
                  ${gananciaTotal.toFixed(2)}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
