// 1
{
    function sumArray(arr: number[]): number
    function sumArray(arr: string[]): string
    function sumArray<T>(arr: T[]): T {
        return arr.reduce((acc, curr) => acc + curr, 0);
      }
      
      console.log(sumArray([1, 2, 3])); // 6
      
}