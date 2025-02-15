export const CONFIG = {
  tries: 6, // This changes how many tries you get to finish the wordle
  language: "nuučaan̓uł ciiqciiqa (all dialects)", // This changes the display name for your language
  wordLength: 5, // This sets how long each word is based on how many characters (as defined in orthography.ts) are in each word
  author: 'Cedar Étoile', // with help from Ben Altair
  authorWebsite: 'https://cedartaatawasi.com/', // Put a link to your website or social media here
  wordListSource: "t̓aat̓aaqsapa", // Describe the source material for your words here
  wordListSourceLink: "http://hesquiahtlanguage.org/uploads/6/8/7/0/6870919/taataaqsapa_1991_ocr.pdf", // Put a link to the source material for your words here
  //
  // THESE NEXT SETTINGS ARE FOR ADVANCED USERS
  //
  googleAnalytics: 'UA-219518570-1', // You can use this if you use Google Analytics
  shuffle: false, // whether to shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
  normalization: 'NFC', // whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
}
