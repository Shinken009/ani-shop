// Utilidad CLP
function monedaCL(v) {
  if (!isFinite(v)) return "";
  return Number(v).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0});
}

// Referencias
const form = document.getElementById('calculator-form');
const resetBtn = document.getElementById('reset-btn');
const resultados = document.getElementById('resultados');
const elCosto = document.getElementById('res-costo');
const elPrecio = document.getElementById('res-precio');
const elGanUni = document.getElementById('res-gan-uni');
const elGanTot = document.getElementById('res-gan-tot');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const cantidad = Number(document.getElementById('cantidad').value);
  const valorCaja = Number(document.getElementById('valorCaja').value);
  const porcentaje = Number(document.getElementById('porcentaje').value);
  if(!cantidad || cantidad <= 0 || valorCaja < 0 || porcentaje < 0) {
    alert("Por favor ingresa valores válidos y positivos.");
    return;
  }
  const costoUnitario = valorCaja / cantidad;
  const precioVenta = costoUnitario * (1 + porcentaje / 100);
  const gananciaUnidad = precioVenta - costoUnitario;
  const gananciaTotal = gananciaUnidad * cantidad;

  elCosto.textContent = monedaCL(costoUnitario);
  elPrecio.textContent = monedaCL(precioVenta);
  elGanUni.textContent = monedaCL(gananciaUnidad);
  elGanTot.textContent = monedaCL(gananciaTotal);

  resultados.style.display = '';
  resultados.scrollIntoView({behavior:'smooth', block:'center'});
});

resetBtn.addEventListener('click', function() {
  form.reset();
  resultados.style.display = 'none';
  document.getElementById('cantidad').focus();
});
