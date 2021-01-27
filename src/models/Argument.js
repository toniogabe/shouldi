export default class Argument {
  description = undefined;
  weight = 0;
  question = undefined;

  constructor(args) {
    Object.assign(this, args);
  }
}
