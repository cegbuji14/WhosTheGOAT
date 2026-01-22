export function distance(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      console.error("Distance error: inputs are not arrays");
      return NaN;
    }
  
    if (a.length !== b.length) {
      console.error("Distance error: length mismatch", a.length, b.length);
      return NaN;
    }
  
    let sum = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (typeof a[i] !== "number" || typeof b[i] !== "number") {
        console.error(
          `Invalid value at index ${i}:`,
          a[i],
          b[i]
        );
        return NaN;
      }
      sum += (a[i] - b[i]) ** 2;
    }
  
    return Math.sqrt(sum);
  }
  