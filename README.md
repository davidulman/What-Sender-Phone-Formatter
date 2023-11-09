# What-Sender-Phone-Formatter

This utility formats a list of phone numbers and saves them to a CSV file. Each phone number is stripped of non-numeric characters and placed into the 'Number' column of the CSV.

## Setup

Follow these steps to set up the formatter:

1. Ensure that you have Node.js installed on your system.
2. Clone this repository or download the project files to your local machine.
3. Navigate to the project directory in your terminal or command prompt.
4. Run `npm i` to install all dependencies, including `ts-node` and `typescript`.

## Usage

1. Place your list of phone numbers in a file named `phone_numbers.txt` in the project directory. Each phone number should be on its own line.
2. Run the script with the following command: `npx ts-node formatPhoneNumbers.ts`
3. The formatted phone numbers will be saved to `phone_numbers.csv` in the same directory.

## Notes

- The 'Value1' and 'Value2' columns in the output CSV are left blank by default. Modify the script if you need to populate these columns.
