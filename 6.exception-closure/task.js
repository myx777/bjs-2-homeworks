//ЗАДАЧА 1.
function parseCount(arg) {
    const parseValue = Number.parseFloat(arg);
    if (isNaN(parseValue)) {
        throw new Error('Невалидное значение');
    }
    return parseValue;
}

function validateCount(arg) {
    try {
        return parseCount(arg);
    } catch (error) {
        return error;
    }
}

//ЗАДАЧА 2
class Triangle {
    constructor(a, b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if((a + b) < c || (a + c) < b || (c + b) < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area () {
        const p = this.perimeter / 2;
        return +Math.pow(p * (p - this.a) * (p - this.b) * 
            (p - this.c), 1 / 2).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);    
    } catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },

            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}