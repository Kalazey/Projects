let animals = {
    data: [
        {
            animalName: "Dog image 1",
            category: "Dog",
            image: "../images/Dog1.jpg"
        },
        {
            animalName: "Dog image 2",
            category: "Dog",
            image: "../images/Dog2.jpg"
        },
        {
            animalName: "Dog image 3",
            category: "Dog",
            image: "../images/Dog3.jpg"
        },
        {
            animalName: "Dog image 4",
            category: "Dog",
            image: "../images/Dog4.jpg"
        },
        {
            animalName: "Cat image 1",
            category: "Cat",
            image: "../Images/Cat1.jpg"
        },
        {
            animalName: "Cat image 2",
            category: "Cat",
            image: "../Images/Cat2.jpg"
        },
        {
            animalName: "Cat image 3",
            category: "Cat",
            image: "../Images/Cat3.jpg"
        },
        {
            animalName: "Cat image 4",
            category: "Cat",
            image: "../Images/Cat4.jpg"
        },
        {
            animalName: "Dolphin image 1",
            category: "Dolphin",
            image: "../Images/Dolphin1.jpg"
        },
        {
            animalName: "Dolphin image 2",
            category: "Dolphin",
            image: "../Images/Dolphin2.jpg"
        },
        {
            animalName: "Dolphin image 3",
            category: "Dolphin",
            image: "../Images/Dolphin3.jpg"
        },
        {
            animalName: "Dolphin image 4",
            category: "Dolphin",
            image: "../Images/Dolphin4.jpg"
        },
        {
            animalName: "Eagle image 1",
            category: "Eagle",
            image: "../Images/Eagle1.jpg"
        },
        {
            animalName: "Eagle image 2",
            category: "Eagle",
            image: "../Images/Eagle2.jpg"
        },
        {
            animalName: "Eagle image 3",
            category: "Eagle",
            image: "../Images/Eagle3.jpg"
        },
        {
            animalName: "Eagle image 4",
            category: "Eagle",
            image: "../Images/Eagle4.jpg"
        },
        {
            animalName: "Horse image 1",
            category: "Horse",
            image: "../Images/Horse1.jpg"
        },
        {
            animalName: "Horse image 2",
            category: "Horse",
            image: "../Images/Horse2.jpg"
        },
        {
            animalName: "Horse image 3",
            category: "Horse",
            image: "../Images/Horse3.jpg"
        },
        {
            animalName: "Horse image 4",
            category: "Horse",
            image: "../Images/Horse4.jpg"
        }
    ],
};

for (let i of animals.data){
    // Create Card
    let card = document.createElement("div");
    //card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide")
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("imageContainer");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //animal name
    let name = document.createElement("h5");
    name.classList.add("animalName");
    name.innerText = i.animalName.toUpperCase();
    container.appendChild(name);

    //Category
    let category = document.createElement("h6");
    category.innerText = i.category;
    container.appendChild(category);

    card.appendChild(container);
    document.getElementById("animals").appendChild(card);
}

//Parameter passed from button (Parameter same as category)
function filterAnimal(value){
    //button class mode
    let buttons = document.querySelectorAll(".buttonValue");
    buttons.forEach((button) => {
        //checl if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    // select all cards
    let elements = document.querySelectorAll(".card");
    //loop  through all cards
    elements.forEach((elt) => {
        //display all card on 'all' button click
        if (value == "all"){
            elt.classList.remove("hide");
        }
        else{
            //Check if elt contains category class
            if(elt.classList.contains(value)){
                //display elt based on category
                elt.classList.remove("hide");
            }
            else{
                //hide other elements
                elt.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initialisation
    let searchInput = document.getElementById("searchInput").value;
    let elements = document.querySelectorAll(".animalName");
    let cards = document.querySelectorAll(".card");
    
    //loop throught all elements
    elements.forEach((elements,index) => {
        // check if text includes the search value
        if(elements.innerText.includes(searchInput.toUpperCase())){
            //Display mathcing cards
            cards[index].classList.remove("hide");
        }
        else{
            //hide others cards
            cards[index].classList.add("hide");
        }
    })
})

// Initially display all animals
window.onload = () => {
    filterAnimal("all");
}