// Module Pattern Basic Structure

/* (function(){
      // Declare private vars and functions
   
      return {
         // Declare public vars and functions
      }
})(); */

// Standard Module Pattern

/* const UIController = (function () {
   let _name = "Ghulam Farid";

   const changeName = function () {
      const element = document.querySelector("h1");
      element.textContent = name;
   }
   return {
      callChangeName: function () {
         changeName();
      }
   }
})();

UIController.callChangeName(); 
console.log(UIController.name); // undefined 
*/

// Revealing Module Pattern

/* const itemController = (function () {
   let _item = [];
   
   setItem = function (item) {
      _item.push(item);
   }
   getItem = function (id) {
      return _item.find(item => item.id === id);
   }

   return {
      setItem: setItem,
      getItem: getItem
   };

})();

itemController.setItem({id: 1, name: "Ghulam Farid"});
itemController.setItem({id: 2, name: "Nouman Ahmed"});

console.log(itemController.getItem(1)); */


// Standard Module Pattern Example 1
/* const student = (function  (name = 'Ghulam Farid', age = 22) {
   // Private members
   let _name = name;
   let _age = age;
   // Private methods
   const _setName = function (new_name) {
      _name = new_name;
      console.log('name is set to ' + _name);
   }
   const _setAge = function (new_age) {
      _age = new_age;
   }
   const getData = function () {
      return `Name: ${_name}, Age: ${_age}`;
   }
   // Public members
   return {
      callSetName: function (name) {
         return _setName(name);
      },
      callGetData: function () {
         return getData();
      }
   }
})('Babar Azam', 25);

console.log(student.callGetData());
student.callSetName('Faheem Ashraf');
console.log(student.callGetData()); */

/* for(var i = 0; i < 3; i++){
   setTimeout(()=> console.log(i), 1);
 }

// let i; */