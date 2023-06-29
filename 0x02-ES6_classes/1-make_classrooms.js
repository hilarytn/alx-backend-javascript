import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const arr = [];

  const class19 = new ClassRoom(19);
  arr.push(class19);

  const class20 = new ClassRoom(20);
  arr.push(class20);

  const class34 = new ClassRoom(34);
  arr.push(class34);

  return arr;
}
