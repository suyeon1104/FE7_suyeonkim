{
    // enum (이넘)
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
    // characterMoveX("up");
    // characterMoveX("down");

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
    // 이넘
    // 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입
    enum CharacterMoveX {
        LEFT,
        RIGHT,
    }
    enum RotationMoveX {
        UP,
        DOWN,
        LEFT,
        RIGHT,
    }
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
    characterMoveX(CharacterMoveX.RIGHT);
    characterMoveX(CharacterMoveX.LEFT);

}

{
    // 숫자형 enum
    enum Direction {
        UP,
        DOWN = 100, // 100
        LEFT = 300,
        RIGHT, // 301
    }
    console.log(Direction);
    console.log(Direction.UP); // 0
    console.log(Direction.DOWN); // 1
    console.log(Direction.LEFT); // 2
    console.log(Direction.RIGHT); // 3
}

{
    enum StatusCode {
        OK = 200,
        BadRequest = 400,
        Unauthorized = 401,
        NotFound = 404,
    }

    function handleResponse(code: StatusCode) {
        switch(code) {
            case StatusCode.OK:
                return "성공";
            case StatusCode.BadRequest:
                return "실패";
            case StatusCode.Unauthorized:
                return "인증 에러";
            case StatusCode.NotFound:
                return "찾을 수 없음";
        }
    }
    handleResponse(StatusCode.BadRequest);
}

{
    // 문자 enum (열거형)
    enum Direction {
        UP = "Up",
        DOWN = "Down",
        LEFT = "Left",
        RIGHT = "Right",
    }

    console.log(Direction.DOWN);
}

{
    // 혼합 enum (열거형)
    // 모든 값을 적어줘야 함
    enum Mix {
        YES = 1,
        No = "NO",
    }

    enum Driection {
        UP = 200,
        DOWN = "UP",
        LEFT = 300,
        RIGHT = "DOWN",
    }
}

{
    enum Key {
        ArrowUp,
        ArrowDown,
    }
    
    function onKeyPressed(code: Key) {
        console.log("Pressed : " + Key[code]);
    }

    onKeyPressed(Key.ArrowUp);
    onKeyPressed(Key.ArrowDown);
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
        id: number,
        role: Role;
    }
    type AuthAccount = Account & {token?: string};
}

{
    interface Token {
        token?: string;
    }
    interface Account {
        id: number;
        role: "admin" | "guest";
    }
    type AuthAccount = Token & Account;
}

