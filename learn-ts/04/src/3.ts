{
    // 인덱스 접근 타입
    // 객체 타입에서 특정 키를 사용해 그 키의 값 타입을 추출하는 문법
    // 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입차원에서 타입 속성으로 값의 타입을 꺼내는 것
    type Person = {
      name: string;
      age: number;
    };
  
    type NameType = Person["name"];
    type AgeType = Person["age"];
  
    type NameAndAge = {
      name: string;
      age: number;
    }["name" | "age"];
  }
  {
    // const 단언
    // 값을 -> 리터럴
    // 객체의 속성의 값을 -> readonly
    let x = "Hello" as const;
    const numArr = [1, 2, 3] as const;
    const obj = {
      name: "kim",
      age: 20,
    } as const;
  }
  {
    enum Direction {
      UP,
      DOWN,
      LEFT,
      RIGHT,
    }
    console.log(Direction.UP);
    console.log(Direction[0]);
  }
  
  {
    enum Status {
      Pending = "PENDING",
      Success = "SUCCESS",
      Fail = "FAIL",
    }
  
    const options = Object.values(Status).map((value) => ({
      label: value,
      value,
    }));
  
    console.log(options);
  }
  
  {
    enum Status {
      Pending = "PENDING",
      Success = "SUCCESS",
      Fail = "FAIL",
    }
    console.log(Status.Success);
  }
  {
    type A = {
      readonly Pending: "PENDING";
      readonly Success: "SUCCESS";
      readonly Fail: "FAIL";
    };
  
    const Status = {
      Pending: "PENDING",
      Success: "SUCCESS",
      Fail: "FAIL",
    } as const;
  
    // const x = { name: "kim" } as const;
    // console.log(typeof x);
  
    // type Statuss = typeof Status[keyof typeof Status]
    type Status = {
      readonly Pending: "PENDING";
      readonly Success: "SUCCESS";
      readonly Fail: "FAIL";
    }["Pending" | "Success" | "Fail"]; // ["Pending" | "Success" | "Fail"]
  
    console.log(Status.Success);
    console.log(Status.Pending);
    console.log(Status.Fail);
  }