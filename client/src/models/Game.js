export const Game_Server = {
  Players: [],
  Picture_Deck: [],
  Caption_Deck: [],
  Dealer: -1,
  Captions_In_Play: [],
  Picture_In_Play: "",
  Caption_Chosen: -1
};

export const Game_Client = {
  Players: [
    { name: "Alex", points: "0" },
    { name: "Gavin", points: "0" },
    { name: "Devon", points: "0" }
  ],
  Dealer: -1,
  Captions_In_Play: [],
  Picture_In_Play: "",
  Caption_Chosen: -1
};

export var My_Captions = ["Test"];

export class Player {
  name;
  points;
  captions;
}
