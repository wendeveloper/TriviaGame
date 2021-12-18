let trivia = {
   
    score: 0,
    correctAnswer: [],
    allAnswers: [[],[],[],[],[]],
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
       
        document.getElementById("fieldset1").hidden = false
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
            this.allAnswers = [[],[],[],[],[]]

            let categoryQuestion = ""
            
            for( let i = 0; i < JSON.parse(xhr.responseText).length; i++) {
                this.correctAnswer.push(JSON.parse(xhr.responseText)[i].correctAnswer)   //PUSH to correctAnswer array
                this.allAnswers[i].push(JSON.parse(xhr.responseText)[i].correctAnswer)   //PUSH to allAnswers array

                categoryQuestion = JSON.parse(xhr.responseText)[i].question 
                document.getElementById("question" + (i+1)).innerHTML = categoryQuestion
                  
                let optionAnswer = "<option value='0'>Select Answer</option>"
                
                // for( let j = 0; j < JSON.parse(xhr.responseText)[i].incorrectAnswers.length; j++) {
                for( let j = 0; j < 2; j++) {
                    //this.allAnswers[i].push(JSON.parse(xhr.responseText)[i].incorrectAnswers[j])  //PUSH to allAnswers array
                  
                    let txtAnswer = JSON.parse(xhr.responseText)[i].incorrectAnswers[j]
                    txtAnswer = txtAnswer.replace(/(^"|"$)/g, '')  //remove quotes
                    this.allAnswers[i].push(txtAnswer)  //PUSH to allAnswers array
                } 

                this.allAnswers[i].sort((a, b) => 0.5 - Math.random());    //shuffle allAnswers array

                for (let j = 0; j < this.allAnswers[i].length; j++){
                   optionAnswer += '<option  id="cAnswer' + (i+1) + '" value="' + JSON.parse(xhr.responseText)[i].correctAnswer + '">' + this.allAnswers[i][j] + "</option>"
                   
                 
                }

                document.getElementById("answers" + (i+1)).innerHTML = optionAnswer  
                
            }   
            
        }
        console.log(xhr.responseText)

        //step 5: XMLHttpRequest.send
        xhr.send()

    },

    checkAnswer1: function(){

        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer1 = answers1.options[answers1.selectedIndex].innerHTML
        //alert(this.playerAnswer1)
        this.correctAnswer1 =  document.getElementById("cAnswer1").value
        //alert(this.correctAnswer1)

        if (this.playerAnswer1 == this.correctAnswer1) {   
            this.score += 20    
            document.getElementById("checkAnswer1").innerHTML = "You are Correct!"
            //document.getElementById("score").innerHTML = "Total score: " + this.score 
            document.getElementById("answers1").disabled = true; 
            document.getElementById("fieldset2").hidden = false
            document.getElementById("question2").hidden = false; 
            document.getElementById("answers2").hidden = false; 

        } else {
            
            //document.getElementById("score").innerHTML = "Total score: " + this.score 
            document.getElementById("checkAnswer1").innerHTML = "Nope! Select again."
            
        }
    },    
    checkAnswer2: function(){

        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer2 = answers2.options[answers2.selectedIndex].innerHTML
        //alert(this.playerAnswer2)
        this.correctAnswer2 =  document.getElementById("cAnswer2").value
        //alert(this.correctAnswer2)
        if (this.playerAnswer2 == this.correctAnswer2) {
            this.score += 20
            document.getElementById("checkAnswer2").innerHTML = "You are Correct!" 
            //document.getElementById("score").innerHTML = "Total score: " + this.score 
            document.getElementById("fieldset3").hidden = false
            document.getElementById("answers2").disabled = true; 
            document.getElementById("question3").hidden = false; 
            document.getElementById("answers3").hidden = false;
        } else {
            
            document.getElementById("checkAnswer2").innerHTML = "Nope! Select again."
        }
    },
    checkAnswer3: function(){

        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer3 = answers3.options[answers3.selectedIndex].innerHTML
        //alert(this.playerAnswer3)
        this.correctAnswer3 = document.getElementById("cAnswer3").value
        //alert(this.correctAnswer3)

        if (this.playerAnswer3 == this.correctAnswer3) {
            this.score += 20
            document.getElementById("checkAnswer3").innerHTML = "You are Correct!" 
            //document.getElementById("score").innerHTML = "Total score: " + this.score 
            document.getElementById("fieldset4").hidden = false
            document.getElementById("answers3").disabled = true; 
            document.getElementById("question4").hidden = false; 
            document.getElementById("answers4").hidden = false;
            
        } else {
            
            document.getElementById("checkAnswer3").innerHTML = "Nope! Select again."
        }
    },
    checkAnswer4: function(){

        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer4 = answers4.options[answers4.selectedIndex].innerHTML
        //alert(this.playerAnswer4)
        this.correctAnswer4 = document.getElementById("cAnswer4").value
        //alert(this.correctAnswer4)

        if (this.playerAnswer4 == this.correctAnswer4) {
            this.score += 20
            //document.getElementById("score").innerHTML = "Total score: " + this.score 
            document.getElementById("checkAnswer4").innerHTML = "You are Correct!" 
            document.getElementById("fieldset5").hidden = false
            document.getElementById("answers4").disabled = true; 
            document.getElementById("question5").hidden = false; 
            document.getElementById("answers5").hidden = false;
        } else {
            
            document.getElementById("checkAnswer4").innerHTML = "Nope! Select again."
        }
    },
    checkAnswer5: function(){

        this.playerCategory = document.getElementById("categories").value
        this.playerAnswer5 = answers5.options[answers5.selectedIndex].innerHTML
        //alert(this.playerAnswer5)
        this.correctAnswer5 = document.getElementById("cAnswer5").value
        //alert(this.correctAnswer5)

        if (this.playerAnswer5 == this.correctAnswer5) {
            this.score += 20
            //document.getElementById("score").innerHTML = "Total score: " + this.score 
            document.getElementById("checkAnswer5").innerHTML = "You are Correct!" 
            document.getElementById("fieldset5").hidden = false
            document.getElementById("answers5").disabled = true; 
            document.getElementById("button2").hidden = true;
            document.getElementById("button1").hidden = false;
            //alert("Your scored " + this.score + "points!!")
            //let confirmAction = confirm("You answered all correctly!!  Would you like to play again?")
            //if (confirmAction) {
            //    location.reload(true)
            //} else {
                //alert("no")
            //}

        } else {
            
            document.getElementById("checkAnswer5").innerHTML = "Nope! Select again."
        }
    },
        


}

       
    
         
