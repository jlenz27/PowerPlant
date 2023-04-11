/* eslint-disable no-undef */
import { changeState } from '../src/js/Plant.js';

describe('storeState', () => {
  // let rectangle;
  let plant = { soil: 0, light: 0, water: 0 };
  let plant2 = { soil: 0, light: 0, water: 0 };
  const blueFood = changeState("soil")(5);

  // beforeEach(() => {
  //   rectangle = new Rectangle(3, 5);
  // });

  test('should output the object values of plant', () => {
    expect(plant.soil).toEqual(0);
    expect(plant.light).toEqual(0);
    expect(plant.water).toEqual(0);
  });

  test('should output the new object values of plant', () => {
    expect(blueFood(plant2).soil).toEqual(5);
    // expect(blueFood(plant2)).toEqual(5);
    // expect(plant2.light).toEqual(0);
    // expect(plant2.water).toEqual(0);
  });


});