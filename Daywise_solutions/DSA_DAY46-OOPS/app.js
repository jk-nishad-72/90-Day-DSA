// 🚕 JavaScript-Based Cab Service Program
// #DSA_DAY_46 – Class & Objects in OOPs

class CabService {
  // 🔸 Constructor: initializes class properties
  constructor() {
    this.car_type = "";
    this.km = 0.0;
    this.bill = 0.0;
  }

  // 🔹 Method to accept input
  accept(carType, km) {
    this.car_type = carType.toUpperCase(); // convert input to uppercase for consistency
    this.km = km;
  }

  // 🔹 Method to calculate total fare
  calculate() {
    if (this.car_type === "AC") {
      if (this.km <= 5) {
        this.bill = 150;
      } else {
        this.bill = 150 + (this.km - 5) * 10;
      }
    } else if (this.car_type === "NON AC" || this.car_type === "NON-AC") {
      if (this.km <= 5) {
        this.bill = 120;
      } else {
        this.bill = 120 + (this.km - 5) * 8;
      }
    } else {
      console.log("❌ Invalid car type. Please enter 'AC' or 'NON AC'.");
    }
  }

  // 🔹 Method to display the bill
  display() {
    console.log("🚗 CAB BILL DETAILS");
    console.log("----------------------");
    console.log(`CAR TYPE: ${this.car_type}`);
    console.log(`KILOMETER TRAVELLED: ${this.km} KM`);
    console.log(`TOTAL BILL: ₹${this.bill}`);
    console.log("----------------------");
  }
}

// 🧪 Testing the Class
// Example usage:
const cab1 = new CabService();

// Accept input
cab1.accept("AC", 8); // AC car, 8 KM travelled

// Calculate total bill
cab1.calculate();

// Display result
cab1.display();

// ✅ Expected Output:
// CAR TYPE: AC
// KILOMETER TRAVELLED: 8
// TOTAL BILL: ₹180
