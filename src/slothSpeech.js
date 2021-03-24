import { Dimensions } from "react-native";
import { positiveTalk } from "../src/positiveTalk";
import { negativeTalk } from "../src/negativeTalk";
import { neutralTalk } from "../src/neutralTalk";


const DEFAULT_X = 220
const DEFAULT_Y = 800

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


export function slothSpeech(speaker) {

  if (speaker.personalityGroup === 0) {
    return choosePhrase(positiveTalk)
  } else if (speaker.personalityGroup === 1) {
    return choosePhrase(neutralTalk)
  } else {
    return choosePhrase(negativeTalk)}
}

export function setXPosition(slothPosition) {
  if (slothPosition % 2 === 1) {
    return 240
  } else {
    return 40
  }
}

function choosePhrase(array) {
  // console.log(array)
  // console.log(array.length)
  return array[Math.floor(Math.random() * array.length)]
}

export function setYPosition(slothPosition){
    console.log(slothPosition)
    let totalPosition = ((slothPosition * (windowWidth * 39/90)) + (windowWidth * 78/90))
    - (windowWidth * 0.15)
    console.log(totalPosition)
    return totalPosition
}
