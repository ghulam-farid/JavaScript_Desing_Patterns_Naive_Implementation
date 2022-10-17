const PageState = function () {
   this.current_state = new homeState();
   
   this.init = function (){
      this.change(new homeState());
   }

   this.change = function (state) {
      this.current_state = state;
   }
}

const homeState = function () {
   document.getElementById('heading').textContent = null;
   document.getElementById('content').innerHTML = `
   <div class="card" style="width: 18rem;">
   <div class="card-header">
     Home Page
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">An item</li>
     <li class="list-group-item">A second item</li>
     <li class="list-group-item">A third item</li>
   </ul>
 </div>
   `;
}

const aboutState = function () {
   document.getElementById('heading').textContent = 'About Us';
   document.getElementById('content').innerHTML = `
      <p>This is the about page</p>
   `;
}

const contactState = function () {
   document.getElementById('heading').textContent = 'Contact Us';
   document.getElementById('content').innerHTML = `
      <form>
         <div class="form-group
            <label>Name</label>
            <input type="text" class="form-control">
         </div>
         <div class="form-group
            <label>Email address</label>
            <input type="email" class="form-control">
         </div>
         <button type="submit" class="btn btn-primary">Submit</button>
      </form>
   `;
}

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// console.log(home, about, contact);

home.addEventListener('click', (e)=>{
   page.change(new homeState);

   e.preventDefault();
});

about.addEventListener('click', (e)=>{
   page.change(new aboutState);

   e.preventDefault();
});

contact.addEventListener('click', (e)=>{
   page.change(new contactState);

   e.preventDefault();
});