const dateSpanish = () => {
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const dias_semana = [
    "Domingo",
    "Lunes",
    "martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const fecha =
    dias_semana[hoy.getDay()] +
    ", " +
    hoy.getDate() +
    " de " +
    meses[hoy.getMonth()] +
    " de " +
    hoy.getUTCFullYear();
  return fecha;
};

const formatDate = (date) => {
  var d = new Date(date),
    hours = "" + d.getHours(),
    minu = "" + d.getMinutes();

  return [hours, minu].join(":");
};

export { dateSpanish, formatDate };
