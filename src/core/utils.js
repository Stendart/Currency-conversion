export function calculateCourse(mainCur, minorCur) {
  return mainCur / minorCur;
}

export function swapCurrency(mainCurrency, minorCyrrency) {
  return {
    main: minorCyrrency,
    minor: mainCurrency
  }
}
