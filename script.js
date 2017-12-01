//What is the smallest number that can be divided by 1- 10

let count = 1
numberLoop:
for (let i = 1; i < 10000; i++) {
    for (let j = 10; j > 0; j--) {
        if (i % j  === 0) {
            count += 1
            if (count === 10) {
                console.log(i);
                break numberLoop;
            }
        }
    }
    count = 0;
}
