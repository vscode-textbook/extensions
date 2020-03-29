"use strict";

const SPACE = ' ';
const LINEBREAK = '\n';
const DASH = '-';
const VERTICALBAR = '|';

export function makeMarkdownTable(colnum:number, rownum:number): string {
  let table: string = '',
    header: string ='',
    rows: Array<string> = [],
    rowindex: number=0,
    colindex: number=0;   

  if (rownum < 1 || colnum < 1) {
    return table;
  }
  // Create Header
  header = VERTICALBAR;
  while ( colindex++ < colnum ){
    header += `${SPACE}Heading${SPACE}${VERTICALBAR}`;
  }
  colindex = 0;
  header += LINEBREAK;
  header += VERTICALBAR;
  while ( colindex++ < colnum ){
    header += `${SPACE}-------${SPACE}${VERTICALBAR}`;
  }
  // Create Body
  let row:string ='';
  while ( rowindex++ < rownum ){
    row ='';
    colindex = 0;
    row += VERTICALBAR;
    while ( colindex++ < colnum ){
      row += `${SPACE}Content${SPACE}${VERTICALBAR}`;
    }
    rows.push(row);
  }
  // Combine Header + Body
  table = header + LINEBREAK + rows.join(LINEBREAK);
  return table;
}
