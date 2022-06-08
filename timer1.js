let alarms = process.argv.slice(2);

const timer = function (alarm) {
    for (let time of alarm) {
        setTimeout(() => {
           //console.log(".") if sound doesnt play
           process.stdout.write('\x07');
        }, time * 1000)
    }
};

timer(alarms)

