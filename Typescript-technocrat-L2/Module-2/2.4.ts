{
  //interface - generic

  interface Developer<T,X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  //   const poorDeveloper: Developer<{
  //     brand: string;
  //     model: string;
  //     display: string;
  //   }> = {
  //     name: "Mahin",
  //     computer: {
  //       brand: "Razer",
  //       model: "Blade Advanced",
  //       releaseYear: 2018,
  //     },
  //     smartWatch: {
  //       brand: "Amazefit",
  //       model: "band 8",
  //       display: "OLED",
  //     },
  //   };

  //cleaner way using type alias
  type AmazefitWatch = {
    brand: string;
    model: string;
    display: string;
  };
//as null is default value so we dont need to pass
  const poorDeveloper: Developer<AmazefitWatch> = {
    name: "Mahin",
    computer: {
      brand: "Razer",
      model: "Blade Advanced",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Amazefit",
      model: "band 8",
      display: "OLED",
    },
  };
  //cleaner way using interface
  interface AppleWatch {
    brand: string;
    model: string;
    heartTracking: boolean;
    sleepTrack: boolean;
  }
  const richDeveloper: Developer<AppleWatch,null> = {
    name: "Mahdy",
    computer: {
      brand: "Apple",
      model: "M#",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "Series 7",
      heartTracking: true,
      sleepTrack: true,
    },
  };
  interface Developer2<T, X> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  type AppleWatch1= {
    brand: string;
    model: string;
    heartTracking: boolean;
    sleepTrack: boolean;
  }
  interface YamahaBike {
    manufacturer: string;
    make: string;
    model: number;
  }

  const ultraRichDeveloper: Developer2<AppleWatch1, YamahaBike> = {
    name: "Mehat",
    computer: {
      brand: "Ryzen",
      model: "3700x",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Huawei",
      heartTracking: true,
      model: "band7",
      sleepTrack: false,
    },
    bike: {
      make: "Yamaha",
      manufacturer: "india",
      model: 2022,
    },
  };

  //
}
