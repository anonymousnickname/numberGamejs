     
       
        window.addEventListener('DOMContentLoaded', function() {
            'use strict';

        let button = document.querySelector('button'),
            p = document.querySelector('p'),
            i = 75;

            let arr = range(1,25);
            shuffle(arr);

        button.addEventListener('click', playGame);

       
      
        function playGame(){

        window.timerId = setInterval(() => {
            
            p.innerHTML = "Осталось " + i + " секунд";
            i--;
            if (i < 0) {
                p.innerHTML = "Вы проиграли."
                clearInterval(window.timerId);
            }
           
        }, 1000);
        createTable('field',arr,5,5);
        this.disabled = true
        }

             
         function range (from , to) {
                let arr = [];
                for (let i = from; i <= to; i++) {
                    arr.push(i);
                }
                return arr;
            }
            
            
            
            function createTable(parentId,arr,trNum,tdNum) {
                let tdArr = [];
                let num = 1;
                let checkResult = [];
                let table = document.createElement('table');
                document.getElementById(parentId).appendChild(table);
                for (let i = 0; i < trNum; i++) {
                    let tr = document.createElement('tr');
                    table.appendChild(tr);
                    for (let j = 0; j < tdNum; j++) {
                        let td = document.createElement('td');
                        td.className = "s" + getRandomInt(1,26);
                        tr.appendChild(td);

                        td.addEventListener('click', function() {
                           if(this.innerHTML == num) {
                               this.style.background = 'rgb(156, 158, 6)';
                              checkResult.push(num);
                               num++;
                               console.log(num);
                               

                            if ( checkResult.length == 25) {
                                window.clearInterval(window.timerId);
                                p.innerHTML = "You won!"
                            }
                        };
                        })
                        tdArr.push(td);
                    }
                }
                for (let i = 0; i < arr.length; i++) {
                    tdArr[i].innerHTML = arr[i];
                }

            }

            function shuffle(array) {
                array.sort(() => Math.random() - 0.5);
              }

              function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
              }
            
            }); 
              
            
        

