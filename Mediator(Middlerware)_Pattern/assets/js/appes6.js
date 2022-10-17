/* class User{
   constructor(name){
      this.name = name;
      this.chatroom = null;
   }
   send(message, to){
      this.chatroom.send(message, this, to);
   }
   receive(message, from){
      console.log(`${from.name} to ${this.name}: ${message}`);
   }
}

class Chatroom{
   constructor(){
      this.users = {};
   }
   register(user){
      this.users[user.name] = user;
      user.chatroom = this;
      console.log(user.chatroom);
   }
   send(message, from, to){
      if(to){
         to.receive(message, from);
      }else{
         for (const key in this.users) {
            if(this.users[key] !== from){
               this.users[key].receive(message, from);
            }
         }
      }
   }
}

const nouman = new User('Nouman');
const ali = new User('Ali');
const saad = new User('Saad');

const chatroom = new Chatroom();

chatroom.register(nouman);
chatroom.register(ali);
chatroom.register(saad);   

saad.send("Hello everybody"); */



// Kyle Sympson JS POST LinkedIn

function foo(x){
   console.log('foo !', x);
   return x;
 }
 
 class A{
   constructor(a){
     foo(a);
   }
 }
 
 class B extends A{
   whatever = foo(10);
   constructor(){
     super(100);
     this.another = foo(1000);
   }
 }
 
 var g = new B();