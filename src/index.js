/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState } from './js/Plant';
import { storeState } from './js/Plant';

// updated to pass values in storeState
const stateControl = storeState({ soil: 0, light: 0, water: 0 });

// testing sample from lesson
// let plant = { soil: 0, light: 0, water: 0 };

// variables storing activity to change state
const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

// variables storing specific values for activities
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

const mist = changeState("water")(1);
const superWater = changeState("water")(5);

const afternoonSun = changeState("light")(45);



// blueFood(plant);
// // console.log(blueFood(plant));
// const fedPlant = stateControl(blueFood);
// // console.log(fedPlant); // this only has one variable because the entire state isn't addressed
// stateControl();
// // console.log(stateControl());

// const createAPlant = (name) => {
//     let nameHeaderEl = document.GetElementById('plantName');
//     nameHeaderEl.innerText = 'hello?';

// }


window.onload = function () {


  // This function has side effects because we are manipulating the DOM.
  // Manipulating the DOM will always be a side effect. 
  // Note that we only use one of our functions to alter soil. 
  // You can easily add more.
  document.getElementById('feed').onclick = function () {
    const newState = stateControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('hydrate').onclick = function () {
    const newState = stateControl(mist);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };

  document.getElementById('giveLight').onclick = function () {
    const newState = stateControl(afternoonSun);
    document.getElementById('light-value').innerText = `Light: ${newState.light}`;
  };



  document.getElementById('NewPlant').addEventListener('submit', (e) => {
    e.preventDefault();
    // let testPlant = document.getElementById('NewPlant').value;
    // testPlant = storeState({ soil: 1, light: 1, water: 1 });

    // append.testPlant;

    let userPlantName = document.querySelector('#NewPlant').value;

    let nameHeaderEl = document.GetElementById('plantName');
    nameHeaderEl.innerText = userPlantName;

    createAPlant(userPlantName);
    // const divEl = document.createElement('div');
    // divEl.innerText = 'what the fuck?'
    // document.getElementById('NewPlant').append(divEl);
  });


  // This function doesn't actually do anything useful in this application 
  // — it just demonstrates how we can "look" at the current state 
  // (which the DOM is holding anyway). 
  // However, students often do need the ability to see the current state 
  // without changing it so it's included here for reference.
  document.getElementById('show-state').onclick = function () {
    // We just need to call stateControl() without arguments 
    // to see our current state.
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  };


};


