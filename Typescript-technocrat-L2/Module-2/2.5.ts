{
  //function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("dummy");
  console.log(res1);

  //using generic
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res2 = createArrayWithGeneric<boolean>(true);
  const resGeneric = createArrayWithGeneric<string>("TEXT");
  console.log(res2);
  console.log(resGeneric);

  const resGenericObj = createArrayWithGeneric<{ id: number; name: string }>({
    id: 231,
    name: "Rocky",
  });
  //cleaner way
  type User = { id: number; name: string };
  const resGenericObjClean = createArrayWithGeneric<User>({
    id: 231,
    name: "Rocky",
  });
  console.log(resGenericObj);

  //array with typle fucn

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result = createArrayWithTuple<string, number>("Mahin", 24);
  console.log(result);

  const resObj = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });
  console.log(resObj);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level Web development";
    return {
      ...student,
      course,
    };
  };
 
  const student1 = addCourseToStudent({name:'Mr X', email:'mx@gmail.com',devType:'L2 Developer'})
  console.log(student1);
}
