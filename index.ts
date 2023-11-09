import * as fs from 'fs';
import * as readline from 'readline';

const formatPhoneNumbersToCSV = async () => {
  const fileStream = fs.createReadStream('phone_numbers.txt');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const csvFileStream = fs.createWriteStream('phone_numbers.csv');
  csvFileStream.write('Number,Value1,Value2\r\n');

  for await (const line of rl) {
    const formattedNumber = line.replace(/[^\d]/g, '');
    csvFileStream.write(`${formattedNumber},,\r\n`);
  }

  csvFileStream.on('finish', () => {
    console.log('Formatted phone numbers have been saved to phone_numbers.csv');
  });

  csvFileStream.end();
};

formatPhoneNumbersToCSV();
