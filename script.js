
        var now = moment().hour()
        var myTime = setInterval(myTime,1000);
        var curHour = moment().hour()



        $("#9").val(localStorage.getItem("9"))
        $("#10").val(localStorage.getItem("10"))
        $("#11").val(localStorage.getItem("11"))
        $("#12").val(localStorage.getItem("12"))
        $("#1").val(localStorage.getItem("1"))
        $("#2").val(localStorage.getItem("2"))
        $("#3").val(localStorage.getItem("3"))
        $("#4").val(localStorage.getItem("4"))
        $("#5").val(localStorage.getItem("5"))





            var nineInput = $("#9")
            var tenInput = $("#10")
            var elevenInput = $("#11")
            var twelveInput = $("#12")
            var oneInput = $("#1")
            var twoInput= $("#2")
            var threeInput = $("#3")
            var fourInput = $("#4")
            var fiveInput = $("#5")          

            var nine = $("#9").attr("data-value")
            var ten = $("#10").attr("data-value")
            var eleven = $("#11").attr("data-value")
            var twelve = $("#12").attr("data-value")
            var one = $("#1").attr("data-value")
            var two= $("#2").attr("data-value")
            var three = $("#3").attr("data-value")
            var four = $("#4").attr("data-value")
            var five = $("#5").attr("data-value")           
        
        
        function myTime(){
          var timerID = moment().format('MMMM Do YYYY, h:mm:ss a')
          document.getElementById("currentDay").innerHTML=timerID;
        }
      
    
        timeArray=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]



            nineNum = parseInt(nine)
            tenNum = parseInt(ten)
            elevenNum = parseInt(eleven)
            twelveNum = parseInt(twelve)
            oneNum = parseInt(one)
            twoNum = parseInt(two)
            threeNum = parseInt(three)
            fourNum = parseInt(four)
            fiveNum = parseInt(five)
            

            calArray = [nineNum,tenNum,elevenNum,twelveNum,oneNum,twoNum,threeNum,fourNum,fiveNum]



            for (i = 0; i < 9; i++){
              const currentInput = $(".calender")[i]
              console.log(calArray[i])
              if (calArray[i] < curHour){
                $(currentInput).css("backgroundColor", "red")
              }else if (calArray[i] > curHour){
                $(currentInput).css("backgroundColor", "green")
              }

              
            }
      
        


        function storeText(){
        var userText= document.getElementById("9")
        localStorage.setItem("text", userText.value);
 
    }

  
            
            $(".btn").on("click",function(e){
          console.log(e.target)
          var clickedHour = $(e.target).attr("data-value")
         const inputText = $(`#${clickedHour}`).val()
         console.log(inputText)
         localStorage.setItem(clickedHour, inputText);

        })


            
     

        

          
          
       

        


