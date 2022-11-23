export  function convertPriceToLocalCurrency(value) {
    return new Intl.NumberFormat("en-Ng", {
      style: "currency",
      currency: "NGN",
    }).format(value);
  }