const triple = (num) => {
  if (num > 0) return "positivo";
  return "negativo";
};

$("#msg").html(triple(-12));
