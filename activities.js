// wrap these functions in an html file to use with google scripts app

function onSuccess(arr) {
console.log(arr[1]);
    var elements = document.getElementById("div1");
    var iden, iden2, iden3, i;
    for (i=0; i<arr.length; i++) {
        var para = document.createElement("input");
        iden = "task" + i;
        para.setAttribute("id",iden);
        para.setAttribute("type","text");
        para.setAttribute("value",arr[i][0]);
        elements.appendChild(para);
        
        var para2 = document.createElement("input");
        iden2 = "date" + i;
        para2.setAttribute("id",iden2);
        para2.setAttribute("type","text");
        para2.setAttribute("value",arr[i][1]);
        elements.appendChild(para2);
        
        var para3 = document.createElement("input");
        iden3 = "ch" + i;
        para3.setAttribute("id",iden3);
        para3.setAttribute("type","checkbox");
        if (arr[i][2] === "done") {
            para3.setAttribute("checked",true);
        }
        else {
            para3.setAttribute("checked",false);
        }
        elements.appendChild(para3);
        
        var br = document.createElement('br');
        elements.appendChild(br);
        var br = document.createElement('br');
        elements.appendChild(br);
        
        //document.getElementById("div2").innerHTML = document.getElementById(iden).value;
    }
    if (arr.length > 0) {
        document.getElementById("counter").value = arr.length;
        console.log(document.getElementById("counter").value);
    }
    //document.getElementById("savedcounter").value = arr.length;
    
    // code for blank fields in last
    var para11 = document.createElement("input");
        iden = "task" + i;
        para11.setAttribute("id",iden);
        para11.setAttribute("type","text");
        //para.setAttribute("value",arr[i][0]);
        elements.appendChild(para11);
        
        var para12 = document.createElement("input");
        iden2 = "date" + i;
        para12.setAttribute("id",iden2);
        para12.setAttribute("type","text");
        //para2.setAttribute("value",arr[i][1]);
        elements.appendChild(para12);
        
        var para13 = document.createElement("input");
        iden3 = "ch" + i;
        para13.setAttribute("id",iden3);
        para13.setAttribute("type","checkbox");
        elements.appendChild(para13);
        
        var br = document.createElement('br');
        elements.appendChild(br);
        var br = document.createElement('br');
        elements.appendChild(br);
    
}


function gettingInitialData() {
    var arr = google.script.run.withSuccessHandler(onSuccess).logProductInfo();
    
    
}



function faltu(boo) {
console.log("data written!!");
}


function addingEvent() {
    var j = document.getElementById("counter");
    // try to add empty field in onSucess method so that ADD button just saves the entered field, i.e. no need for SAVE button.
    // Also create new empty fields for further entry
    console.log(j);
    var id1 = "task" + j;
    var id2 = "date" + j;
    var id3 = "ch" + j;
    var xtra = "done";
    //if (document.getElementById(id3).checked === true) {
    //    xtra = "done";
    //}
    //else {
    //    xtra = "in process";
    //}
    var arr2 = [document.getElementById(id1).value, document.getElementById(id2).value, xtra];
    
    google.script.run.withSuccessHandler(faltu).writeProductInfo(arr2);
}
