export default class Question {
  title = undefined;
  score = undefined;

  constructor(args) {
    [this.title, this.score] = args;
  }
}
