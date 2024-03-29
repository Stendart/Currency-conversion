export function calculateCourse(mainCur, minorCur) {
  return mainCur / minorCur;
}
export function calculatePrice(course, nominal) {
  return (course * nominal).toFixed(3);
}

export function swapCurrency(mainCurrency, minorCyrrency) {
  return {
    main: minorCyrrency,
    minor: mainCurrency
  }
}
