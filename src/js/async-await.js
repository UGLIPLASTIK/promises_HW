import read from './reader';
import json from './parser';

export default async function async() {
  try {
    const a = await read();
    const b = await json(a);
    console.log(JSON.parse(b));
    return JSON.parse(b);
  } catch (e) {
    return e;
  }
}
