{
    // 유틸리티 타입
    // 제네릭을 기반으로 만들어짐
}
    interface User {
        name: string;
        age: number;
        email: string;
    }
    interface NoAuthUser {
        name: string;
        email?: number;
    }


    const u1: User = {
        name: "kim",
        age: 20,
        email: "test@naver.com",
    }

    const u2: Partial<User> = {
        name: "kim",
        age: 20,
    }

  // 예제 1: 일부 속성만 지정
  const user1: Partial<User> = { name: "John" };
  
  // 예제 2: age만 지정
  const user2: Partial<User> = { age: 30 };
  
  // 예제 3: name과 email만 지정
  const user3: Partial<User> = { name: "Alice", email: "alice@example.com" };
  
  // 예제 4: 모든 속성을 생략 가능
  const user4: Partial<User> = {};  // 모든 속성을 생략할 수 있음


{
    let arr: [] = [];
    let obj: Record<string, never> = {};
}

