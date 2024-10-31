{
  //ternary operator || optional chaining || nullish coalescing
  const age: number = 19;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("minor");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log(isAdult);

  //nullish coalescing operator
  // ## used when we had to make a decision based on null or undefined

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "GUEST"; //if user is null then add default value GUEST
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Mahin",
    address: {
      city: "sylhet",
      road: "h state",
      presentAddress: "syl",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "NO Permanent Address";
  console.log({ permanentAddress });
  type UserProfile = {
    name: string;
    age?: number; // Optional property
    address?: {
      city: string;
      country: string;
    };
  };

  const user1: UserProfile = {
    name: "John Doe",
    // age is undefined
    address: {
      city: "New York",
      country: "USA",
    },
  };

  // Example 1: Ternary Operator
  const ageStatus = user1.age ? `Age: ${user1.age}` : "Age is not available";
  console.log(ageStatus); // Output: "Age is not available"

  // Example 2: Optional Chaining
  const userCity = user1.address?.city;
  console.log(userCity); // Output: "New York"

  // Example 3: Nullish Coalescing Operator
  const displayAge = user1.age ?? "No age provided";
  console.log(displayAge); // Output: "No age provided"
}
