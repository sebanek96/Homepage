{
  const welcome = () => {
    console.log("Welcome on my first webside");
  };

  const photoRemove = (button) => {

    const photo = document.querySelector(".photo");
    photo.remove();
    button.remove();

  };

  const init = () => {

    const button = document.querySelector(".removeButton");

    button.addEventListener("click", photoRemove,);

    welcome();
  }
  
  init();

}








