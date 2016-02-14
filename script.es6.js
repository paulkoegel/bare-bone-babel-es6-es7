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
