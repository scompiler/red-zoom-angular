type Operator = '+'|'-'|'*'|'/'|'min'|'max';

export interface Vector<T> {
    x: T;
    y: T;
}

export type VectorNumber = Vector<number>;

export type VectorString = Vector<string>;

export type VectorBoolean = Vector<boolean>;

function calc(a: number, operator: Operator, b: number) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case 'min': return Math.min(a, b);
        case 'max': return Math.max(a, b);
    }
}

export function fromRectPos(rect: ClientRect): VectorNumber {
    return {x: rect.left, y: rect.top};
}

export function fromRectSize(rect: ClientRect): VectorNumber {
    return {x: rect.width, y: rect.height};
}

export function fromScroll(): VectorNumber {
    return {x: scrollX, y: scrollY};
}

export function fromMouseEvent(event: MouseEvent): VectorNumber {
    return add({x: event.clientX, y: event.clientY}, fromScroll());
}

export function op(a: VectorNumber, operator: Operator, b: VectorNumber | number): VectorNumber {
    if (typeof b === 'number') {
        b = {x: b, y: b};
    }

    return {
        x: calc(a.x, operator, b.x),
        y: calc(a.y, operator, b.y)
    };
}

export function add(a: VectorNumber, b: VectorNumber | number): VectorNumber {
    return op(a, '+', b);
}

export function sub(a: VectorNumber, b: VectorNumber | number): VectorNumber {
    return op(a, '-', b);
}

export function mul(a: VectorNumber, b: VectorNumber | number): VectorNumber {
    return op(a, '*', b);
}

export function div(a: VectorNumber, b: VectorNumber | number): VectorNumber {
    return op(a, '/', b);
}

export function min(a: VectorNumber, b: VectorNumber | number): VectorNumber {
    return op(a, 'min', b);
}

export function max(a: VectorNumber, b: VectorNumber | number): VectorNumber {
    return op(a, 'max', b);
}

export function round(a: VectorNumber): VectorNumber {
    return map(a, Math.round);
}

export function map<T, B>(a: Vector<T>, fn: (c: T, axis: 'x'|'y') => B): Vector<B> {
    return {x: fn(a.x, 'x'), y: fn(a.y, 'y')};
}

export function equal(a: VectorNumber, b: VectorNumber | number): VectorBoolean {
    if (typeof b === 'number') {
        b = {x: b, y: b};
    }

    return {
        x: a.x === b.x,
        y: a.y === b.y,
    };
}

export function notEqual(a: VectorNumber, b: VectorNumber): VectorBoolean {
    return {x: a.x !== b.x, y: a.y !== b.y};
}

export function flatMax(a: VectorNumber): number {
    return Math.max(a.x, a.y);
}

export function flatMin(a: VectorNumber): number {
    return Math.min(a.x, a.y);
}

export function flatOr(a: VectorBoolean): boolean {
    return a.x || a.y;
}
