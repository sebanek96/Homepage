{
    const welcome = () => {
        console.log("Welcome on my first webside");
    }

    const photoRemove = () => {
        photo.remove();
        button.remove();

        const button = document.querySelector("removeButton");
        const photo = document.querySelector(".photo");

        button.addEventListener("click", photoRemove);
        photoRemove();
    };

    welcome();
    
};








