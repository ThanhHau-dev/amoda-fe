export const formatNumber = (amount, locale = 'vi-VN') =>{
try {
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 2, 
  }).format(amount);
} catch (error) {
  return amount;
}
}
 