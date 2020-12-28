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
        encryptedVerse = `${encryptedVerse.substring(0, this._arrOfIndexArr()[k][i])}<span class="card__poem_char-color${k + 1}">${encryptedVerse.charAt(this._arrOfIndexArr()[k][i])}</span>${encryptedVerse.substring(this._arrOfIndexArr()[k][i] + 1)}`;
      }
    }
    return encryptedVerse;
  }
}

// const testVerse = `В час, когда утомлен бездействием душно-тяжелым
// Или делом бесплодным — делом хуже безделья,—
// Я под кров свой вхожу — и с какой-то тоской озираю
// Стены, ложе да стол, на котором по глупой,
// Старой, вечной привычке ищу поневоле глазами,
// Нет ли вести какой издалека, худой или доброй
// Все равно, лишь бы вести, и роюсь заведомо тщетно —
// Так, чтоб рыться,— в бумагах... В час, когда
// обливает
// Светом серым своим финская ночь комнату,— снова
// Сердце болит и чего-то просит, хотя от чего-то
// Я отрекся давно, заменил неизвестное что-то —
// Глупое, сладкое что-то — суровым, холодно-
// печальным
// Нечто... Пусть это нечто звучит душе одномерно,
// Словно маятник старых часов,— зато для желудка
// Это нечто здоровей... Чего тебе, глупое сердце?
// Что за вестей тебе хочется? Знай себе, бейся
// ровнее,
// Лучше будет, поверь... Вести о чем-нибудь малом,
// Дурны ль они, хороши ль, только кровь понапрасну
// волнуют.
// Лучше жить без вестей, лучше, чтоб не было даже
// И желаний о ком да о чем-нибудь знать. И чего же
// Надо тебе, непокорное, гордое сердце,— само ты
// Хочешь быть господином, а просишь все уз да неволи,
// Женской ласки да встречи горячей... За эти
// Ласки да встречи — плохая расплата, не всё ли
// Ты свободно любить, ничего не любя... не завидуй.
// Бедное сердце больное — люби себе всё, или вовсе
// Ничего не любя — от избытка любви одиноко,
// Гордо, тихо страдай, да живи презрением вволю.`;
//
// const testFrase = 'Нужна помощь посадить дерево';
//
// const check = new CreateVerse(testFrase, testVerse);
