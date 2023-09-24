'use strict';


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// ibra's solution
// for (const flight of flightsArr) {
//   let data = flight.split(';');
//   data[0] = data[0].replace(/_/g, ' ').trim();
//   data[1] = data[1].slice(0, 3).toUpperCase();
//   data[2] = data[2].slice(0, 3).toUpperCase();
//   data[3] = data[3].replace(':', 'h');

//   if (data[0].includes('Delayed')) {
//     data[0] = `🔴 ` + data[0];
//   }

//   console.log(`${data[0]} from ${data[1]} to ${data[2]} (${data[3]})`);
// }

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.replaceAll('_', ' ').trim().startsWith('Delayed') ? '🔴 ' : ''}${type.replaceAll('_', ' ').trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36, '.');

  console.log(output);
}






