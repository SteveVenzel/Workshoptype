// 7. Create a function with 3 arguments that are numbers and this function calculates the largest of the numbers.


function Higher (num1: number, num2: number, num3: number): number {
    let Higher: number = num1;

    if (num2 > Higher) {
        Higher = num2;
    }

    if (num3 > Higher) {
        Higher = num3;
    }

    return Higher;
  }

  console.log(Higher(10, 5, 8)); // Output: will be 10