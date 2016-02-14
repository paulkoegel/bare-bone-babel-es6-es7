'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PI = 3.14159;

var Foo = function () {
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, [{
    key: 'render',
    value: function render() {
      return '<h1>Some Headline</h1>';
    }
  }]);

  return Foo;
}();

var Alert = function () {
  function Alert() {
    var _this = this;

    _classCallCheck(this, Alert);

    this.jim = function () {
      console.log(_this.greeting() + ' Jim');
    };
  }

  _createClass(Alert, [{
    key: 'greeting',
    value: function greeting() {
      return 'Hello';
    }
  }]);

  return Alert;
}();

var myAlert = new Alert();
setTimeout(myAlert.jim, 500);

var Bar = function Bar() {
  _classCallCheck(this, Bar);

  this.myProp = 42;

  console.log('Bar class properties:', this.myProp, Bar.myClassProp);
};

Bar.myClassProp = 'ERM';

var bar = new Bar();
