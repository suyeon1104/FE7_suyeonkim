function task1() {
    return new Promise((resolve) => {
      console.log("task1");
      resolve();
    });
  }
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("task2");
        resolve();
      }, 1000);
    });
  }
  function task3() {
    return new Promise((resolve, reject) => {
      console.log("task3");
      resolve();
      // reject(new Error("강제로 에러 발생"));
    });
  }
  function task4() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("task4");
        resolve();
      }, 1000);
    });
  }
  function task5() {
    console.log("task5");
    return 3;
  }
  
  // Promise, catch()
  // Async-await, try-catch
  // Promise, catch()
    // Async-await, try-catch
    // 콜백함수, 콜백 지옥 패턴
  async function runTasks() {
    try {
      await task1();
      await task2();
      await task3();
      await task4();
      console.log(await task5());
    } catch (e) {
      console.error(e);
    } finally {
      console.log("task all finish");
    }
  }
  runTasks();