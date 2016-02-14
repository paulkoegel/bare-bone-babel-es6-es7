const PI = 3.14159;




class Foo {
  render() {
    return '<h1>Some Headline</h1>';
  }
}





class Alert {

  greeting() {
    return 'Hello';
  }

  jim = () => {
    console.log(`${this.greeting()} Jim`);
  };

}

let myAlert = new Alert;
setTimeout(myAlert.jim, 500);




class Bar {
  myProp = 42;
  static myClassProp = 'ERM';

  constructor() {
    console.log('Bar class properties:', this.myProp, Bar.myClassProp);
  }
}

let bar = new Bar;


let youngPeter = { first: 'Peter', last: 'Parker', age: 20 };

let oldPeter = { ...youngPeter, age: 70 };
let stillPeter = { first: 'John', ...youngPeter };


let ids = [1, 2, 3, 4];
let newIds = [77, ...ids, 99]; // [77, 1, 2, 3, 4, 99]
