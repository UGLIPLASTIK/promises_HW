import GameSavingLoader from './loader';

export default function getSave() {
  return GameSavingLoader.load().then((saving) => {
    console.log(JSON.parse(saving));
  });
}
