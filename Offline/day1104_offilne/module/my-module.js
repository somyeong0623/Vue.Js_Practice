function cube(x) {
    return x * x;
}

function hello(str) {
    return "hello" + str;

}


let user = {
    num: 123,
    name: '박지현',
    address: '회기'

}

const foo = Math.PI * 2;

//named export 
export { cube, hello, user, foo };

// default export-1번만 허용됨 
export default  { 
    id: 'ssafy',
    name:  '이다운'
    
}
