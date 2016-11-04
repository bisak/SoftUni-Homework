class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointA, pointB) {
        let distanceX = pointA.x - pointB.x;
        let distanceY = pointA.y - pointB.y;
        return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    }
}
