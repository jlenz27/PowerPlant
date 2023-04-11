/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState } from './js/Plant';
import { storeState } from './js/Plant';

const stateControl = storeState();

// testing sample from lesson
// let plant = { soil: 0, light: 0, water: 0 };

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

const hydrate1 = changeState("water")(1);
const superWater = changeState("water")(5);

const giveLight1 = changeState("light")(45);

// blueFood(plant);
// // console.log(blueFood(plant));
// const fedPlant = stateControl(blueFood);
// // console.log(fedPlant); // this only has one variable because the entire state isn't addressed
// stateControl();
// // console.log(stateControl());


window.onload = function() {

  // This function has side effects because we are manipulating the DOM.
  // Manipulating the DOM will always be a side effect. 
  // Note that we only use one of our functions to alter soil. 
  // You can easily add more.
  document.getElementById('feed').onclick = function() {
    const newState = stateControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('hydrate').onclick = function() {
    const newState = stateControl(hydrate1);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };

  document.getElementById('giveLight').onclick = function() {
    const newState = stateControl(giveLight1);
    document.getElementById('light-value').innerText = `Light: ${newState.light}`;
  };
  // This function doesn't actually do anything useful in this application 
  // — it just demonstrates how we can "look" at the current state 
  // (which the DOM is holding anyway). 
  // However, students often do need the ability to see the current state 
  // without changing it so it's included here for reference.
  document.getElementById('show-state').onclick = function() {
    // We just need to call stateControl() without arguments 
    // to see our current state.
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  };
};





