function perSession(val) {
  return `${val} per session`;
}
function asMinutes(val) {
  return `${val} (mins)`;
}
function asToman(val) {
  return `${val} \u062A\u0648\u0645\u0627\u0646`;
}
function asKDollar(val) {
  return `$ ${val}K`;
}
function asKToman(val) {
  return `${val} \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646`;
}
function asPercent(val) {
  return `${val} %`;
}

export { asToman as a, asMinutes as b, asPercent as c, asKToman as d, asKDollar as e, perSession as p };
