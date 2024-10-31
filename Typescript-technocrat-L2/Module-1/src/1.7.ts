{
  //will guve error as poorUser is declared in 1.6  {} scoping will fix this error
  const poorUser = {
    name: "Mr Twist",
  };

  //spread operator
  //rest operator
  //destructuring

  // spread

  const bros1: string[] = ["robi", "rocky", "ricky"];
  const bros2: string[] = ["toni", "rony", "micky"];

  //   bros1.push(bros2) will give errot
  bros1.push(...bros2);

  const mentors1 = {
    typeScript: "Mezba",
    redux: "mir",
    dbms: "mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };
  //rest
  const greetFriends = (...friends: string[]) => {
    //as it is array we have to run forEach
    friends.forEach((friend: string) => console.log(`hi ${friend}`));
  };
  greetFriends("abul", "babul", "kabul");
}
