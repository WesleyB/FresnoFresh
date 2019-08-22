// Saves the pop up html to add into website
let popUpTemplate = `
                <div class="pop-up">
                    <div class="remove-pop-up">
                        <div onclick="PopUp.exit()" class="remove-pop-up-btn-wrap">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="sign-up-wrap">
                        <h1>Sign Up</h1>
                        <div class="image-wrap">
                            <img class="profile-img" src="#" alt="">
                        </div>
                        <div class="input-wrap image-wrap">
                            <span style="color:red;"></span>
                            <!-- <button class="files-btn"> -->
                            <label class="files" for="files">Choose Image</label>
                            <!-- </button> -->
                            <input id="files" type="file" accept='image/*' />
                        </div>
                        <form>
                            <div class="input-wrap">
                                <input placeholder="First Name" type="text">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span class="form-text text-muted">Please enter a first name!</span>
                            <div class="input-wrap">
                                <input placeholder="Last Name" type="text">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="input-wrap">
                                <input placeholder="Email" type="email">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span class="form-text text-muted">Please enter a valid email!</span>
                            <div class="input-wrap">
                                <input placeholder="Password" type="password">
                                <div class="sign-up-icon-wrap">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span class="form-text text-muted">Please enter a valid password!</span>
                            <div class="input-wrap">
                                <button class="submit">Sign Up</button>
                            </div>
                            <span>Already have an account? <a href="#">Log In</a></span>
                        </form>
                    </div>
                </div>`;

// Variables for getting styles from the pop up, and body tag
let position = document.getElementsByTagName('body')[0];

// Adds the pop up html to the website
position.innerHTML += popUpTemplate;

let popUp = document.getElementsByClassName('pop-up')[0];



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
    }
}

let PopUp = new scripts();



// Allows for website to get profile images from user
let img = document.getElementsByClassName('profile-img')[0];
let input = document.querySelector('input[type="file"]');

// Reads the image given and converts it to use as a src attribute
input.addEventListener('change', (event) => {
    console.log(input.files);
    let reader = new FileReader();
    reader.onload = () => {
        img.src = reader.result;
    }
    reader.readAsDataURL(input.files[0])
}, false)