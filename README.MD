# Xslt transformation

xslt transformation is a library for transformation of xml string or xml in base64 to xslt encoded.

## Installation

Use the package manager NPM.

```bash
npm install

or using yarn

yarn install
```

## Usage

```bash
npm run test

or

yarn test
```

```javascript
import { getStringOriginal } from ".";
import { xmlString } from "./constant/xmlString";

//Example for xml string
getStringOriginal(xmlString).then((data) => console.log(`XML STRING: ${data}`));

//Example for xml string base64
getStringOriginal(xmlString, true).then((data) =>
  console.log(`BASE64: ${data}`)
);
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

Author: Matías Capuano
