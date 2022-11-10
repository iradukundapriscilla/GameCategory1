import React from 'react';

class Category extends React.Component{

    render(){
        return(
        <div>
            <div class="con">
  <img src="assets/img/asset/birdyellow.gif" class="bird"/>
</div>




<img src="assets/img/asset/cc.png" alt="Italian Trulli"/>


<div class="container">
<div class="btn1">

<label>Category </label>
</div>
   
  <button class="btn"onClick="window.location='signup.html';">English</button>
  
  <button class="btn2"onClick="window.location='signup.html';">Kinyarwanda</button>

  <button class="btn3"onClick="window.location='signup.html';">Social studies</button>
   
  <button class="btn4"onClick="window.location='signup.html';">science</button>
  <button class="btn5"onClick="window.location='signup.html';">french</button>




</div>
   
        </div>
        );
    }
}
export default Category;