export  function convertPriceToLocalCurrency(value) {
    return new Intl.NumberFormat("en-Ng", {
      style: "currency",
      currency: "NGN",
    }).format(value);
}

export function ClassDisabled(cond){
  const classDisabled = cond ? "" : "opacity-50 pointer-events-none";
  return {classDisabled}
}