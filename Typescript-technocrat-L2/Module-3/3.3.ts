{
  //type guard

  //typeof --> type guard

  //   const add = (
  //     param1: string | number,
  //     param2: string | number
  //   ): string | number => {
  //     if (typeof param1 === "number" && typeof param2 === "number") {
  //       return param1 + param2;
  //     } else {
  //       return param1.toString() + param2.toString();
  //     }
  //   };

  //cleaned way

  type AlphaNumeric = string | number;
  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add(2, 3); //5
  const result2 = add("2", "3"); //23
  console.log(result2);

  //in guard

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    //user.name; //user. will only suggest name as it is common in both the type

    if ("role" in user) {
      //  user.name// not it will suggest both name and role
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      // console.log(`My name is ${user.name} and my role is ${user.role}`); //will give warning
      console.log(`My name is ${user.name} `);
    }
  };

  const normalUser:NormalUser={
    name:'Noob '
  }
  const adminUser:AdminUser={
    name:'Pro ',
    role:'Admin'
  }
  getUser(adminUser)
}
