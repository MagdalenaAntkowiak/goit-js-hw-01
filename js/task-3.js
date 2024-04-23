function getElementWidth(content, padding, border) {
  const a = content;
  const b = padding;
  const c = border;

  return parseFloat(a) + parseFloat(b) * 2 + parseFloat(c) * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
