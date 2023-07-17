
/*  8. Create a function with 1 argument which must be a name and that prints to the console "hello I'm -------"
 (where the dotted line is, the name passed by parameter should go). */


 function greet(name: string): void {
    if (name === "Carl") {
      console.log("Hello, I'm Carl");
    } else {
      console.log("Sorry, I'm expecting the name Carl");
    }
  }