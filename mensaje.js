const template = (dolar, euro, uf, utm) => {
  return `
  El valor del dolar el dia de hoy es: ${dolar}
  El valor del euro el dia de hoy es: ${euro}
  El valor de la uf el dia de hoy es: ${uf}
  El valor de la utm el dia de hoy es: ${utm}`;
};

module.exports = template;
