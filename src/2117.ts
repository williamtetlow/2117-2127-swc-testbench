// @ts-nocheck

const returnValue = "asdasd";
class TestClass2 {
  @deco public testProperty: Date;
}
function deco(target: any, key: string) {
  // do something
}

const instance = new TestClass2();

console.log(instance.hasOwnProperty("testProperty"));
