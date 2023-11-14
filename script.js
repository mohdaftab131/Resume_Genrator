// onclick function for Work EXP button
function addNewWWEField()
{
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter Here");

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode,weAddButtonOb);
}


// onclick function for Qualification  button
function addNewAQField()
{
    let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter Here");

   let aqOb = document.getElementById("aq");
   let aqAddButtonOb = document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode,aqAddButtonOb);
}
//onclick on hobby
function addNewhbField()
{
    let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("hbField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter Here");

   let hbOb = document.getElementById("hb");
   let hbAddButtonOb = document.getElementById("hbAddButton");

   hbOb.insertBefore(newNode,hbAddButtonOb);
}

// Gentrating CV
function generateCV(){
   let nameField = document.getElementById("nameField").value;
   let nameT1 = document.getElementById("nameT1");
   nameT1.innerHTML = nameField;
   // direct
   document.getElementById("nameT2").innerHTML = nameField;
   //contact
   document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
   //Adress
   document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
   //Email
   document.getElementById("emialT").innerHTML = document.getElementById("emailField").value;
   //facebook link
   document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
   //instagram link
   document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
   //linkedin linkl
   document.getElementById("linkedT").innerHTML = document.getElementById("linkedFeild").value;


   //objective
   document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
   //Work Experience
   let wes = document.getElementsByClassName("weField");
   let str ="";
   for(let e of  wes){
      str = str +`<li> ${e.value}</li>`;
   }
   document.getElementById("weT").innerHTML = str;
   //hobby
   let hbs = document.getElementsByClassName("hbField");
   let str2 ="";
   for(let e of  hbs){
      str2 = str2 +`<li> ${e.value}</li>`;
   }
   document.getElementById("hbT").innerHTML = str2;
   
   //Qalification
   let aqs= document.getElementsByClassName("eqField");
   let str1="";
   for(let e of aqs)
   {
      str1  += `<li> ${e.value}</li>`;
   }
   document.getElementById("aqT").innerHTML = str1;

   //image 
   let file = document.getElementById("imgField").files[0];
   console.log(file);

   let reader = new FileReader();
   reader.readAsDataURL(file);
   console.log(reader.result);

   // set the image  to template

   reader.onloadend = function(){
   document.getElementById("imgTemplate").src=reader.result;
   };



   document.getElementById('cv-form').style.display='none'
   document.getElementById('cv-template').style.display='block'
}

//printCV
function printCV()
{
    window.print();
}