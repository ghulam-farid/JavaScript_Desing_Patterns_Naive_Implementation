/*
 -  Factory Pattern (Factory Method) - a creational design pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.

         OR 
 
 - a way of creating interfaces for creating objects,but we can let subclasses decide which class to instantiate.
 - often used in an application to manage and maintain and manipulate collections of objects that are different but at the same time have many characteristics in common.
 - A good example of this pattern is a paid membership application, where you have different types of memberships, but they all share the same characteristics and methods.

 */

// Factory Pattern

/* const MemberFactory = function (name, type) {
   let member;
   
   if(type == 'simple'){
      member = new SimpleMemberShip(name);
   }else if (type == 'standard'){
      member = new StandardMemberShip(name);
   }else if (type == 'super'){
      member = new SuperMemberShip(name);
   }

   member.type = type;
   
   member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
   };

   return member;
}

const SimpleMemberShip = function  (name) {
   this.name = name;
   this.cost = '$5';
}

const StandardMemberShip = function  (name) {
   this.name = name;
   this.cost = '$10';
}

const SuperMemberShip = function  (name) {
   this.name = name;
   this.cost = '$20';
}

const members = [];

members.push(MemberFactory('John Doe', 'simple'));
members.push(MemberFactory('Chris Jackson', 'super'));
members.push(MemberFactory('Janice Williams', 'standard'));
members.push(MemberFactory('Tom Smith', 'simple'));

members.forEach(function (member) {
   member.define();
}); */

class MemberFactory {
  constructor(name, type) {
    let member;
    if (type == "simple") {
      member = new SimpleMemberShip(name);
    } else if (type == "standard") {
      member = new StandardMemberShip(name);
    } else if (type == "super") {
      member = new SuperMemberShip(name);
    }
    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  }
}

class SimpleMemberShip {
   constructor(name) {
      this.name = name;
      this.cost = "$5";
   }
}

class StandardMemberShip {
   constructor(name) {
      this.name = name;
      this.cost = "$10";
   }
}

class SuperMemberShip {
   constructor(name) {
      this.name = name;
      this.cost = "$20";
   }
}

const member = new MemberFactory("John Doe", "simple");
member.define();

/* const members = [];

members.push(new MemberFactory("John Doe", "simple"));
members.push(new MemberFactory("Chris Jackson", "super"));
members.push(new MemberFactory("Janice Williams", "standard"));
members.push(new MemberFactory("Tom Smith", "simple"));

members.forEach(function (member) {
   member.define();
}); */