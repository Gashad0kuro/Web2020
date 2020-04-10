//Task1
// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат
function task1() {
    const ITMO_BORN_YEAR = 1990;
    const ITMO_BORN_MONTH = 3;
    const ITMO_BORN_DAY = 26;

    var itmoBornDate = new Date(ITMO_BORN_YEAR, ITMO_BORN_MONTH - 1, ITMO_BORN_DAY);
    alert(itmoBornDate.toDateString())

    console.log(itmoBornDate.toDateString()); // Mon Mar 26 1990


}

//Task2
// Реализуйте функцию sum
function task2() {

    function sum(list) {
        var s = 0;
        console.log(list);
        for (i in list) {
            s += list[i];
        }
        return s;
    }

    alert(sum([5, 5, 5, 5, 5, 5, 5, 5, 5]));


    console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));

}

//Task3
// Реализуйте функцию isEquivalent
function task3() {

    const object1 = {
        name: 'Boris',
        weight: 15
    };

    const object2 = {
        name: 'Boris',
        weight: 15
    };

    const object3 = {
        name: 'Rex',
        weight: 20,
    };

    function isEquivalent(obj1, obj2) {

        if (obj1.name == obj2.name && obj1.weight == obj2.weight) {
            return true;
        }
        return false;


    }


    alert(isEquivalent(object1, object2));
    alert(isEquivalent(object3, object2));
    console.log(isEquivalent(object1, object2)); // true
    console.log(isEquivalent(object1, object3)); // false

}

//Task4
// Допишите код здесь, чтобы программа вывела имя объекта 
function task4() {
    function User(name) {
        this.name = name;

        this.getName = function () { return this.name }
    }


    const me = new User('Rex');

    alert(me.getName());
    console.log(me.getName()); // Rex
}

//Task5
// Реализуйте функцию, чтобы программа вывела counter
function task5() {
    function createCounter() {
        let tmp = 0
        return function() {
            tmp += 1
            return tmp
        }
    }

    const count = createCounter();

    count(); // 1
    count(); // 2
    count(); // 3
    count(); // 4

    alert(count()); //5
    console.log(count()); // 6
}