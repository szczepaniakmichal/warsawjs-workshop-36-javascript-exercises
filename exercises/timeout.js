const programStartTime = new Date().getTime();

const print = (text) => {
    const now = new Date().getTime();
    console.log(`${text} (after ${now - programStartTime} ms)`);
};

console.log('A');

//ten blok kodu blokuje wykonywanie kodu w zależności ile czasu podamy w parametrze
const runBlockingTask = (milliseconds) => {
    const startTime = new Date().getTime();
    while (new Date().getTime() - startTime < milliseconds) {
// tu nic się nie dzieje wiec pętla się nie kończy
    }
};

// const measureExecutionTime = () => {
//     const startTime = new Date().getTime();
//     const endTime = new Date().getTime();
//     console.log(`long blocking task took ${endTime - startTime} milliseconds`);
// };

const printC = () => {
    print('C');
};

const printE = () => {
    print('E1');
    runBlockingTask(2000);
    print('E2');
};

setTimeout(printC, 5000);

const intervalId = setInterval(printE, 500);

setTimeout(() => {
    clearInterval(intervalId);
}, 20000);

print('B');

runBlockingTask(5000);

print('D');

// proba w ktorym momencie uruchamiany jest printC
//print(printC, 5000);


// const printC = () => {
//     console.log('C');
// };
//
// setTimeout(printC, 2000);
//
// setTimeout(() => {
//     console.log('D');
// }, 5000);
//
//
// console.log('B');
//
