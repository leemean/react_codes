interface Point {
    x: number;
    y: number;
}

const point:Point = {
    x: 3,
    y: 4
}



function tsDemo(data: Point) {
    console.log("123");
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

console.log(tsDemo({ x: 1, y: 2 }))