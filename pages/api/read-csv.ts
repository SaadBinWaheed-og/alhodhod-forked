import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export interface CsvRow {
  id: string;
  lettre: string;
  mot: string;
  enonce: string;
  interp: string;
  regle: string;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { attribute } = req.query;
    const filePath = path.resolve('public/csvs/glir_db_eng.csv');

    const csvData: CsvRow[] = [];
    
    fs.createReadStream(filePath)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        csvData.push(row);
      })
      .on('end', () => {
        const groupedData = groupDataByAttribute(csvData, attribute as keyof CsvRow);

        res.status(200).json({ data: groupedData });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

function groupDataByAttribute(data: CsvRow[], attribute: keyof CsvRow) {
  const groupedData: { [key: string]: CsvRow[] } = {};

  data.forEach((row) => {
    const value = row[attribute];
    if (!groupedData[value]) {
      groupedData[value] = [];
    }
    groupedData[value].push(row);
  });

  return groupedData;
}
