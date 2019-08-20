// TEMPORARY FILLER DATA FOR POSTS
let firstNames = ["Elma", "WIllow", "Alex", "Jesenia", "Olivia", "Kenny", "Riley", "Julie"];

let LastNames = ["Sanches", "Smith", "Daniels", "Alvarez", "Holt", "Stuart", "Geary", "Arias"];

let profileImgs = ["https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80",
    "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80",
    "https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
];

let postTitles = ["Dairy has spare Milk", "Have some Food", "Watermelon on sale!", "This summer's harvest",
    "I have flowers not food haha", "Giving out food for organizations", "I have flour for baking",
    "Anyone want quality squash farming seeds?"
];



let postDescription = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sequi magni odio?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem repellat cumque suscipit eius similique asperiores nihil ipsam exercitationem.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempore a adipisci quo. Sapiente magnam facilis sed soluta nisi architecto?",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, provident minus enim neque, repellendus voluptate earum voluptatem blanditiis velit sint obcaecati minima beatae tenetur ad voluptas tempora!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rerum earum provident!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas deleniti quasi aut praesentium tempore reiciendis.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet deleniti aperiam totam explicabo quaerat fuga vero beatae rem?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae similique repudiandae inventore, quas illo fugit dolorum, libero incidunt in fugiat cumque? Hic.",
];

let postImgs = ["https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    "https://images.unsplash.com/photo-1467165048326-5848fb9c0913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1548047635-559d51fe852c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1545587195-a625d872ca82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1528613526328-8c19bd037322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
];

let favorites = {
    profileImg: profileImgs[0],
    firstName: "a",
    lastName: "a",
    postTitle: "a",
    postDesc: "a",
    postImg: postImgs[0],
    randNum: "a",
}

let ownPosts = {
    profileImg: "a",
    firstName: "a",
    lastName: "a",
    postTitle: "a",
    postDesc: "a",
    postImg: "a",
    randNum: "a",
}

let randNum = [23, 52, 32, 75, 23, 13, 6, 45];
// END OF FILLER DATA

let post = "";

function initialize() {
    // Variables associated with post
    let postManage = document.getElementsByClassName('selected-feed')[0];



    this.start = () => {
        Init.highlight();
        Init.updatePostTemplate();
        Init.post();
    }

    this.highlight = () => {
        let a = document.getElementsByClassName('primary-selected')[0];
        a.style.backgroundColor = "rgb(193, 196, 202)";
    }

    this.post = () => {

        for (let i = 0; i < firstNames.length; i++) {
            favorites.profileImg = profileImgs[i];
            favorites.firstName = firstNames[i];
            favorites.lastName = LastNames[i];
            favorites.postTitle = postTitles[i];
            favorites.postDesc = postDescription[i];
            favorites.postImg = postImgs[i];
            favorites.randNum = randNum[i];
            Init.updatePostTemplate();
            postManage.innerHTML += post;
        }
    }

    this.updatePostTemplate = () => {
        post = `           <!-- Splash Page -->
<div class="post-container">
    <div class="post-wrap">
        <div class="post-description-wrap">
            <div class="post-creator-profile">
                <div class="post-image-wrap">
                    <img src="${favorites.profileImg}" alt="" class="post-profile-pic">
                </div>

                <div class="post-creator-desc">
                    <h6>${favorites.firstName} ${favorites.lastName}</h6>
                    <p class="post-title">${favorites.postTitle}</p>
                </div>
            </div>

            <div class="post-text-wrap">
                <p class="post-text">${favorites.postDesc}</p>
            </div>
        </div>

        <div class="post-main-img-wrap">
            <img src="${favorites.postImg}" alt="" class="post-profile-pic">
        </div>

        <div class="likes-wrap">
            <i class="fa fa-heart-o"></i>
            <p class="total-likes">${favorites.randNum}</p>
        </div>

        <div class="post-hr"></div>

        <!-- No Need to edit this atm
        <div class="asdf1back-wrap">
            <div class="asdf1back-type">
                <div class="asdf4">d</div>
                <h4>Like</h4>
            </div>
            <div class="asdf1back-type">
                <div class="asdf4">d</div>
                <h4>Comment</h4>
            </div>
        </div>
        -->

    </div>
</div>`;
    }
}

let Init = new initialize();



function action() {

    // Variables associated with the search bar
    let search = document.getElementsByClassName('search-bar')[0];
    let icon = document.getElementsByClassName('fa-search')[0];
    let input = document.getElementsByClassName('search-input')[0];
    let searchVal = "";

    // Highlights search bar and returns information that may have been searched
    this.searchFocus = () => {
        search.style.backgroundColor = "white";
        icon.style.color = "black";
        input.value = searchVal;
    }

    // Empties search bar but holds previous search
    this.searchBlur = () => {
        search.style.backgroundColor = "rgb(61, 106, 124)";
        icon.style.color = "rgb(194, 189, 189)";
        searchVal = input.value;
        input.value = "";
    }

    this.dropDown = () => {
        let options = document.getElementsByClassName('individual-option-wrap');
        let optionsWrap = document.getElementsByClassName('user-options')[0];

        if (options[1].className === 'individual-option-wrap') {
            for (let i = 1; i < options.length - 1; i++) {
                options[i].className += ' test2';
                console.log(options[i].className);
            }
            optionsWrap.className += ' dropped-options';
            options[options.length - 1].className += ' test2 create-post-option'

        } else {
            for (let i = 1; i < options.length; i++) {
                options[i].className = 'individual-option-wrap';
            }
            optionsWrap.className = 'user-options';
        }
    }

}

let Interact = new action();



function managePost() {

    this.changeToFavs = () => {

    }

    this.changeToOwnPosts = () => {

    }

    this.post = () => {
        console.log("Inactive function atm");
    }
}

let Post = new managePost();