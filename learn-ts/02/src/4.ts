{
    let x: number | string = 10;
    x.toFixed(20);

    function printValue(x: number | string) {
        if (typeof x === "number") console.log(x.toFixed(2));
    }

    printValue(10);
}