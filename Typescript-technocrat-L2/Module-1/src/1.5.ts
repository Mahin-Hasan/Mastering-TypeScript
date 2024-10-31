// Reference Type --> object

//implicit type declaration
const user1 = {
  firstName: "Mahin",
  lastName: "Hasan",
};

//explecit type declaration
const user: {
  company: "Programming Hero"; // type->literal type | used when a value is fixed
  readonly course: string;
  firstName: string;
  lastName: string;
  designation?: string; // optional type
  isMarried: boolean;
} = {
  company: "Programming Hero",
  course: "Level 2",
  firstName: "Mahin",
  lastName: "Hasan",
  designation: "Coder",
  isMarried: true,
};
// user.company ='PH' // will now allow
// user.course='L!' will not allow bz readonly

//Level 2 Routine
const DevelopmentRoutine: {
  moduleComplete: string;
  gym: string;
  dinner: string;
  upScale: string;
  sleep: string;
  lunch: string;
  totalHours: number;
  isSessionCompleted: (hours: number) => string;
} = {
  moduleComplete: "6-10pm CODE 💻",
  gym: "10-11pm Gym 💪",
  dinner: "11-1am dinner, fam, shower",
  upScale: "1-5am polish projects, LeetCode, YT, 🤲",
  sleep: "5-1pm sleep 💤",
  lunch: "1-6pm lunch, books, Duolingo, LinkedIn, 🤲",
  totalHours: 0,
  isSessionCompleted(hours: number): string {
    this.totalHours += hours;
    return `I have completed ${this.totalHours} hours of study session.`;
  },
};