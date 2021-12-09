let trivia = {
    // playerCategory: "",
    // playerQuestion: "",
    // playerAnswer: "",
    // playerResult: "",
    // categories: [],
    // categoryQuestions: [],
    // incorrectAnswers: [[],[],[],[],[]],
    // correctAnswer: [],
    listCategories: function() {    
       
        //step 1: URL
        let url = 'https://api.trivia.willfry.co.uk/categories'
                
        //step 2: XMLHttpRequest    new is constructor method that gets applied to XMLHttpRequest //that creates a new object to store inside XMLHttpRequest
        const xhr = new XMLHttpRequest()
        console.log(xhr)

        //step 3: XMLHttpRequest.open()
        xhr.open('GET', url)  //GET, PUT, POST and DELETE

        //step 4: XMLHttpRequest.onload
        xhr.onload = function() {
            console.log(JSON.parse(xhr.responseText))

            let optionCategory = "<option value='0'>Select</option>"
            
            for( let i = 0; i < JSON.parse(xhr.responseText).length; i++) {
                optionCategory += '<option value="' + JSON.parse(xhr.responseText)[i].value + '">' + JSON.parse(xhr.responseText)[i].label + "</option>" 
            }   
            document.getElementById("categories").innerHTML  = optionCategory  
        }
        console.log(xhr.responseText)

        //step 5: XMLHttpRequest.send
        xhr.send()
    },
    
    listQuestionsAndAnswers: function(){
        playerCategory = categories.options[categories.selectedIndex].value  //category selected by player
       
        document.getElementById("q1").hidden = false
        document.getElementById("categories").disabled = true
        document.getElementById("question1").hidden = false
        document.getElementById("answers1").hidden = false     

        //step 1: URL
        let triviaQuestionsURL = `https://api.trivia.willfry.co.uk/questions?categories=${playerCategory}&limit=5`
              
        //step 2: XMLHttpRequest    new is constructor method that gets applied to XMLHttpRequest //that creates a new object to store inside XMLHttpRequest
        const xhr = new XMLHttpRequest()
        console.log(xhr)

        //step 3: XMLHttpRequest.open()
        xhr.open('GET', triviaQuestionsURL)  //GET, PUT, POST and DELETE

        //step 4: XMLHttpRequest.onload
        xhr.onload = function() {
            console.log(JSON.parse(xhr.responseText))
            this.correctAnswer = []
            this.incorrectAnswers = [[],[],[],[],[]]
            let categoryQuestion = ""
            
            for( let i = 0; i < JSON.parse(xhr.responseText).length; i++) {
                this.correctAnswer.push(JSON.parse(xhr.responseText)[i].correctAnswer)   //PUSH to correctAnswer array
                
                categoryQuestion = JSON.parse(xhr.responseText)[i].question 
                document.getElementById("question" + (i+1)).innerHTML = categoryQuestion
                  
                let optionAnswer = "<option value='0'>Select Answer</option>"
                
                for( let j = 0; j < JSON.parse(xhr.responseText)[i].incorrectAnswers.length; j++) {
                    this.incorrectAnswers.push(JSON.parse(xhr.responseText)[i].incorrectAnswers[j])   //PUSH to correctAnswer array
                   
                    //optionAnswer += '<option id="' + JSON.parse(xhr.responseText)[i].incorrectAnswers + '" value="' + JSON.parse(xhr.responseText)[i].incorrectAnswers + '">' + JSON.parse(xhr.responseText)[i].question + "</option>" 
                    optionAnswer += '<option value="' + JSON.parse(xhr.responseText)[i].incorrectAnswers[j] + '">' + JSON.parse(xhr.responseText)[i].incorrectAnswers[j] + "</option>"           
                } 

                optionAnswer += '<option  id="cAnswer' + (i+1) + '" value="' + JSON.parse(xhr.responseText)[i].correctAnswer + '">' + JSON.parse(xhr.responseText)[i].correctAnswer + "</option>"                    
                
                document.getElementById("answers" + (i+1)).innerHTML = optionAnswer  
                
            }   
            
        }
        console.log(xhr.responseText)

        //step 5: XMLHttpRequest.send
        xhr.send()

    },

    checkAnswer1: function(){
        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer1 = document.getElementById("answers1").value 
        this.correctAnswer1 = document.getElementById("cAnswer1").value
     
        if (this.playerAnswer1 == this.correctAnswer1) {         
            document.getElementById("checkAnswer1").innerHTML = "You are Correct!"
            document.getElementById("answers1").disabled = true; 
            //document.getElementById("q2").hidden = false; 
            
            document.getElementById("q2").hidden = false
            document.getElementById("question2").hidden = false; 
            document.getElementById("answers2").hidden = false; 

        } else {
            document.getElementById("checkAnswer1").innerHTML = "Nope! Select again."
        }
    },    
    checkAnswer2: function(){

        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer2 = document.getElementById("answers2").value 
        this.correctAnswer2 = document.getElementById("cAnswer2").value
    
        if (this.playerAnswer2 == this.correctAnswer2) {
            document.getElementById("checkAnswer2").innerHTML = "You are Correct!" 
            document.getElementById("q3").hidden = false
            document.getElementById("answers2").disabled = true; 
            document.getElementById("question3").hidden = false; 
            document.getElementById("answers3").hidden = false;
        } else {
            document.getElementById("checkAnswer2").innerHTML = "Nope! Select again."
        }
    },
    checkAnswer3: function(){

        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer3 = document.getElementById("answers3").value 
        this.correctAnswer3 = document.getElementById("cAnswer3").value

        if (this.playerAnswer3 == this.correctAnswer3) {
            document.getElementById("checkAnswer3").innerHTML = "You are Correct!" 
            document.getElementById("q4").hidden = false
            document.getElementById("answers3").disabled = true; 
            document.getElementById("question4").hidden = false; 
            document.getElementById("answers4").hidden = false;
            
        } else {
            document.getElementById("checkAnswer3").innerHTML = "Nope! Select again."
        }
    },
    checkAnswer4: function(){

        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer4 = document.getElementById("answers4").value 
        this.correctAnswer4 = document.getElementById("cAnswer4").value

        if (this.playerAnswer4 == this.correctAnswer4) {
            document.getElementById("checkAnswer4").innerHTML = "You are Correct!" 
            document.getElementById("q5").hidden = false
            document.getElementById("answers4").disabled = true; 
            document.getElementById("question5").hidden = false; 
            document.getElementById("answers5").hidden = false;
        } else {
            document.getElementById("checkAnswer4").innerHTML = "Nope! Select again."
        }
    },
    checkAnswer5: function(){

        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer5 = document.getElementById("answers5").value 
        this.correctAnswer5 = document.getElementById("cAnswer5").value

        if (this.playerAnswer5 == this.correctAnswer5) {
            document.getElementById("checkAnswer5").innerHTML = "You are Correct!" 
            document.getElementById("q5").hidden = false
            document.getElementById("answers5").disabled = true; 
            document.getElementById("button2").hidden = true;
            document.getElementById("button1").hidden = false;

            let confirmAction = confirm("You answered all correctly!!  Would you like to play again?")
            if (confirmAction) {
                location.reload(true)
            } else {
                //alert("no")
            }

        } else {
            document.getElementById("checkAnswer5").innerHTML = "Nope! Select again."
        }
    },
        


}

       
    
         
