function parseNumber(str) {
  str = str.toString().trim();
  let sign = "+";
  if (str.startsWith("-")) {
    sign = "-";
    str = str.slice(1);
  }
  let [int, dec] = str.split(".");
  int = int || "0";
  dec = dec || "";
  return [sign, int, dec];
}

function padRight(str, length) {
  return str + "0".repeat(length - str.length);
}

function padLeft(str, length) {
  return "0".repeat(length - str.length) + str;
}

function addDecimal(dec1, dec2) {
  const len = Math.max(dec1.length, dec2.length);
  dec1 = padRight(dec1, len);
  dec2 = padRight(dec2, len);
  let carry = 0;
  let result = "";
  for (let i = len - 1; i >= 0; i--) {
    const sum = parseInt(dec1[i]) + parseInt(dec2[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  return { result: result.replace(/0+$/, ""), carry };
}

function addInteger(int1, int2, carry) {
  const len = Math.max(int1.length, int2.length);
  int1 = padLeft(int1, len);
  int2 = padLeft(int2, len);
  let result = "";
  for (let i = len - 1; i >= 0; i--) {
    const sum = parseInt(int1[i]) + parseInt(int2[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  if (carry) result = carry + result;
  return result.replace(/^0+/, "") || "0";
}

function subDecimal(dec1, dec2) {
  const len = Math.max(dec1.length, dec2.length);
  dec1 = padRight(dec1, len);
  dec2 = padRight(dec2, len);
  let borrow = 0;
  let result = "";
  for (let i = len - 1; i >= 0; i--) {
    let diff = parseInt(dec1[i]) - parseInt(dec2[i]) - borrow;
    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }
    result = diff + result;
  }
  return { result: result.replace(/0+$/, ""), borrow };
}

function subInteger(int1, int2, borrow) {
  const len = Math.max(int1.length, int2.length);
  int1 = padLeft(int1, len);
  int2 = padLeft(int2, len);
  let result = "";
  for (let i = len - 1; i >= 0; i--) {
    let diff = parseInt(int1[i]) - parseInt(int2[i]) - borrow;
    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }
    result = diff + result;
  }
  return result.replace(/^0+/, "") || "0";
}

function compare(int1, dec1, int2, dec2) {
  int1 = int1.replace(/^0+/, "") || "0";
  int2 = int2.replace(/^0+/, "") || "0";
  if (int1.length !== int2.length) return int1.length - int2.length;
  if (int1 !== int2) return int1.localeCompare(int2);
  const len = Math.max(dec1.length, dec2.length);
  dec1 = padRight(dec1, len);
  dec2 = padRight(dec2, len);
  return dec1.localeCompare(dec2);
}

function formatResult(sign, intPart, decPart) {
  if (decPart) {
    return (sign === "-" && intPart !== "0" ? "-" : "") + intPart + "." + decPart;
  }
  return (sign === "-" && intPart !== "0" ? "-" : "") + intPart;
}

function add(a, b) {
  const [signA, intA, decA] = parseNumber(a);
  const [signB, intB, decB] = parseNumber(b);

  if (signA === signB) {
    const decimalSum = addDecimal(decA, decB);
    const integerSum = addInteger(intA, intB, decimalSum.carry);
    return formatResult(signA, integerSum, decimalSum.result);
  } else {
    return signA === "+" ? subtract(a, b.slice(1)) : subtract(b, a.slice(1));
  }
}

function subtract(a, b) {
  const [signA, intA, decA] = parseNumber(a);
  const [signB, intB, decB] = parseNumber(b);

  if (signA !== signB) {
    const decimalSum = addDecimal(decA, decB);
    const integerSum = addInteger(intA, intB, decimalSum.carry);
    return formatResult(signA, integerSum, decimalSum.result);
  }

  const cmp = compare(intA, decA, intB, decB);
  const resultSign = cmp >= 0 ? signA : signA === "+" ? "-" : "+";

  const [bInt, aInt] = cmp >= 0 ? [intB, intA] : [intA, intB];
  const [bDec, aDec] = cmp >= 0 ? [decB, decA] : [decA, decB];

  const decimalDiff = subDecimal(aDec, bDec);
  const integerDiff = subInteger(aInt, bInt, decimalDiff.borrow);

  return formatResult(resultSign, integerDiff, decimalDiff.result);
}

function roundDecimal(numStr, digits) {
  numStr = numStr.toString().trim();
  if (!/^-?\d+(\.\d+)?$/.test(numStr)) return "NaN";

  let negative = numStr.startsWith("-");
  if (negative) numStr = numStr.slice(1);

  let [intPart, decPart = ""] = numStr.split(".");
  if (digits === 0) {
    if (decPart[0] && parseInt(decPart[0]) >= 5) {
      intPart = add(intPart, "1");
    }
    return (negative ? "-" : "") + intPart;
  }

  decPart = decPart.padEnd(digits + 1, "0");
  const roundDigit = parseInt(decPart[digits]);
  let roundedDec = decPart.slice(0, digits);

  if (roundDigit >= 5) {
    // 加 1
    let carry = 1;
    let newDec = "";
    for (let i = digits - 1; i >= 0; i--) {
      let sum = parseInt(roundedDec[i] || "0") + carry;
      if (sum >= 10) {
        carry = 1;
        sum -= 10;
      } else {
        carry = 0;
      }
      newDec = sum + newDec;
    }
    if (carry) {
      intPart = add(intPart, "1");
    }
    roundedDec = newDec;
  }

  return (negative ? "-" : "") + intPart + (digits > 0 ? "." + roundedDec : "");
}
export { add, subtract, roundDecimal };
