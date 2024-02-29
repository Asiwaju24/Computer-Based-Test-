var timeLeft = 600; 
    var timer = setInterval(function() {
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;
      document.getElementById('time').innerHTML = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById('time').innerHTML = "00:00";
        showResult();
      }
    }, 1000);

    
    function showResult() {
      var answer1 = document.querySelector('input[name="answer1"]:checked');
      var answer2 = document.querySelector('input[name="answer2"]:checked');
        var answer3 = document.querySelector('input[name="answer3"]:checked');
 var answer4 = document.querySelector('input[name="answer4"]:checked');
         var score = 0;

      // Check answers if attempted
      if (answer1 && answer1.value === "b") {
        score += 1;
      }
      if (answer2 && answer2.value === "c") {
        score += 1;
      }
        if(answer3 && answer3.value === "a")
        score += 1;
        if(answer4 && answer4.value === "d")
        score += 1
      // Add more answer checks as needed

      // Display result
      var resultDisplay = document.getElementById('result');
      resultDisplay.innerHTML = "Your Score: " + score + " out of 4";
        
        document.getElementById('submit-btn').style.disolay="none";
      document.getElementById('test').style.display = "none";

      
      clearInterval(timer);
    }


    document.getElementById('submit-btn').addEventListener('click', function() {
      showResult();
    });

function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function calculate() {
        try {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        } catch (e) {
            document.getElementById('display').value = 'Error';
        }
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }


var calculatorVisible = false;
document.getElementById('calculator-btn').addEventListener('click', function() {
  var calculator = document.getElementById('calculator');
  calculator.style.display = calculatorVisible ? 'none' : 'block';
  calculatorVisible = !calculatorVisible;
});

// Function to append value to calculator display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

        document.getElementById('submit-btn').addEventListener('click', function() {
            showResult();
        });
    
