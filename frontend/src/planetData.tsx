const random = (a:number, b:number) => a + Math.random() * b;

const planetData = [];
const totalPlanets = 9;
//planet: { color, xRadius, zRadius, size }
let index = 0;
planetData.push({
  id: index,
  color: "#00ffd0",
  xRadius: (index + 1.5) * 4,
  zRadius: (index + 1.5) * 2,
  size: random(0.5, 1),
  speed: random(0.5, 0.2),
  offset: random(0, Math.PI * 2),
  rotationSpeed :random(0, Math.PI * 2),
  name : "a"
});
index++;
planetData.push({
  id: index,
  color: "#ff5100",
  xRadius: (index + 1.5) * 4,
  zRadius: (index + 1.5) * 2,
  size: random(0.5, 1),
  speed: random(0.5, 0.2),
  offset: random(0, Math.PI * 2),
  rotationSpeed: random(0, Math.PI * 2),
  name : "b"
});
index++;
planetData.push({
  id: index,
  color: "#ff00a6",
  xRadius: (index + 1.5) * 4,
  zRadius: (index + 1.5) * 2,
  size: random(0.5, 1),
  speed: random(0.5, 0.2),
  offset: random(0, Math.PI * 2),
  rotationSpeed:random(0, Math.PI * 2),
  name : "c"
});

export default planetData;
