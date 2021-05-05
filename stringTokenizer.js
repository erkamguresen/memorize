function stringTokenizer(textToTokenize) {
  let returnArray = [];

  if (textToTokenize === null || textToTokenize === "") return returnArray;

  returnArray.push(getLineTokens(textToTokenize));

  for (let i = 0; i < returnArray.length; i++) {
    returnArray.push(getWordTokens(returnArray.shift()));
  }

  return returnArray;
}

function getLineTokens(textToTokenize) {
  let returnArray = [];
  let line = "";

  for (let i = 0; i < textToTokenize.length; i++) {
    let char = textToTokenize[i];

    if (i === textToTokenize.length - 1) {
      line += char;
      returnArray.push(line);
      break;
    }

    if (char !== "\n") {
      line += char;
      continue;
    } else {
      // char === "\n"
      returnArray.push(line);

      line = "";
    }
  }

  return returnArray;
}

// delimiters from java \t\n\r\f
function getWordTokens(textLineToTokenize) {
  let returnArray = [];
  let word = "";

  for (let i = 0; i < textLineToTokenize.length; i++) {
    let char = textLineToTokenize[i];

    if (i === textLineToTokenize.length - 1) {
      if (char !== " " && char !== "" && char !== "\n") word += char;

      returnArray.push(word);

      break;
    }

    if (
      char !== "\n" &&
      char !== "\t" &&
      char !== " " &&
      char !== "\r" &&
      char !== "\f"
    ) {
      word += char;

      continue;
    } else {
      if (word !== " " && word !== "" && word !== "\n") returnArray.push(word);

      word = "";
      continue;
    }
  }

  return returnArray;
}

function areArraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

let text = `Lorem ipsum dolor, 
sit amet consectetur adipisicing elit. 
Libero voluptatibus neque repellat 96 rerum perspiciatis sunt tempore, 
iste soluta quae temporibus aspernatur accusantium perferendis ipsa accusamus 
voluptatem adipisci commodi assumenda ab dolorem cumque vitae, quia reprehenderit repudiandae. 
Animi doloribus quisquam recusandae!`;

let textLines = [
  "Lorem ipsum dolor, ",
  "sit amet consectetur adipisicing elit. ",
  "Libero voluptatibus neque repellat 96 rerum perspiciatis sunt tempore, ",
  "iste soluta quae temporibus aspernatur accusantium perferendis ipsa accusamus ",
  "voluptatem adipisci commodi assumenda ab dolorem cumque vitae, quia reprehenderit repudiandae. ",
  "Animi doloribus quisquam recusandae!",
];

let text2 = `Lorem ipsum dolor, 
sit amet consectetur adipisicing elit.[] 
Libero voluptatibus neque repellat rerum\tperspiciatis sunt tempore, {} 
iste soluta quae temporibus aspernatur accusantium 00 perferendis ipsa accusamus <>
voluptatem adipisci commodi assumenda ab 60 dolorem cumque vitae, quia reprehenderit repudiandae. /?;:\|
Animi doloribus quisquam recusandae!`;

let textLines2 = [
  "Lorem ipsum dolor, ",
  "sit amet consectetur adipisicing elit.[] ",
  "Libero voluptatibus neque repellat rerum\tperspiciatis sunt tempore, {} ",
  "iste soluta quae temporibus aspernatur accusantium 00 perferendis ipsa accusamus <>",
  "voluptatem adipisci commodi assumenda ab 60 dolorem cumque vitae, quia reprehenderit repudiandae. /?;:|",
  "Animi doloribus quisquam recusandae!",
];

(function tests() {
  let lineTokens = getLineTokens(text);
  let lineTokens2 = getLineTokens(text2);
  //let wordTokens = getWordTokens(text);

  let text1Words = [
    ["Lorem", "ipsum", "dolor,"],
    ["sit", "amet", "consectetur", "adipisicing", "elit."],
    [
      "Libero",
      "voluptatibus",
      "neque",
      "repellat",
      "96",
      "rerum",
      "perspiciatis",
      "sunt",
      "tempore,",
    ],
    [
      "iste",
      "soluta",
      "quae",
      "temporibus",
      "aspernatur",
      "accusantium",
      "perferendis",
      "ipsa",
      "accusamus",
    ],
    [
      "voluptatem",
      "adipisci",
      "commodi",
      "assumenda",
      "ab",
      "dolorem",
      "cumque",
      "vitae,",
      "quia",
      "reprehenderit",
      "repudiandae.",
    ],
    ["Animi", "doloribus", "quisquam", "recusandae!"],
  ];

  let text2Words = [
    ["Lorem", "ipsum", "dolor,"],
    ["sit", "amet", "consectetur", "adipisicing", "elit.[]"],
    [
      "Libero",
      "voluptatibus",
      "neque",
      "repellat",
      "rerum",
      "perspiciatis",
      "sunt",
      "tempore,",
      "{}",
    ],
    [
      "iste",
      "soluta",
      "quae",
      "temporibus",
      "aspernatur",
      "accusantium",
      "00",
      "perferendis",
      "ipsa",
      "accusamus",
      "<>",
    ],
    [
      "voluptatem",
      "adipisci",
      "commodi",
      "assumenda",
      "ab",
      "60",
      "dolorem",
      "cumque",
      "vitae,",
      "quia",
      "reprehenderit",
      "repudiandae.",
      "/?;:|",
    ],
    ["Animi", "doloribus", "quisquam", "recusandae!"],
  ];
  // console.log(textLines);
  let isTestPassed = areArraysEqual(textLines, lineTokens);
  console.assert(isTestPassed, "Line Tests of Text1 Failed");

  isTestPassed = areArraysEqual(textLines2, lineTokens2);
  console.assert(isTestPassed, "Line Tests of Text2 Failed");

  for (let i = 0; i < lineTokens.length; i++) {
    const line = lineTokens[i];
    let wordTokens2 = getWordTokens(line);
    // let test = line.split(" ");

    console.assert(
      areArraysEqual(wordTokens2, text1Words[i]),
      `${i} th Line Test of Text1 Failed`
    );
  }

  for (let i = 0; i < lineTokens2.length; i++) {
    const line = lineTokens2[i];
    let wordTokens2 = getWordTokens(line);
    let test = line.split(" ");

    console.assert(
      areArraysEqual(wordTokens2, text2Words[i]),
      `${i} th Line Test of Text2 Failed`
    );
  }

  //TODO test from text to words; main method

  console.log("The End of The Tests");
})();
