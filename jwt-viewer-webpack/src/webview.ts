export function getWebviewContent(token: string, header: any, payload: any) {
  let h = JSON.stringify(header,null, 4);   // Header: Algorithm and Token Type
  let p = JSON.stringify(payload, null, 4); // Payload: Data
  let elem: string[] = token.split(".",3);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline';">
  <title>JWT Debugger - Decoded</title>
</head>
<body>
  <h1>Decoded</h1>
  <h2>Your Token</h2>
  <div class="encodedString" style="word-wrap: break-word;">
  <span style="color:#fb015b;font-weight:bold">${elem[0]}</span><span style="color:black;font-weight:bold">.</span><span style="color:#d63aff;font-weight:bold">${elem[1]}</span><span style="color:black;font-weight:bold">.</span><span style="color:#00b9f1;font-weight:bold">${elem[2]}</span>
  </div>
  <h2>HEADER</h2>
  <pre style="color:#fb015b;font-weight: bold;">${h}</pre>
  <h2>PAYLOAD</h2>
  <pre style="color:#d63aff;font-weight: bold;">${p}</pre>
</body>
</html>`;
}
