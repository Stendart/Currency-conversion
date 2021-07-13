export async function getCurrencyList () {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  console.log('inside', data)
  return data;
}
