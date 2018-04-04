function that(value : any) {
    if (arguments.length !== 1) {
        throw ReferenceError('Too many arguments provided, please use `allege.these()` for multiple inputs');
    }

    return {
        isIn: (...possibilities : Array<any>) => isIn(value, possibilities),
        isNotIn: (...possibilities : Array<any>) => isNotIn(value, possibilities)
    };
}

const these = (...values : Array<any>) => {
    return {
        areAll: (possibility : any) => areAll(values, possibility),
        areAllNot: (possibility : any) => areAllNot(values, possibility)
    };
};

const isIn = (needle : any, haystack : Array<any>) : boolean => {
    return haystack.includes(needle);
};

const isNotIn = (needle : any, haystack : Array<any>) : boolean => {
    return !isIn(needle, haystack);
};

const equals = (a : any, b : any) : boolean => {
    return a === b;
};

const doesNotEqual = (a : any, b : any) : boolean => {
    return !equals(a, b);
};

const areAll = (haystack : Array<any>, needle: any) : boolean => {
    return haystack.every(item => equals(item, needle));
};

const areAllNot = (haystack : Array<any>, needle : any) : boolean => {
    return haystack.every(item => doesNotEqual(item, needle));
};

const allege = {
    that,
    these
};

export default allege;