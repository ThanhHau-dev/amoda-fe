const NAMED_ENTITIES = {
  nbsp: "\u00A0",
  amp: "&",
  quot: '"',
  apos: "'",
  lt: "<",
  gt: ">",
  copy: "\u00A9",
  reg: "\u00AE",
  trade: "\u2122",
  hellip: "\u2026",
  mdash: "\u2014",
  ndash: "\u2013",
  lsquo: "\u2018",
  rsquo: "\u2019",
  laquo: "\u00AB",
  raquo: "\u00BB",
};

const replaceEntity = (match, body) => {
  if (body[0] === "#") {
    const isHex = body[1] === "x" || body[1] === "X";
    const code = parseInt(
      isHex ? body.slice(2) : body.slice(1),
      isHex ? 16 : 10,
    );
    return Number.isNaN(code) ? match : String.fromCodePoint(code);
  }
  return Object.prototype.hasOwnProperty.call(NAMED_ENTITIES, body)
    ? NAMED_ENTITIES[body]
    : match;
};

export const decodeEntities = (str) => {
  if (typeof str !== "string" || str === "") return str;
  return str.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, replaceEntity);
};

export default decodeEntities;