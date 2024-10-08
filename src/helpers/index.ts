export const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        currency: 'USD', style: 'currency'
    }).format(price);
}