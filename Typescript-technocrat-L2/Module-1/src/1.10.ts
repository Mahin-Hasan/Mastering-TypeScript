{
  //Union types kind of OR operation 
  //   type FrontendDeveloper = "cheaterDeveloper" | "juniorDeveloper";
//   type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

//   type Developer = FrontendDeveloper | FullstackDeveloper;

//   const newDeveloper: FrontendDeveloper = "cheaterDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "B+" | "AB+";
  };
  const user: User = {
    name: "Mahin",
    gender: "male",
    bloodGroup: "B+",
  };

  //intersection Type kind of and operation
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {  
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

  const fullstackDeveloper:FullstackDeveloper ={
    skills :['HTML','CSS','EXPRESS'],
    designation1:'Frontend Developer',
    designation2:'Backend Developer'
  }

}
