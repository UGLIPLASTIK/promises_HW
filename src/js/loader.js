import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const result = read()
      .then((data) => json(data));
    return result;
  }
}
