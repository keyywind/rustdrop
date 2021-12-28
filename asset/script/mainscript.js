function remove_body_blur() {
  let subBody = document.getElementsByClassName("sub-body")[0];
  subBody.classList.remove("blurred");
}
function remove_loader() {
  let loader = document.getElementsByClassName("loader-section")[0]
  loader.remove();
}
function transform_angle(angle) {
  return (450 - angle) * (Math.PI / 180);
}
function compute_point(AX, AY, AT, BX, BY, BT) {
  let gradientA = Math.tan(transform_angle(AT)), gradientB = Math.tan(transform_angle(BT));
  console.log(gradientA, gradientB);
  let AdY = AY - gradientA * AX, BdY = BY - gradientB * BX;
  let X = (AdY - BdY) / (gradientB - gradientA);
  let Y = ((gradientA < gradientB) ? (X * gradientA + AdY) : (X * gradientB + BdY));
  return [ X, Y ];
}
function round(value, decimals) {
  let radix = Math.pow(10, decimals);
  return Math.round(value * radix) / radix;
}
function configure_points() {
  let AX = parseFloat(document.getElementsByClassName("point-entry-box-X-1")[0].value);
  let AY = parseFloat(document.getElementsByClassName("point-entry-box-Y-1")[0].value);
  let AT = parseFloat(document.getElementsByClassName("point-entry-box-T-1")[0].value);
  let BX = parseFloat(document.getElementsByClassName("point-entry-box-X-2")[0].value);
  let BY = parseFloat(document.getElementsByClassName("point-entry-box-Y-2")[0].value);
  let BT = parseFloat(document.getElementsByClassName("point-entry-box-T-2")[0].value);
  console.log(AX, AY, AT, BX, BY, BT);
  let C = compute_point(AX, AY, AT, BX, BY, BT);
  console.log(C)
  document.getElementsByClassName("point-entry-box-X-3")[0].value = round(C[0], 3);
  document.getElementsByClassName("point-entry-box-Y-3")[0].value = round(C[1], 3);
}
function load_main() {
  remove_loader();
  remove_body_blur();
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(load_main, 2000);
})
var initOffset = document.getElementsByClassName("navigation-section")[0].offsetTop;
document.addEventListener("scroll", () => {
  let navigation = document.getElementsByClassName("top-section")[0]
  if (window.scrollY > initOffset) {  navigation.classList.add("fixed-position");  }
  else {  navigation.classList.remove("fixed-position");  }
})
