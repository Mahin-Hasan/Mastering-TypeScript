{
  //as this todo data is limited we can decleare type
  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  //  promise
  const getTodo = async ():Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data; //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  };
  getTodo();
  //simulate
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling createPromise function
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data;
    // console.log(data);
  };
  showData();

  //when object is passed
  const createPromise2 = (): Promise<{ something: string }> => {
    return new Promise<{ something: string }>((resolve, reject) => {
      const data: { something: string } = { something: "Something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling createPromise2 function
  const showData2 = async (): Promise<{ something: string }> => {
    const data: { something: string } = await createPromise2();
    console.log(data);
    return data;
  };
  showData2();
  //making is cleaner
  type Something = { something: string };
  const createPromise3 = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "Something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling createPromise3 function
  const showData3 = async (): Promise<Something> => {
    const data: Something = await createPromise3();
    console.log(data);
    return data;
  };
  showData3();
}
