{
  //constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string } //enforcing the function to must pass this items id, name,email
  >(
    student: T
  ) => {
    const course = "Next level Web Development";
    return {
      ...MediaStreamAudioDestinationNode,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 124,
    name: "Mr: X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 121,
    name: "Mr: X",
    email: "x@gmail.com",
    hasWatch: "Apple Watch",
  });
}
