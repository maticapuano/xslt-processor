import { getStringOriginal } from "../";
import { xmlString, xmlStringBase64 } from "../constant/xmlString";

const expectedData = `|||||3.3|1234|2018-06-03T16:16:36|02|1234567890|25862.07|MXN|1|30000.00|I|PUE|83240|ASS010101A12|Aligator Service, SAPI|601|DCS030303W09|Defenseless Canary, S.A. de C.V.|G03|43211508|DELL123|3|EA|Laptop DELL XPS 13|8620.689655|25862.07|25862.07|002|Tasa|0.160000|4137.93|0.00|002|Tasa|0.160000|4137.93|4137.93||`;

describe("getStringOriginal", () => {
  it("Return a processed a original string format string", async () => {
    const stringXsl = await getStringOriginal(xmlString);

    expect(expectedData).toEqual(stringXsl);
  });
});
