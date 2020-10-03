import * as path from "path";
import * as fs from "mz/fs";
// @ts-ignore
import { xmlParse, xsltProcess } from "xslt-processor";

/**
 * @param xmlString = Xml string or xml encoded in base64
 * @param base64 = boolean
 */
export const getStringOriginal = async (
  xmlString: string,
  base64: boolean = false
): Promise<string> => {
  const xsltString = await fs.readFile(
    path.join(__dirname, "resources", "cadena_original.xslt"),
    "utf8"
  );

  if (base64) {
    const buffer = Buffer.from(xmlString, "base64");
    xmlString = buffer.toString("ascii");
  }

  const xml = xmlParse(xmlString);
  const xslt = xmlParse(xsltString);

  return xsltProcess(xml, xslt);
};
