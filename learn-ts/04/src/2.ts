{
    // enum(이넘)
    // moveX -> 왼쪽과 오른쪽을 이동할 수 있게만 만든 것
    type MoveX = "left" | "right";
    function characterMoveX(direction: MoveX): void {
      if (direction === "left") {
        console.log("왼쪽으로 이동");
      }
      if (direction === "right") {
        console.log("오른쪽으로 이동");
      }
    }
  
    characterMoveX("left");
    characterMoveX("right");
  
    type Move = "left" | "right" | "up" | "down";
    function vehicleMove(direction: Move): void {
      if (direction === "left") {
        console.log("왼쪽으로 이동");
      }
      if (direction === "right") {
        console.log("오른쪽으로 이동");
      }
      if (direction === "up") {
        console.log("위쪽으로 이동");
      }
      if (direction === "down") {
        console.log("아래쪽으로 이동");
      }
    }
    vehicleMove("up");
    vehicleMove("down");
    vehicleMove("left");
    vehicleMove("right");
  }
  {
    function characterMoveX(
      direction: "left" | "right" | "rotateLeft" | "rotateRight"
    ): void {
      if (direction === "left") {
        console.log("왼쪽으로 이동");
      }
      if (direction === "right") {
        console.log("오른쪽으로 이동");
      }
      if (direction === "rotateLeft") {
        console.log("왼쪽으로 회전");
      }
      if (direction === "rotateRight") {
        console.log("오른쪽으로 회전");
      }
    }
  
    characterMoveX("left"); // 이동
    characterMoveX("rotateLeft"); // 회전
    characterMoveX("rotateRight"); // 회전
  }
  {
    // 이넘 (enum)
    // 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입
    enum CharacterMoveX { // 방향
      LEFT,
      RIGHT,
    }
  
    enum RotationMoveX { // 회전
      LEFT,
      RIGHT,
    }
  
    type ID = string;
    function characterMoveX(direction: CharacterMoveX | RotationMoveX): void {
      if (direction === CharacterMoveX.LEFT) {
        console.log("왼쪽으로 이동");
      }
      if (direction === CharacterMoveX.RIGHT) {
        console.log("오른쪽으로 이동");
      }
    }
  
    characterMoveX(CharacterMoveX.LEFT);
    characterMoveX(CharacterMoveX.RIGHT);
  
    characterMoveX(RotationMoveX.RIGHT);
    characterMoveX(RotationMoveX.LEFT);
  }
  {
    // 숫자형 enum
    enum Direction {
      UP = 200, // 0
      DOWN = 100, // 100
      LEFT = 300, // 101
      RIGHT, // 301
    }
  
    console.log(Direction.UP); // 0
    console.log(Direction.DOWN); // 1
    console.log(Direction.LEFT); // 1
    console.log(Direction.RIGHT); // 2
  }
  {
    enum StatusCode {
      OK = 200,
      BadRequest = 400,
      Unauthorized = 401,
      NotFound = 404,
    }
  
    function handleResponse(code: StatusCode) {
      switch (code) {
        case StatusCode.OK:
          return "성공";
        case StatusCode.BadRequest:
          return "실패";
        case StatusCode.Unauthorized:
          return "인증에러";
        case StatusCode.NotFound:
          return "찾을 수 없음";
      }
    }
  
    handleResponse(StatusCode.BadRequest);
  }
  {
    // 문자 enum(열거형)
    enum Direction {
      UP = "Up",
      DOWN = "Down",
      LEFT = "Left",
      RIGHT = "Right",
    }
  
    console.log(Direction.DOWN);
  }
  {
    // 혼합 enum(열거형)
    enum Mix {
      YES = 1,
      NO = "NO",
    }
  
    console.log(Mix);
  
    enum Direction {
      UP = 200,
      DOWN, // 201
      LEFT, // 202
      RIGHT = "RIGHT",
    }
  }
  {
    // 리버스 매핑(역방향 매핑)
    // 숫자형 이넘에만 지원한 개념
    enum Direction {
      UP,
      DOWN, // 201
      LEFT, // 202
      RIGHT,
    }
  
    console.log(Direction.UP); // 0
    console.log(Direction[0]); // 'UP'
  }
  {
    enum Key {
      ArrowUp,
      ArrowDown, // 1
    }
  
    function onKeyPressed(code: Key) {
      console.log("Pressed : " + Key[code]);
    }
  
    onKeyPressed(Key.ArrowDown); // 1
    onKeyPressed(1);
  }
  {
    // const enum
    enum Direction {
      UP,
      DOWN,
      LEFT,
      RIGHT,
    }
  
    Direction[0];
  
    const enum DirectionConst {
      UP,
      DOWN,
      LEFT,
      RIGHT,
    }
  }
  {
    // 객체 - interface (type)
    // 리터럴 타입 - enum (const enum)
    // 타입 별칭 - 유니온타입, 인터섹션
    const enum Role {
      ADMIN = "admin",
      GUEST = "guest",
    }
  
    interface Account {
      id: number;
      role: Role;
    }
  
    type AuthAccount = Account & { token?: string };
  }
  {
    type Token = {
      toekn?: string;
    };
    type Account = {
      id: number;
      role: "admin" | "guest";
    };
    type AuthAccount = Token & Account;
  }