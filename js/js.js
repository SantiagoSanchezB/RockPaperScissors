let Papel = 0;
let Piedra = 1;
let Tijera = 2;
let Election = "";
let random = Math.floor(Math.random()*3);

if (random === 0) {
    Election = "Papel";
}else if (random === 1) {
    Election = "Piedra";
}else if (random === 2) {
    Election = "Tijera";
}
console.log(random);

function calculoPapel() {
    document.getElementById("Election").innerHTML = "<h5 class='offset-md-4'>Machine Election</h5><img src='images/"+ Election +".png' class='card-img-top' alt='PaperImage'><div class='card-body'><p class='card-text'>"+ Election +"</p></div>";

    if (random === 0) {
        document.getElementById("Result").innerHTML = "<div class='alert alert-primary d-flex align-items-center offset-md-1' role='alert'><div><p id='text-f'>Draw</p></div></div>";
    }else if (random === 1){
        document.getElementById("Result").innerHTML = "<div class='alert alert-success d-flex align-items-center offset-md-1' role='alert'><div><p id='text-f'>Win</p></div></div>";
    }else if (random === 2) {
        document.getElementById("Result").innerHTML = "<div class='alert alert-danger d-flex align-items-center offset-md-1' role='alert'><div><p id='text-f'>Lose</p></div></div>";
    }
}

function calculoPiedra() {
    document.getElementById("Election").innerHTML = "<h5 class='offset-md-4'>Machine Election</h5><img src='images/"+ Election +".png' class='card-img-top' alt='PaperImage'><div class='card-body'><p class='card-text'>"+ Election +"</p></div>";

    if (random === 1) {
        document.getElementById("Result").innerHTML = "<div class='alert alert-primary d-flex align-items-center offset-md-1' role='alert'><div><p id='text-f'>Draw</p></div></div>";
    }else if (random === 2){
        document.getElementById("Result").innerHTML = "<div class='alert alert-success d-flex align-items-center offset-md-1' role='alert'><div><p id='text-f'>Win</p></div></div>";
    }else if (random === 0) {
        document.getElementById("Result").innerHTML = "<div class='alert alert-danger d-flex align-items-center offset-md-1' role='alert'><div><p id='text-f'>Lose</p></div></div>";
    }
}

function calculoTijera() {
    document.getElementById("Election").innerHTML = "<h5 class='offset-md-4'>Machine Election</h5><img src='images/"+ Election +".png' class='card-img-top' alt='PaperImage'><div class='card-body'><p class='card-text'>"+ Election +"</p></div>";

    if (random === 2) {
        document.getElementById("Result").innerHTML = "<div class='alert alert-primary d-flex align-items-center offset-md-1' role='alert'><div><p id='text-f'>Draw</p></div></div>";
    }else if (random === 0){
        document.getElementById("Result").innerHTML = "<div class='alert alert-success d-flex align-items-center offset-md-1' role='alert'><div><p id='text-f'>Win</p></div></div>";
    }else if (random === 1) {
        document.getElementById("Result").innerHTML = "<div class='alert alert-danger d-flex align-items-center offset-md-1' role='alert'><div><p id='text-f'>Lose</p></div></div>";
    }
}