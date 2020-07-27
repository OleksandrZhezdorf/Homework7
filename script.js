
let levelAmount = 0;
const levels = (object) => {
    for (let key in object) {
        if (object[key] != null && typeof object[key] == 'object') {
            ++levelAmount;
            console.log(key)
            levels(object[key]);
        }
        else {

        }
    }
    return levelAmount;
}






const obj1 = {
    stabbing: {
        rapier: 1,
        sword: {
            a: 10,
            b: 12,
            c: 14,
            d: {
                e: 'long',
                f: 'short',
            }
        }
    },
    cutting: {
        a: false,
        b: false,
    },
    crushing: {
        hammer: 'stunning',
    }
};
const obj2 = {
    stabbing: {
        rapier: 1,
        sword: {
            a: 10,
            b: 12,
            c: 15,
            d: {
                e: 'long',
                f: 'short',
            }
        }
    },
    cutting: {
        a: false,
        b: false,
    },
    crushing: {
        hammer: 'thundering',
    }
};


let sumAmount = 0;
function deepEqual(obj1, obj2) {
    
    if (obj1 === obj2) {
        return true;
    }

    if (obj1 == null || typeof (obj1) != "object" ||
        obj2 == null || typeof (obj2) != "object") {
        return false;
    }

    var propertiesInA = 0, propertiesInB = 0;
    for (var property in obj1) {
        propertiesInA += 1;
    }
    for (var property in obj2) {
        propertiesInB += 1;
        if (!(property in obj1) || !deepEqual(obj1[property], obj2[property])) {
            sumAmount++;
        }
    }
    return sumAmount;
}
let ready = deepEqual(obj1, obj2);
console.log('Количество расхождений ' + ready);
