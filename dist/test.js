var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
console.log('test.ts 실행');
const arr = [
    10, 20, 30, 40, 50
];
const obj = [
    { key: '1', content: 'apple' },
    { key: '2', content: 'banana' },
    { key: '3', content: 'carrot' },
    { key: '4', content: 'delta' },
    { key: '5', content: 'echo' },
    { key: '6', content: 'fox' },
    { key: '7', content: 'grape' },
    { key: '8', content: 'hexa' },
];
const obj2 = {
    key: '10',
    content: 'What a ten!',
    date: 'today',
    age: '12002'
};
const { key } = obj2, res = __rest(obj2, ["key"]);
console.log(res);
//# sourceMappingURL=test.js.map