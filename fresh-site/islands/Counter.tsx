import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
    count: Signal<number>;
}

const heartFunc = (n: number) => { // nはハートの模様を変えるのに用いる引数
    const array = [];

    const e = Math.E;

    for (let x = -e; x <= e; x += 0.0003) {
        const y = Math.sin(e ** n * x) *
            Math.sqrt((e ** 2 - x ** 2) / 2) +
            1.1 * Math.log1p(1.2 * Math.abs(x));

        array.push(
            <div
                class="dot"
                style={{
                    left: `${50 + (16 * x)}dvmin`,
                    top: `${64 + (-1 * (16 * y))}dvmin`,
                }}
            >
            </div>,
        );
    }

    console.log(array.length);

    return array;
};



export default function Counter(props: CounterProps) {
    return (
        <div>
            <div class='counter'>
                <Button onClick={() => props.count.value -= 1}>-1</Button>
                <span> {props.count} </span>
                <Button onClick={() => props.count.value += 1}>+1</Button>
            </div>

            {heartFunc(props.count.value)}
        </div>
    );
}
