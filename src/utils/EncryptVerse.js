export default class EncryptVerse {
  constructor(name, verse) {
    this._name = name;
    this._verse = verse;
  }

  _arrayOfWords() {
    return this._name
      .toLowerCase()
      .replace(/[._~:/?#[\]@!$&'()*+,;=-]+/gi, '')
      .split(' ');
  }

  _arrOfWordsWithArrOfChars() {
    const arrOfWordsWithArrsOfChars = [];
    this._arrayOfWords().forEach((word) => {
      arrOfWordsWithArrsOfChars.push(word.split(''));
    });
    return arrOfWordsWithArrsOfChars;
  }

  _arrOfIndexArr() {
    let index = 0;
    let indexReal = 0;
    let rCutVerse = this._verse;
    const arrOfIndexArr = [];
    let indexArr = [];
    for (let k = 0; k < this._arrOfWordsWithArrOfChars().length; k++) {
      let i = 0;
      indexArr = [];
      while (i < this._arrOfWordsWithArrOfChars()[k].length) {
        index = rCutVerse.indexOf(this._arrOfWordsWithArrOfChars()[k][i]);
        if (index !== -1) {
          rCutVerse = rCutVerse.slice(index + 1, rCutVerse.length);
          indexReal += (i === 0 && k === 0) ? index : index + 1;
          indexArr.push(indexReal);
          i += 1;
        } else break;
      }
      arrOfIndexArr.push(indexArr);
    }
    return arrOfIndexArr;
  }

  checkVerse() {
    if (this._arrOfIndexArr().flat().length === this._arrOfWordsWithArrOfChars().flat().length) {
      return this._arrOfIndexArr();
    }
    return undefined;
  }

  replaceChars() {
    let encryptedVerse = this._verse;
    for (let k = this._arrOfIndexArr().length - 1; k >= 0; k--) {
      for (let i = this._arrOfIndexArr()[k].length - 1; i >= 0; i--) {
        encryptedVerse = `${encryptedVerse.substring(0, this._arrOfIndexArr()[k][i])}<span class="event__poem_char-color${k + 1}">${encryptedVerse.charAt(this._arrOfIndexArr()[k][i])}</span>${encryptedVerse.substring(this._arrOfIndexArr()[k][i] + 1)}`;
      }
    }
    return encryptedVerse;
  }
}
