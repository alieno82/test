export function newFeature() {
  return "newFeature";
}

export function addRandomEmoji(str) {
  const emojis = [
    "😀",
    "😂",
    "😍",
    "😎",
    "😢",
    "😡",
    "🥳",
    "🤔",
    "😱",
    "😴",
    "😇",
    "🤩",
    "😜",
    "😏",
    "😬",
    "😋",
    "😳",
    "😈",
    "👻",
    "💀",
    "👽",
    "🌈",
    "🌟",
    "🔥",
    "🍀",
    "🍉",
    "🍕",
    "🍔",
    "🍩",
    "🍭",
  ];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  return str + randomEmoji;
}
