// 1. Declare a variable with your name.

const Steven = "hey ya dude whatsaup";


// 2. Declare a variable with your favorite number.
const number = 7;


// 3 Create an array with 10 animal names.

let animals : string [] = ['dog','cat','lion','parrot','monkey','snake','bird','bear','pinguin','shark'];



// 4. Create an object called organization and its respective interface that contains the following data:

let organization = {
    name: "Conational Worlds",// The original name for project
    slogan: "international Workspaces", // Reference ideas for enterprise
    numberOfWorkers: 1000, // Number of workers
    serviceHours: "6 AM - 3 PM", // Service Hours
    allowsRemoteWork: true, // Whether to allow remote work or not
    creationDate: "01/10/2019", // Creation date
    worksOnSaturdays: false // Whether to work on Saturdays or not
  };

/*  5. Create an array of objects called students containing objects of type student which must have the following fields: Name, age, course and address (optional data). This arrangement must also be defined with its respective interface. */


  // Definition of the "Student" interface
interface Student {
    name: string;
    age: number;
    course: string;
    address?: string; // Optional field
  }

  // Create the array of "students" objects review analize 
  let students: Student[] = [
    {
      name: "Zet",
      age: 20,
      course: "Mathematics",
      address: "Broklin"
    },
    {
      name: "Lean",
      age: 22,
      course: "History",
      address: "New York"
    },
    {
      name: "Mage",
      age: 19,
      course: "Languajes",
      address: "Oclahoma"
    }
  ];

  console.log(students);






