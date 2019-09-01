// Saves the pop up html to add into website
let popUpTemplate = `
                <div class="pop-up">
                    <div class="remove-pop-up">
                        <div onclick="PopUp.exit()" id="test" class="remove-pop-up-btn-wrap">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="sign-up-wrap">
                        <h1 class="form-header">Sign Up</h1>
                        <div class="image-wrap">
                            <img class="profile-img" src="#" alt="">
                        </div>
                        <div class="input-wrap image-wrap">
                            <!-- <button class="files-btn"> -->
                            <label class="file-label files" for="files">Choose Image</label>
                            <!-- </button> -->
                            <input id="files" type="file" accept='image/*' />
                        </div>
                        <form>

                            <div class="input-wrap">
                                <input class="input-data" placeholder="First Name" type="text">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span class="form-text text-muted input-data">Please enter a first name!</span>
                            <div class="input-wrap">
                                <input placeholder="Last Name" type="text">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </div>
                            </div>

                            <div class="input-wrap">
                                <input class="input-data" placeholder="Email" type="email">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span class="form-text text-muted input-data">Please enter a valid email!</span>
                            <div class="input-wrap">
                                <input class="input-data" placeholder="Password" type="password">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span class="form-text text-muted input-data">Please enter a valid password!</span>
                            <div class="input-wrap">
                                <button onclick="FormInput.prompt(); return false" class="submit">Sign Up</button>
                            </div>
                            <span class="form-type">Already have an account? <a onclick="FormInput.logIn()" href="#">Log In</a></span>
                        </form>
                    </div>
                </div>`;

// Variables for getting styles from the pop up, and body tag
let position = document.getElementsByTagName('body')[0];

// Adds the pop up html to the website
position.innerHTML += popUpTemplate;

let popUp = document.getElementsByClassName('pop-up')[0];
position.style.overflow = 'scroll';
position.style.position = 'relative';
popUp.style.display = 'none';




function scripts() {
    // Makes the page scrollable again and removes pop up
    this.exit = () => {
        position.style.overflow = 'scroll';
        popUp.style.display = 'none';
    }

    // Shows the create account pop up
    this.show = () => {
        position.style.overflow = 'hidden';
        popUp.style.display = 'block';
        FormInput.load();
    }
}

let PopUp = new scripts();



// Allows for website to get profile images from user
let img = document.getElementsByClassName('profile-img')[0];
let inputFile = document.querySelector('input[type="file"]');

img.src = 'https://static.thenounproject.com/png/15724-200.png';

// Reads the image given and converts it to use as a src attribute
inputFile.addEventListener('change', (event) => {
    console.log(inputFile.files);
    let reader = new FileReader();
    reader.onload = () => {
        img.src = reader.result;
        FormInput.updateImg();
    }
    reader.readAsDataURL(inputFile.files[0])
}, false)

function inputs() {
  let inputDataHolder = document.getElementsByClassName('input-data');
  let formType = document.getElementsByClassName('form-type')[0];
  let inputForm = document.getElementsByClassName('input-wrap');
  let formHeader = document.getElementsByClassName('form-header')[0];
  let fileLabel = document.getElementsByClassName('file-label')[0];
  let button = document.getElementsByClassName('submit')[0];
  let start = 0;
  let totalPrompts = 3;
  let defaultImg = 'https://static.thenounproject.com/png/15724-200.png';
  let chosenImg = defaultImg;
  
  // Evens are inputs, odds are span tags (0 - 5)
  
  this.prompt = ()=> { 
    let promptCounter = 0;
    
    for(let i = start; i < 6; i += 2){
        if(inputDataHolder[i].value === ""){
          inputDataHolder[i + 1].style.display = "block";
        } else {
          inputDataHolder[i + 1].style.display = "none";
          promptCounter += 1;
          if(promptCounter === totalPrompts) {
            console.log("Submit succesful");
            position.style.overflow = 'scroll';
            popUp.style.display = "none";
          }
        }
     }
  }
  
  this.load = ()=> {
      for(let i = 1; i < 6; i += 2){
        inputDataHolder[i].style.display = "none";
      }
  }
  
  this.logIn = ()=> {
      FormInput.load();
      formType.innerHTML = 'Don\'t have an account? <a onclick="FormInput.signUp()" href="#">Sign Up</a>';
      formHeader.innerHTML = 'Log In';
      inputForm[1].style.display = 'none';
      inputForm[2].style.display = 'none';
      start = 2;
      totalPrompts = 1;
      fileLabel.style.display = 'none';
      img.src = defaultImg;
      button.innerHTML = 'Log In';
  }
  
  this.signUp = ()=> {
      FormInput.load();
      formType.innerHTML = 'Already have an account? <a onclick="FormInput.logIn()" href="#">Log In</a>';
      formHeader.innerHTML = 'Sign Up';
      inputForm[1].style.display = 'block';
      inputForm[2].style.display = 'block';
      start = 0;
      totalPrompts = 3;
      fileLabel.style.display = 'block';
      img.src = chosenImg;
      button.innerHTML = 'Sign Up';
  }
  
  this.updateImg = ()=> {
    chosenImg = img.src;
    console.log('img');
  }
}


let FormInput = new inputs();