// Singleton Design Pattern Manifestation of the module pattern
// A single object is an immediate anonymous function and can only return one object at a time

/* const app = (function () {
   let instance;

   function createInstance() {
      const obj = new Object('I am an instance');
      return obj;
   }
   function getInstance () {
      if(!instance) {
         instance = createInstance();
      }
      return instance;
   }
   return {
      getInstance: getInstance
   }
})();

const instanceA = app.getInstance();
const instanceB = app.getInstance();

console.log(instanceA === instanceB); */ // true

// Singleton Design Pattern Manifestation of the module pattern- Example 2
/* const Student = (()=>{
   let student_instance;

   function createStudentInstace () {
      const obj = new Object('I am a student');
      return obj;
   }
   
   return {
      getStudentInstance : function () {
         if(!student_instance) {
            student_instance = createStudentInstace();
         }
         return student_instance;
      } 
   }
})();

const studentA = Student.getStudentInstance();
const studentB = Student.getStudentInstance();
console.log(studentB);
console.log(studentA === studentB); // true */

// Singleton Design Pattern Manifestation of the module pattern- Example 3

let instance;
let counter = 0;

class Counter {
   constructor(){
      if(!instance) {
         instance = this;
         return instance;
      }else{
         throw new Error('Cannot create another instance of Counter');
      }
   }
   getInstance(){
      return instance;
   }
   getCount(){
      return counter;
   }
   incrementCount(){
      ++counter;
   }
   decrementCount(){
      --counter;
   }
};

const counterA = new Counter();
console.log(counterA.getCount());
counterA.incrementCount();
console.log(counterA.getCount());