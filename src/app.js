import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

////// my code from here

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domains = ['com', 'es', 'dev', 'io', 'net'];

  for(let i = 0; i < pronoun.length; i++) {
    for(let j =0; j < adj.length; j++) {
      for(let n = 0; n < noun.length; n++) {
        for(let d = 0; d < domains.length; d++) {
          console.log(pronoun[1] + adj[j] + noun[n] + '.' + domains[d]);
        }
      }
    }
  }