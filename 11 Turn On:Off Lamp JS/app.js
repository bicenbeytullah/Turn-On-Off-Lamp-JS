//let body = document.body;

function light(value) {
    let pic ;
      if (value == 0 ) { 
          pic = "lightoff.jpeg";
          //body.style.background = "black";
      } 
      else {
          pic = "lighton.jpeg";
          //body.style.background = "yellow";
      }
      document.getElementById("picoff").src = pic;
      console.log(pic)
};


