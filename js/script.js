{
    const welcome = () => {
      console.log("Welcome on my first webside");
    };
  
    const button = document.querySelector(".removeButton");
  
    const photoRemove = () => {
      const photo = document.querySelector(".photo");
      photo.remove();
      button.remove();
    };
    
    button.addEventListener("click", photoRemove);
    welcome();
  }








