// 6. Create a function that, given an argument called radius, should calculate the area of ​​a circle and return that result.

function CalculateArCircle(radio: number): number {
    const area: number = Math.PI * radio ** 2;
    return area;
  }

const radio: number = 8;
const CircleArea: number = CalculateArCircle(radio);
console.log(`The area of circle radius ${radio} is: ${CircleArea}`);


