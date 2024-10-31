// destructuring

{
  const user = {
    id: 1243,
    name: {
      firstName: "Mahin",
      lastName: "Hasan",
    },
    contactNo: "0123456777",
    address: "sylhet",
  };

  const {
    contactNo,
    name: { firstName: fstName }, //destructured and aleased
  } = user;


//array destructuring

const friends  = ['maggie', 'robbie', 'maxman','terminator']

const [,,closeFriend]= friends;
console.log(closeFriend);


}

