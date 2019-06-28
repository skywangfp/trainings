// "use strict";
function test1() {
    console.info(123)
}
// test1()

// test2 = ->(aa) {
//     console.info(aaa)
// }

// test2(222)


function test3(ß) {
    var a = [1,2,3,4,5];
    list1: {
        console.info('list1.start');
        list2: {
            console.info('list2.start');
            for (var val in a) {
                if (val > 1)
                    break list1;
                console.info('a: ' + val)
            }
            // break list1;
            console.info('list2.end');
        }
        console.info('list1.end');
    }
}
// test3()

function test4() {
    debugger
    try {
        console.info(111)
        var aaaa = 1
        // return 1
        console.info(222)
    } catch (e) {
        console.info(e.toString())
    } finally {
        console.info('finally')
    }
    1
}
var a = test4()
console.info(typeof a)
console.info(a)
// console.info(aaaa)
// "use strict";
// var obj = {get x() {return 0} };

// obj.x = 3.14;

// let x = 1;
// console.info(x)
// {
//     let x = 111;
//     console.info(x);
// }
// console.info(x)

// x(11,22);

function x(a,b) {
    console.info(a*b);
}

function sumall() {
    let sum = 0;
    for (let i in arguments) {
        sum += arguments[i]
    }
    return sum
}

function sumall1() {
    let sum = 0;
    for (let i in arguments) {
        sum += sumall(arguments[i])
        arguments[i].push(222)
    }
    console.info(sum)
}

a=[1,2,3]
b=[44,55,66]
c = sumall1(a, b)
console.info(a.toString())
console.info(b.toString())
