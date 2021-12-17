
                            //   <li><a class="dropdown-item" href="java_lvl1.html">Level 1: What is Programming?</a></li>
                            //   <li><a class="dropdown-item" href="java_lvl2.html">Level 2: Why Java?</a></li>
                            //   <li><a class="dropdown-item" href="java_lvl3.html">Level 3: Setting up an IDE</a></li>
                            //   <li><a class="dropdown-item" href="java_lvl4.html">Level 4: Introduction to Java</a></li>
                            //   <li><a class="dropdown-item" href="java_lvl5.html">Level 5: Your first program</a></li>
                            //   <li><a class="dropdown-item" href="java_lvl6.html">Level 6: Data Types and Operators</a></li>
                            //   <li><a class="dropdown-item" href="java_lvl7.html">Level 7: Variables and Modifiers</a></li>
                            //   <li><a class="dropdown-item" href="java_lvl8.html">Level 8: Condition Statements & Loops</a></li>
                            //   <li><a class="dropdown-item" href="java_lvl9.html">Level 9: Method and Constructor</a></li>
                            //   <li><a class="dropdown-item" href="java_lvl10.html">Level 10: Mini-Boss 1: Demon</a></li>
{/* <a href="content.html" class="previous">&laquo; Previous</a>
                <h2 class="pb-2 border-bottom">Videos</h2>
                <br>
                <br>
                <iframe width="600" height="400"
                        src="https://www.youtube.com/embed/FCMxA3m_Imc">
                </iframe> */}

function creteDiv(params) {
    
}

var title = localStorage.getItem("myValue");
if (title == 'Level 1: What is Programming?') {
para = document.createElement("p");
node = document.createTextNode("This is insta.");
para.appendChild(node);
  document.getElementById("vid").appendChild(para);
} else {
  if (title == 'Level 2: Why Java?') {
para = document.createElement("p");
node = document.createTextNode("This is intro.");
para.appendChild(node);
  document.getElementById("vid").appendChild(para);
    
  }
  
}

var resetValue =0;
localStorage.setItem("myValue", resetValue);