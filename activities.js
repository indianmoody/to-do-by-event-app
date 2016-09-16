// wrap these functions in an html file to use with google scripts app



function onSuccess(arr) {
console.log(arr[1]);
    var elements = document.getElementById("div1");
    elements.innerHTML = "";
    var iden, iden2, iden3, iden4, iden5, i, z;
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
            para3.setAttribute("checked","true");
        }
        elements.appendChild(para3);
        
        var para4 = document.createElement("input");
        iden4 = "" + i;
        para4.setAttribute("id",iden4);
        para4.setAttribute("type","button");
        para4.setAttribute("value","update");
        para4.addEventListener('click', function() { updatingEvent(this.id) });
        elements.appendChild(para4);
        //console.log(iden4);
        
        var para5 = document.createElement("input");
        z = 1000 + i;
        iden5 = "" + z;
        para5.setAttribute("id",iden5);
        para5.setAttribute("type","button");
        para5.setAttribute("value","delete");
        para5.addEventListener('click', function() { deletingEvent(this.id) });
        elements.appendChild(para5);
        console.log(iden5);
        
        var br = document.createElement('br');
        elements.appendChild(br);
        var br = document.createElement('br');
        elements.appendChild(br);
        
        //document.getElementById("div2").innerHTML = document.getElementById(iden).value;
    }
    if (arr.length > 0) {
        document.getElementById("counter").value = arr.length;
        //console.log(document.getElementById("counter").value);
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
        
        /*
        var para4 = document.createElement("input");
        iden4 = "" + i;
        para4.setAttribute("id",iden4);
        para4.setAttribute("type","button");
        para4.setAttribute("value","update");
        para4.addEventListener('click', function() { updatingEvent(this.id) });
        elements.appendChild(para4);
        console.log(iden4);
        
        var para5 = document.createElement("input");
        z = 1000 + i;
        iden5 = "" + z;
        para5.setAttribute("id",iden5);
        para5.setAttribute("type","button");
        para5.setAttribute("value","delete");
        para5.addEventListener('click', function() { deletingEvent(this.id) });
        elements.appendChild(para5);
        console.log(iden5);
        
        var br = document.createElement('br');
        elements.appendChild(br);
        var br = document.createElement('br');
        elements.appendChild(br);
        */
    
}


function gettingInitialData() {
    var arr = google.script.run.withSuccessHandler(onSuccess).logProductInfo();
    
    
}


function faltu(boo) {
console.log("data written!!");
}


function addingEvent() {
    var j = document.getElementById("counter").value;
    // try to add empty field in onSucess method so that ADD button just saves the entered field, i.e. no need for SAVE button.
    // Also create new empty fields for further entry
    var id1 = "task" + j;
    var id2 = "date" + j;
    var id3 = "ch" + j;
    var xtra;
    if (document.getElementById(id3).checked === true) {
        xtra = "done";
    }
    else {
        xtra = "in process";
    }
    var arr2 = [document.getElementById(id1).value, document.getElementById(id2).value, xtra];
    
    google.script.run.withSuccessHandler(faltu).writeProductInfo(arr2);
    
    var elements = document.getElementById("div1");
    var iden24, iden25, y;
    var para44 = document.createElement("input");
        iden24 = "" + j;
        para44.setAttribute("id",iden24);
        para44.setAttribute("type","button");
        para44.setAttribute("value","update");
        para44.addEventListener('click', function() { updatingEvent(this.id) });
        elements.appendChild(para44);
        console.log(iden24);
        
        var para55 = document.createElement("input");
        y = 1000 + j;
        iden25 = "" + y;
        para55.setAttribute("id",iden25);
        para55.setAttribute("type","button");
        para55.setAttribute("value","delete");
        para55.addEventListener('click', function() { deletingEvent(this.id) });
        elements.appendChild(para55);
        console.log(iden25);
        
        var br = document.createElement('br');
        elements.appendChild(br);
        var br = document.createElement('br');
        elements.appendChild(br);
    
    var k = parseInt(j);
    k = k + 1;
    document.getElementById("counter").value = k;
    
    //var elements = document.getElementById("div1");
    var iden, iden2, iden3; //iden4, iden5, z;
    // code for blank fields in last
    var para11 = document.createElement("input");
        iden = "task" + k;
        para11.setAttribute("id",iden);
        para11.setAttribute("type","text");
        elements.appendChild(para11);
        
        var para12 = document.createElement("input");
        iden2 = "date" + k;
        para12.setAttribute("id",iden2);
        para12.setAttribute("type","text");
        elements.appendChild(para12);
        
        var para13 = document.createElement("input");
        iden3 = "ch" + k;
        para13.setAttribute("id",iden3);
        para13.setAttribute("type","checkbox");
        elements.appendChild(para13);
        
        /*
        var para4 = document.createElement("input");
        iden4 = "" + k;
        para4.setAttribute("id",iden4);
        para4.setAttribute("type","button");
        para4.setAttribute("value","update");
        para4.addEventListener('click', function() { updatingEvent(this.id) });
        elements.appendChild(para4);
        console.log(iden4);
        
        var para5 = document.createElement("input");
        z = 1000 + k;
        iden5 = "" + z;
        para5.setAttribute("id",iden5);
        para5.setAttribute("type","button");
        para5.setAttribute("value","delete");
        para5.addEventListener('click', function() { deletingEvent(this.id) });
        elements.appendChild(para5);
        console.log(iden5);
        
        var br = document.createElement('br');
        elements.appendChild(br);
        var br = document.createElement('br');
        elements.appendChild(br);
        */
    
}

function faltu2(boo) {
console.log("data updated!!");
}


function updatingEvent(token) {
    var id1 = "task" + token;
    var id2 = "date" + token;
    var id3 = "ch" + token;
    var xtra;
    console.log(id1);
    console.log(id2);
    console.log(id3);
    if (document.getElementById(id3).checked === true) {
        xtra = "done";
    }
    else {
        xtra = "in process";
    }
    var arr3 = [document.getElementById(id1).value, document.getElementById(id2).value, xtra];
    
    google.script.run.withSuccessHandler(faltu2).updateProductInfo(arr3, token);
}


function faltu3(boo) {
console.log("data deleted!!");
}


function deletingEvent(token) {
    
    var j = parseInt(token);
    j = j - 1000;
    
    google.script.run.withSuccessHandler(faltu3).deleteThisRow(j);
    
    gettingInitialData();
    
}
