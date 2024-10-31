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
