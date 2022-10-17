class EventObserver{
   constructor(){
      this.observers = [];
   }
   
   subscriber(fn){
      this.observers.push(fn);
      console.log(`You are now subscribed to ${fn.name}`);
   }

   unsubscribe(fn){
      this.observers = this.observers.filter(item=>{
         if(item !== fn){
            return item;
         }
      });
      console.log(`You are now unsubscribed from ${fn.name}`);
   }

   notify(){
      this.observers.forEach(item=>{
         item.call();
      });
   }
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function(){
   click.subscriber(getCurrentMilliSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
   click.unsubscribe(getCurrentMilliSeconds);
});

document.querySelector('.sub-s').addEventListener('click', function(){
   click.subscriber(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
   click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function(){
   click.notify();
});

function getCurrentMilliSeconds(){
   console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

function getCurrentSeconds(){
   console.log(`Current Seconds: ${new Date().getSeconds()}`);
}