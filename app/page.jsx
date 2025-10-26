"use client";
import { useState } from "react";

export default function AniShop() {
  const [products, setProducts] = useState([
    { quantity: "", value: "", percent: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const handleReset = () => {
    setProducts([{ quantity: "", value: "", percent: "" }]);
  };

  const addProduct = () => {
    setProducts([...products, { quantity: "", value: "", percent: "" }]);
  };

  const totalProfit = products.reduce((acc, p) => {
    const qty = parseFloat(p.quantity) || 0;
    const val = parseFloat(p.value) || 0;
    const perc = parseFloat(p.percent) || 0;
    const profit = qty * val * (perc / 100);
    return acc + profit;
  }, 0);

  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col items-center text-pink-700"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="flex flex-col items-center mt-6">
        <img
          src="/logo.png"
          alt="Ani Shop logo"
          className="w-32 h-auto drop-shadow-lg"
        />
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 mt-6 w-[90%] md:w-[600px] shadow-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-pink-600 drop-shadow-sm">
          Calculadora de Productos ✨
        </h1>

        {products.map((p, i) => {
          const qty = parseFloat(p.quantity) || 0;
          const val = parseFloat(p.value) || 0;
          const perc = parseFloat(p.percent) || 0;
          const costUnit = val;
          const gain = qty * val * (perc / 100);

          return (
            <div
              key={i}
              className="bg-pink-100 rounded-2xl p-4 mb-4 border-2 border-pink-200 shadow-inner"
            >
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Cantidad:</label>
                <input
                  type="number"
                  value={p.quantity}
                  onChange={(e) => handleChange(i, "quantity", e.target.value)}
                  className="kawaii-input"
                  placeholder="Ej: 10"
                />
                <label className="font-semibold">Valor del producto:</label>
                <input
                  type="number"
                  value={p.value}
                  onChange={(e) => handleChange(i, "value", e.target.value)}
                  className="kawaii-input"
                  placeholder="Ej: 5000"
                />
                <label className="font-semibold">
                  Porcentaje de ganancia (%):
                </label>
                <input
                  type="number"
                  value={p.percent}
                  onChange={(e) => handleChange(i, "percent", e.target.value)}
                  className="kawaii-input"
                  placeholder="Ej: 20"
                />
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-600">Costo unitario:</p>
                <p className="text-lg font-bold text-pink-600">
                  {costUnit.toLocaleString("es-CL")}
                </p>
                <p className="text-sm text-gray-600 mt-1">Ganancia total:</p>
                <p className="text-lg font-bold text-green-600">
                  ${gain.toLocaleString("es-CL")}
                </p>
              </div>
            </div>
          );
        })}

        <div className="flex justify-between mt-4">
          <button
            onClick={addProduct}
            className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md"
          >
            ➕ Agregar Producto
          </button>
          <button
            onClick={handleReset}
            className="bg-yellow-300 hover:bg-yellow-400 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md"
          >
            💫 Resetear
          </button>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-lg font-bold text-purple-600">
            🌟 Ganancia Total: ${totalProfit.toLocaleString("es-CL")}
          </h2>
        </div>
      </div>
    </main>
  );
}
