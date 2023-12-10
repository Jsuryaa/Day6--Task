//A.
class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movieDetails = new movie("LIO","NETFLIX", "rt-5");
console.log(movieDetails);


//B.
  class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movie1 = new movies("VALIMAI","Zee studios");
console.log(movie1);

const movie2 = new movies("Thunivu","Zee studios","PG-4");
console.log(movie2);


//C. 
class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    
}

let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Zee Studios", "5");
let movie3 = new Moviee("Kantara", "Zee Studios", "PG");
let movie4 = new Moviee("Vikram", "Zee Studios", "PG-5");
let movie5 = new Moviee("veeram", "Zee Studios", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
console.log(movieArray); 


//D.
class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);