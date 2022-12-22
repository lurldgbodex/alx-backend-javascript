import ClassRoom from './0-classroom';

export default function intializeRooms() {
  const size = [19, 20, 34];
  const classroom = [];
  for (const sizes of size) {
    classroom.push(new ClassRoom(sizes));
  }
  return classroom;
}
