// Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement the Car class that implements Vehicle interface
class Car implements Vehicle {
  // Properties
  make: string;
  model: string;
  year: number;

  // Constructor to initialize properties
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implement the start method
  start(): void {
    console.log("Car engine started");
    
    // Optional: Display car details when started
    console.log(`Vehicle details: ${this.year} ${this.make} ${this.model}`);
  }

  // Additional method to display car information
  displayInfo(): void {
    console.log(`Car Information:
    Make: ${this.make}
    Model: ${this.model}
    Year: ${this.year}`);
  }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2024);

// Call the start method
myCar.start();

// Optional: Display car information
console.log("\n--- Additional Information ---");
myCar.displayInfo();

// Verify the instance type
console.log("\n--- Type Verification ---");
console.log("Is myCar an instance of Car?", myCar instanceof Car);
console.log("Does myCar implement Vehicle interface?", 
  'make' in myCar && 'model' in myCar && 'year' in myCar && 'start' in myCar);
