const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  // currency: 'USD',
  currency: 'UAH',
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);
