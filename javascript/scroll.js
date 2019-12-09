function sleep(){//td fun
    
    if(i > 0){
        i++;
		i = 0;
		ar = makeText();
	}
		scroll.innerHTML = "";
		start();
}

function makeText(){//nd fun
	 var text = "SBV ELEKTROINSTALACIJE DOO";

     var stext = text.split(''); //ovdje smo varijablu napravili da nam poslije svakog slova pravi prazan string

     return stext;//vraca vrijednost na naziv funkcije(koji ce kasnije biti preuzet preko naziva varijable ar)
}
    var ar = makeText();//varijabla koja je jednaka ovoj funkciji makeText
    var scroll = document.getElementById('scroll');
    var loop;
    var i = 0;//varijabla koja ce se mjenjati

function start(){//prva funkcija
	if (ar.length > 0) {
		scroll.innerHTML += ar.shift();//da uvecava za slovo tj da prikazuje slovo po slovo
        loop = setTimeout(start, 200);//brzina ispisa slova
	}else{
		var pause = setTimeout(sleep, 100);//kad smo katovali sve u sleep funkciju napravimo samo setTimeot kako bi napravilo pauzu kad ide gradjevinske firme
    }
}
start(); 