/**
 * Calcula la categoría de un juego basado en su puntuación de Metacritic.
 * @param {number} score - Puntuación de Metacritic del juego (0-100).
 * @returns {string} - Devuelve la categoría correspondiente a la puntuación dada. 
 * Si la puntuación es inválida, devuelve un mensaje de error o 'N/A' si no se proporciona una puntuación.
 */
function getMetacriticTier(score) {
  if (score === null || score === undefined) return 'N/A';
  if (typeof score !== 'number') return 'Invalid Score';
  if (score < 0 || score > 100) return 'Out of Range';

  if (score >= 95) return 'Obra Maestra';
  if (score >= 90) return 'Sobresaliente';
  if (score >= 80) return 'Notable Alto';
  if (score >= 70) return 'Notable';
  if (score >= 60) return 'Bien';
  if (score >= 50) return 'Suficiente';
  return 'Not Recommended';
}

module.exports = {
  getMetacriticTier
};