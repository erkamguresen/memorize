export class Tokenizer {
  static getLineTokens(textToTokenize) {
    let returnArray = [];
    let line = '';

    for (let i = 0; i < textToTokenize.length; i++) {
      let char = textToTokenize[i];

      if (i === textToTokenize.length - 1) {
        if (char !== '\n' && char !== '\r') {
          line += char;
        }

        if (line !== '') returnArray.push(line);

        break;
      }

      if (char !== '\n' && char !== '\r') {
        line += char;
        continue;
      } else {
        // char === "\n" || char === "\r"
        if (line !== '') returnArray.push(line);

        //reset line variable
        line = '';
      }
    }

    return returnArray;
  }

  static getWordTokens(textLineToTokenize) {
    let returnArray = [];
    let word = '';

    //remove white spaces in the line
    textLineToTokenize = textLineToTokenize.trim();

    for (let i = 0; i < textLineToTokenize.length; i++) {
      let char = textLineToTokenize[i];

      if (i === textLineToTokenize.length - 1) {
        if (
          // char !== " " &&
          char !== '' &&
          char !== '\n'
        )
          word += char;

        returnArray.push(word);

        break;
      }

      if (
        char !== '\n' &&
        char !== '\t' &&
        // char !== " " &&
        char !== '\r' &&
        char !== '\f'
      ) {
        word += char;

        continue;
      } else {
        if (
          // word !== " " &&
          word !== '' &&
          word !== '\n'
        )
          returnArray.push(word);

        word = '';
        continue;
      }
    }

    return returnArray;
  }
}
