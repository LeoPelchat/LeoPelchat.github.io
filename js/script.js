
//COMMENT LES QUESTIONS SONT CONSTRUITES
class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
//DIRE QUE LA RÉPONSE EST LE BON CHOIX (reçoit choix du joueur et compare avec bonne réponse)   
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  //LES QUESTIONS (en tableau)-----------------------------------------------------------------------------------------------------
  let questions = [
    new Question("Qui est le meilleur joueur de hockey de tout les temps?", ["Wayne Gretzky", "Glenn Wetzky", "Wain Glenski", "Cole Caufield"], "Wayne Gretzky"),
    new Question("Quel artiste québécois chante «Je Joue De La Guitare»?", ["Paul Piché","Émile Bilodeau", "Plume Latraverse", "Jean Leloup"], "Jean Leloup"),
    new Question("Quelle compagnie n'est pas suédoise?", ["Spotify","Volvo", "LEGO", "IKEA"], "LEGO"),
    new Question("Quel est le nom de la microbrasserie située à Ham-Nord?", ["Jackalhop","La Souche", "L'Hermite", "La Grange Pardue"], "La Grange Pardue"),
    new Question("Quel groupe de musique est américain?", ["Queen","The Beatles", "Coldplay", "Nirvana"], "Nirvana")
  ];
  
//Constructeur du quiz
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
//va chercher le numéro de la prochaine question pour l'afficher
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
//DONNE UN POINT SI BONNE RÉPONSE
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
//retourne vrai si:
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  const display = {
  //sert de patron pour plus tard (reçoit un id et du texte et l'affiche dans le HTML)
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
  //quoi afficher à la fin du Quiz
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
        <button type="button" id="rejouer" onclick="rejouer()">Rejouer</button>`;
  //pour que le bouton du footer reste à la bonne place à la fin
    this.elementShown("quiz", endQuizHTML);
    let button = document.getElementById("button");
    let footer = document.getElementById("monFooter");
    let displayActuel = footer.style.display;
    if(displayActuel === "none"){
        button.style.position = "absolute";
        button.style.bottom = "0";
    }
    else{
        button.style.position = "absolute";
        button.style.bottom = "10%";
    }
    },
    //affiche la question
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  //lorsque l'utilisateur click sur son choix, cela capte le choix
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // affichage choix + prise en compte du choix
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    //affiche le Question 1 sur 5
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Logique du jeu 
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Envoie le signal de lancer le jeu
  let quiz = new Quiz(questions);
  quizApp();


//affiche le bouton rejouer à la fin
function afficherBoutonRejouer(){
  let rejouer = document.getElementById("rejouer");
  rejouer.style.display = "grid";
  }
//rafraichis la page pour rejouer
function rejouer(){
  location.reload();
}




