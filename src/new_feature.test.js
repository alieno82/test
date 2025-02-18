import { test, expect } from "bun:test";
import { addRandomEmoji } from "./new_feature";

test("addRandomEmoji should add a random emoji to the string", () => {
  const str = "Hello";
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

  for (let i = 0; i < 1_000_000; i++) {
    const result = addRandomEmoji(str);
    const addedEmoji = result.slice(-2); // Prende le ultime due caratteri per l'emoji
    expect(result).not.toBe(str);
    expect(emojis).toContain(addedEmoji);
  }
});
