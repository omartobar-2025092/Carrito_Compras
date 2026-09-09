export function obtenerIcono(nombre: string): string {
  const texto = nombre.toLowerCase();

  if (texto.includes('teclado')) return '⌨️';
  if (texto.includes('mouse') && texto.includes('pad')) return '🟪';
  if (texto.includes('mouse')) return '🖱️';
  if (texto.includes('audífono') || texto.includes('audifono') || texto.includes('headset')) return '🎧';
  if (texto.includes('monitor') || texto.includes('pantalla')) return '🖥️';
  if (texto.includes('silla')) return '🪑';
  if (texto.includes('cámara') || texto.includes('camara') || texto.includes('webcam')) return '📷';
  if (texto.includes('micrófono') || texto.includes('microfono')) return '🎙️';

  return '🛒';
}
