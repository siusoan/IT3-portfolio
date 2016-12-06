function main() {
          var skillButtons = document.getElementsByClassName("skills-button"),
          skillsCollumns = document.getElementsByClassName("skills-column"),
          chevrons = document.getElementsByClassName('fa'),
          works = document.getElementsByClassName("work-image");

          //When button is clicked, show the right column of text and chevron icon//
          function display(button,column, chevron) {
                button.onclick = function(clicked) {
                      if(column.classList.contains("inactive")) {
                            /*In this situation, the column of text is hidden before the button is clicked.
                            When onclick event goes off:
                            - The column will be displayed
                            - The chevron needs to point up, to show the user he/she can click on the button again to hide column
                            */
                            column.classList.remove("inactive");
                            column.classList.add("active");
                            //Let the chevron point up//
                            chevron.classList.remove("fa-chevron-down");
                            chevron.classList.add("fa-chevron-up");
                      } else {
                            /*In the other situation, the column of text is already showing before the button is clicked.
                            When onclick event goes off:
                            - The column will be hidden
                            - The chevron needs to point down, to show the user he/she can click on the button again to show column
                            */
                            column.classList.remove("active");
                            column.classList.add("inactive");
                            //Let the chevron point down//
                            chevron.classList.remove("fa-chevron-up");
                            chevron.classList.add("fa-chevron-down");
                      }
                }
          }

          //Go through every button, collumn and chevron icons with loop, if indexes match with each other - go to display function//
          for (i = 0; i < skillButtons.length; i++) {
                for (k = 0; k < skillsCollumns.length; k++) {
                      for (m = 0; m < chevrons.length; m++) {
                            if ((i === k) && (k === m) && (i === m)) {
                                  display(skillButtons[i], skillsCollumns[k], chevrons[m]);
                            }
                      }
                }
          //Google Analytics

          }
}

window.onload = function() {
       main();
}
