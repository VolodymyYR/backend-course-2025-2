const { URL } = require('url');

// Константи для Варіанту 4
const currency = 'EUR';
const exact_date = '10.09.2024';

// Створення URL з одразу доданими параметрами
const apiUrl = new URL('https://bank.gov.ua/NBU_ovdp');
apiUrl.searchParams.set('valcode', currency);
apiUrl.searchParams.set('date', exact_date);
apiUrl.searchParams.set('json', '');

// Виведення результату
console.log('URL для запиту до НБУ:');
console.log(apiUrl.href);""