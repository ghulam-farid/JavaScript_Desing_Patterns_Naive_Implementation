/* // Mediator Pattern 

const User = function  (name) {
   this.name = name;
   this.chatroom = null;
}

User.prototype = {
   send : function (message, to) {
      this.chatroom.send(message, this, to);
   },
   receive: function (message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
   }
}

const Chatroom = function  () {
   let users = {}; // list of users

   return {
      register: function (user) {
         users[user.name] = user;
         user.chatroom = this;
      },
      send: function (message, from, to) {
         if(to){
            // Single user message
            to.receive(message, from);
         }else{
            // Mass message
            for (const key in users) {
               if(users[key] !== from){
                  users[key].receive(message, from);
               }
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

nouman.send('Hello Ali', ali);
ali.send('Hello Nouman', nouman);

nouman.send('Hello Everyone');
 */

const User = function (name) {
   this.name = name;
   this.chatroom = null;
}

User.prototype = {
   send:function  (message, to) {
      this.chatroom.send(message, this, to);
   },
   receive: function (message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
   }
}

const Chatroomm = function (){
   let users = {};

   return {
      register: function (user) {
         users[user.name] = user;
         user.chatroom = this;
      },
      send: function (message, from, to) {
         if(to){
            to.receive(message, from);
         }else{
            for (const key in users) {
               if(users[key] !== from){
                  users[key].receive(message, from);
               }
            }
         }
      }
   }
}

const nouman = new User('Nouman');
const ali = new User('Ali');
const saad = new User('Saad');

const chatroom = new Chatroomm();
chatroom.register(nouman);
chatroom.register(ali);
chatroom.register(saad);


nouman.send('Hello Everyone');
// ali.send('Hello Nouman', nouman);

