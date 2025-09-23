const { URL } = require('url');

// Константи для Варіанту 4
const currency = 'EUR';
const exact_date = '20240910';

// Створення URL з одразу доданими параметрами
const apiUrl = new URL('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange');
apiUrl.searchParams.set('valcode', currency);
apiUrl.searchParams.set('date', exact_date);
apiUrl.searchParams.set('json', '');

// Виведення результату
console.log('URL для запиту до НБУ:');
console.log(apiUrl.href);""