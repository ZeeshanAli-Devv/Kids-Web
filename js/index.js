const getResult = (event) =>{
    event.preventDefault();

    const letter = document.getElementById("letter").value.trim().toLowerCase();
    const title = document.getElementById("title");
    const pic = document.getElementById("pic");

    if(letter == 'a'){
        title.innerHTML = "Apple";
        pic.src = "Assets/apple.jpg";
    }
    else if(letter == 'b'){
        title.innerHTML = "Ball";
        pic.src = "Assets/ball.jpg";
    }
    else if(letter == 'c'){
        title.innerHTML = "Cat";
        pic.src = "Assets/cat.jpg";
    }
    else if(letter == 'd'){
        title.innerHTML = "Dog";
        pic.src = "Assets/dog.jpg";
    }
    else if(letter == 'e'){
        title.innerHTML = "Elephant";
        pic.src = "Assets/elephant.jpg";
    }
    else if(letter == 'f'){
        title.innerHTML = "Fruit";
        pic.src = "Assets/fruit.jpg";
    }
    else if(letter == 'g'){
        title.innerHTML = "Giraffe";
        pic.src = "Assets/giraffe.jpg";
    }
    else if(letter == 'h'){
        title.innerHTML = "Hen";
        pic.src = "Assets/hen.jpg";
    }
    else if(letter == 'i'){
        title.innerHTML = "Ice Cream";
        pic.src = "Assets/ice-cream.jpg";
    }
    else if(letter == 'y'){
        title.innerHTML = "Yoyo";
        pic.src = "Assets/yoyo.jpg";
    }
    else if(letter == 'z'){
        title.innerHTML = "Zebra";
        pic.src = "Assets/zebra.jpg";
    }
    else{
        title.innerHTML = "Not Found";
        pic.src = "Assets/not found.jpg";
    }
}