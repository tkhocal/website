


// init global vars
var displayArea;
var Mottolist = [   `Experience Local Classes`,
                    `Find Your Passion`,
                    `You Want It? We've Got It`,
                    `Yolo Right?`,
                    'Volunteer As Tribute!',
                    `Find Hot Single Classes Near You!`,
                    `Take The Red Pill Neo!`,
                    `Don't Worry, We Won't Bite`,
                    `Just Keep Trying Till You Run Out of Cake`,
                    `Are YOU Bad enough to Rescue the President?`,
                    `Revolutionize Your Hobbies`
                    ];

function init(){
    // find scrolling-text div
    displayArea = document.getElementById("changing-motto")
    
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function cycleIn(node){
    node.classList.remove("entering");
    node.classList.add("leaving");
}

function cycleOut(node){
    node.classList.remove("leaving");
    node.classList.add("entering");
}

async function cycleMottos(){
    var index = 0;
    while(true){
        cycleIn(displayArea);
        index += 1;
        if (index == Mottolist.length){
            index = 0;
        }
        await sleep(500);
        displayArea.innerHTML = Mottolist[index];
        cycleOut(displayArea)
        await sleep(5000);;
    }
};


window.onload = function(){
    
    init();
    cycleMottos();
};
