export default class Validation {

  static notIncludeClass (classList , className) {
    return !classList.contains(className);
  }

  static includeClass(classList, className) {
    return classList.contains(className);
  }

  static isNull (value) {
    return value === null;
  }

  static moreThan (value , length) {
    return value.length >= length;
  }

  static isEmpty (value) {
    return value.length <= 0;
  }
}