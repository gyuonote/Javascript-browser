"use strict";
import Game from "./game.js";
import PopUp from "./popup.js";

const gameFinishBanner = new PopUp();

gameFinishBanner.setClickListener(() => {
  startGame();
});

const game = new Game(3, 2, 2);
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case "cancel":
      message = "REPLAY?";
      break;
    case "win":
      message = "YOU WON";
      break;
    case "lose":
      message = "YOU LOST";
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
