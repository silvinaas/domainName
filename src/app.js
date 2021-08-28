/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function dominio() {
    let domain = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let e = 0; e < adj.length; e++) {
        for (let a = 0; a < noun.length; a++) {
          let pron = pronoun[i];
          let adjetive = adj[e];
          let sust = noun[a];

          domain.push(pron + adjetive + sust);
        }
      }
    }
    return domain;
  }
  console.log(dominio());
};
