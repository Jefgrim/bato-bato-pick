// declare the value of scores
let p1Score = 0;
let botScore = 0;
let draws = 0;

// get the score text
let p1ScoreTxt = document.querySelector("#p1ScoreTxt");
let botScoreTxt = document.querySelector("#botScoreTxt");

// get Image for picked moves
let playerMoveImg = document.querySelector("#playerPickedMove");
let botMoveImg = document.querySelector("#botPickedMove");

// get the button
let batoBtn = document.querySelector("#bato");
let papelBtn = document.querySelector("#papel");
let guntingBtn = document.querySelector("#gunting");

// get match history to be used as parent node
let mh = document.querySelector("#matchHistory");

// add event listener to buttons
batoBtn.addEventListener("click", pickedBato);
papelBtn.addEventListener("click", pickedpapel);
guntingBtn.addEventListener("click", pickedgunting);

// functions for buttons
function pickedBato() {
  let botpicks = Math.floor(Math.random() * 3);

  //   bot picks bato
  if (botpicks == 0) {
    // add score to draw
    draws += 1;

    // changed img of playermove
    playerMoveImg.src = "images/Rock-Player.svg";
    botMoveImg.src = "images/Rock-Bot.svg";

    // create element to be added later using insert adjacent element
    let mhItemContainer = document.createElement("div");
    mhItemContainer.classList = "mhContentContainer";
    let mhItem = document.createElement("h3");

    // insert match history container inside match history div
    mh.insertAdjacentElement("afterbegin", mhItemContainer);

    // add match history item content text
    mhItem.textContent = "Player 1 Picks Bato | Bot Picks Bato | Draw";
    mhItem.classList = "drawHistory";

    // insert match history item inside match history container
    mhItemContainer.insertAdjacentElement("afterbegin", mhItem);
  }

  //   bot picks papel
  else if (botpicks == 1) {
    // add score to bot
    botScore += 1;

    // changed img of playermove
    playerMoveImg.src = "images/Rock-Player.svg";
    botMoveImg.src = "images/Paper-Bot.svg";

    // create element to be added later using insert adjacent element
    let mhItemContainer = document.createElement("div");
    mhItemContainer.classList = "mhContentContainer";
    let mhItem = document.createElement("h3");

    // insert match history container inside match history div
    mh.insertAdjacentElement("afterbegin", mhItemContainer);

    // add match history item content text
    mhItem.textContent = "Player 1 Picks Bato | Bot Picks Papel | Bot Scored";
    mhItem.classList = "loseHistory";

    // insert match history item inside match history container
    mhItemContainer.insertAdjacentElement("afterbegin", mhItem);

    // changed the text of score
    botScoreTxt.textContent = botScore;
  }

  //   bot picks gunting
  else if (botpicks == 2) {
    // add score to player 1
    p1Score += 1;

    // changed img of playermove
    playerMoveImg.src = "images/Rock-Player.svg";
    botMoveImg.src = "images/Scissor-Bot.svg";

    // create element to be added later using insert adjacent element
    let mhItemContainer = document.createElement("div");
    mhItemContainer.classList = "mhContentContainer";
    let mhItem = document.createElement("h3");

    // insert match history container inside match history div
    mh.insertAdjacentElement("afterbegin", mhItemContainer);

    // add match history item content text
    mhItem.textContent =
      "Player 1 Picks Bato | Bot Picks Gunting | Player 1 Scored";
    mhItem.classList = "winHistory";

    // insert match history item inside match history container
    mhItemContainer.insertAdjacentElement("afterbegin", mhItem);

    // changed the text of score
    p1ScoreTxt.textContent = p1Score;
  }

  //   Check who wins
  if (p1Score == 5) {
    batoBtn.setAttribute("disabled", "");
    papelBtn.setAttribute("disabled", "");
    guntingBtn.setAttribute("disabled", "");

    p1ScoreTxt.textContent = p1Score + " (Winner!)";
    p1ScoreTxt.classList = "winHistory";
    botScoreTxt.textContent = botScore + " (Loser!)";
    botScoreTxt.classList = "loseHistory";
  } else if (botScore == 5) {
    batoBtn.setAttribute("disabled", "");
    papelBtn.setAttribute("disabled", "");
    guntingBtn.setAttribute("disabled", "");

    botScoreTxt.textContent = botScore + " (Winner!)";
    botScoreTxt.classList = "winHistory";
    p1ScoreTxt.textContent = p1Score + " (Loser!)";
    p1ScoreTxt.classList = "loseHistory";
  }
}

function pickedpapel() {
  let botpicks = Math.floor(Math.random() * 3);

  //   bot picks bato
  if (botpicks == 0) {
    // add score to player 1
    p1Score += 1;

    // changed img of playermove
    playerMoveImg.src = "images/Paper-Player.svg";
    botMoveImg.src = "images/Rock-Bot.svg";

    // create element to be added later using insert adjacent element
    let mhItemContainer = document.createElement("div");
    mhItemContainer.classList = "mhContentContainer";
    let mhItem = document.createElement("h3");

    // insert match history container inside match history div
    mh.insertAdjacentElement("afterbegin", mhItemContainer);

    // add match history item content text
    mhItem.textContent =
      "Player 1 Picks Papel | Bot Picks Bato | Player 1 Scored";
    mhItem.classList = "winHistory";

    // insert match history item inside match history container
    mhItemContainer.insertAdjacentElement("afterbegin", mhItem);

    // changed the text of score
    p1ScoreTxt.textContent = p1Score;
  }

  //   bot picks papel
  else if (botpicks == 1) {
    // add score to draw
    draws += 1;

    // changed img of playermove
    playerMoveImg.src = "images/Paper-Player.svg";
    botMoveImg.src = "images/Paper-Bot.svg";

    // create element to be added later using insert adjacent element
    let mhItemContainer = document.createElement("div");
    mhItemContainer.classList = "mhContentContainer";
    let mhItem = document.createElement("h3");

    // insert match history container inside match history div
    mh.insertAdjacentElement("afterbegin", mhItemContainer);

    // add match history item content text
    mhItem.textContent = "Player 1 Picks Papel | Bot Picks Papel | Draw";
    mhItem.classList = "drawHistory";

    // insert match history item inside match history container
    mhItemContainer.insertAdjacentElement("afterbegin", mhItem);
  }

  //   bot picks gunting
  else if (botpicks == 2) {
    // add score to bot
    botScore += 1;

    // changed img of playermove
    playerMoveImg.src = "images/Paper-Player.svg";
    botMoveImg.src = "images/Scissor-Bot.svg";

    // create element to be added later using insert adjacent element
    let mhItemContainer = document.createElement("div");
    mhItemContainer.classList = "mhContentContainer";
    let mhItem = document.createElement("h3");

    // insert match history container inside match history div
    mh.insertAdjacentElement("afterbegin", mhItemContainer);

    // add match history item content text
    mhItem.textContent =
      "Player 1 Picks Papel | Bot Picks Gunting | Bot Scored";
    mhItem.classList = "loseHistory";

    // insert match history item inside match history container
    mhItemContainer.insertAdjacentElement("afterbegin", mhItem);

    // changed the text of score
    botScoreTxt.textContent = botScore;
  }

  //   Check who wins
  if (p1Score == 5) {
    batoBtn.setAttribute("disabled", "");
    papelBtn.setAttribute("disabled", "");
    guntingBtn.setAttribute("disabled", "");

    p1ScoreTxt.textContent = p1Score + " (Winner!)";
    p1ScoreTxt.classList = "winHistory";
    botScoreTxt.textContent = botScore + " (Loser!)";
    botScoreTxt.classList = "loseHistory";
  } else if (botScore == 5) {
    batoBtn.setAttribute("disabled", "");
    papelBtn.setAttribute("disabled", "");
    guntingBtn.setAttribute("disabled", "");

    botScoreTxt.textContent = botScore + " (Winner!)";
    botScoreTxt.classList = "winHistory";
    p1ScoreTxt.textContent = p1Score + " (Loser!)";
    p1ScoreTxt.classList = "loseHistory";
  }
}

function pickedgunting() {
  let botpicks = Math.floor(Math.random() * 3);

  //   bot picks bato
  if (botpicks == 0) {
    // add score to bot
    botScore += 1;

    // changed img of playermove
    playerMoveImg.src = "images/Scissor-Player.svg";
    botMoveImg.src = "images/Rock-Bot.svg";

    // create element to be added later using insert adjacent element
    let mhItemContainer = document.createElement("div");
    mhItemContainer.classList = "mhContentContainer";
    let mhItem = document.createElement("h3");

    // insert match history container inside match history div
    mh.insertAdjacentElement("afterbegin", mhItemContainer);

    // add match history item content text
    mhItem.textContent = "Player 1 Picks Gunting | Bot Picks Bato | Bot Scored";

    // insert match history item inside match history container
    mhItemContainer.insertAdjacentElement("afterbegin", mhItem);
    mhItem.classList = "loseHistory";
    // changed the text of score
    botScoreTxt.textContent = botScore;
  }

  //   bot picks papel
  else if (botpicks == 1) {
    // add score to draw
    p1Score += 1;

    // changed img of playermove
    playerMoveImg.src = "images/Scissor-Player.svg";
    botMoveImg.src = "images/Paper-Bot.svg";

    // create element to be added later using insert adjacent element
    let mhItemContainer = document.createElement("div");
    mhItemContainer.classList = "mhContentContainer";
    let mhItem = document.createElement("h3");

    // insert match history container inside match history div
    mh.insertAdjacentElement("afterbegin", mhItemContainer);

    // add match history item content text
    mhItem.textContent =
      "Player 1 Picks Gunting | Bot Picks Bato | Player 1 Scored";

    // insert match history item inside match history container
    mhItemContainer.insertAdjacentElement("afterbegin", mhItem);
    mhItem.classList = "winHistory";
    // changed the text of score
    p1ScoreTxt.textContent = p1Score;
  }

  //   bot picks gunting
  else if (botpicks == 2) {
    // add score to bot
    draws += 1;

    // changed img of playermove
    playerMoveImg.src = "images/Scissor-Player.svg";
    botMoveImg.src = "images/Scissor-Bot.svg";

    // create element to be added later using insert adjacent element
    let mhItemContainer = document.createElement("div");
    mhItemContainer.classList = "mhContentContainer";
    let mhItem = document.createElement("h3");

    // insert match history container inside match history div
    mh.insertAdjacentElement("afterbegin", mhItemContainer);

    // add match history item content text
    mhItem.textContent = "Player 1 Picks Gunting | Bot Picks Gunting | Draw";
    mhItem.classList = "drawHistory";

    // insert match history item inside match history container
    mhItemContainer.insertAdjacentElement("afterbegin", mhItem);
  }

  //   Check who wins
  if (p1Score == 5) {
    batoBtn.setAttribute("disabled", "");
    papelBtn.setAttribute("disabled", "");
    guntingBtn.setAttribute("disabled", "");

    p1ScoreTxt.textContent = p1Score + " (Winner!)";
    p1ScoreTxt.classList = "winHistory";
    botScoreTxt.textContent = botScore + " (Loser!)";
    botScoreTxt.classList = "loseHistory";
  } else if (botScore == 5) {
    batoBtn.setAttribute("disabled", "");
    papelBtn.setAttribute("disabled", "");
    guntingBtn.setAttribute("disabled", "");

    botScoreTxt.textContent = botScore + " (Winner!)";
    botScoreTxt.classList = "winHistory";
    p1ScoreTxt.textContent = p1Score + " (Loser!)";
    p1ScoreTxt.classList = "loseHistory";
  }
}
