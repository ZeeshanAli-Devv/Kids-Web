const getResult = (event) => {
  event.preventDefault();

  const letter = document.getElementById("letter").value.trim().toLowerCase();
  const title = document.getElementById("title");
  const pic = document.getElementById("pic");

  const data = {
    a: ["Apple", "Assets/apple.jpg"],
    b: ["Ball", "Assets/ball.jpg"],
    c: ["Cat", "Assets/cat.jpg"],
    d: ["Dog", "Assets/dog.jpg"],
    e: ["Elephant", "Assets/elephant.jpg"],
    f: ["Fruit", "Assets/fruit.jpg"],
    g: ["Giraffe", "Assets/giraffe.jpg"],
    h: ["Hen", "Assets/hen.jpg"],
    i: ["Ice Cream", "Assets/ice-cream.jpg"],
    y: ["Yoyo", "Assets/yoyo.jpg"],
    z: ["Zebra", "Assets/zebra.jpg"]
  };

  if (data[letter]) {
    title.innerHTML = data[letter][0];
    pic.src = data[letter][1];
  } else {
    title.innerHTML = "Not Found";
    pic.src = "Assets/not found.jpg";
  }
};
