function key(event) {

    bs.play();

    if(event.which == 13) {

        if (ww == 0) {

            crt = dngr();

            ww = setInterval(walk, 100);
            rs.play();

            bw = setInterval(b, 100);

            sw = setInterval(updateScore, 100);

            mw = setInterval(move, 100);

            aw = up();

            smw = setInterval(duck,100);

        }
    }

    if(event.which==32) {
        
        if (jw == 0){

            clearInterval(ww);
            ww = 1;
            rs. pause();

            clearInterval(rw);
            rw = 1;

            jw = setInterval(jump ,100)
            js.play();

        }
    
    }

    if(event.which ==40) {

        if(kw == 0 ) {

            clearInterval(ww);

            clearInterval(rw);

            kw = setInterval(slide, 100);


            rs.pause();
        }

    }
}

var bs = new Audio("Audios/BGM.mp3");
bs.loop = true;

var rs = new Audio("Audios/run.mp3");
rs.loop = true;

var js = new Audio("Audios/jump.mp3");

var ds = new Audio("Audios/dead.mp3");



crt = 0;
var p = 900;

function dngr() {

   for (var c = 0; c < 20; c++) {
       
        var box = document.createElement("img");

        box.src="Images/IceBox.png";

        box.className="barrier";

        box.style.marginLeft= p + "px" ;

        p = p + 1400 ;

        box.id ="p" + c;

        document.getElementById("b").appendChild(box);
   }

}

var w = 1;
var ww = 0;

function walk() {

    var wimg = document.getElementById("santa");

    w = w + 1;

    if (w == 14) {
        w = 1;
    }

    wimg.src = "Images/Walk (" + w + ").png";
}

var bw = 0;
var x = 0;

function b() {

    x = x - 20;

    document.getElementById("b").style.backgroundPositionX = x + "px";

}

var j = 1;
var jw = 0;
var mt = 332;

function jump() {

    var jimg = document.getElementById("santa");

    if (j <= 8) {    // 1 - 8 images

        mt = mt - 40;

    } 

    if (j >= 9) {    // 9 - 16 images

        mt = mt + 40;
        
    }

    jimg.style.marginTop = mt + "px";

    j = j + 1;

    if (j == 17) {
        j = 1;

        clearInterval(jw);
        jw = 0;

        rw = setInterval(run, 100);
        rs.play();

        if (crt == 0) {
            crt = dngr();
        }

        if (sw ==0) {
            sw = setInterval(updateScore, 100);
        }

        if (bw == 0) {
            bw = setInterval(b, 100);
        }
        
        if (mw == 0) {
            mw = setInterval(move, 100);

        }
        
        smw = setInterval(duck,100);
       
    }

    jimg.src = "Images/Jump (" + j + ").png"
}

var u = 0;
var sw = 0;

function updateScore() {

    u = u + 5;

    document.getElementById("score").innerHTML = "Score :" + u;
}

var r = 1;
var rw = 0;

function run() {

    var rimg = document.getElementById("santa");

    r = r + 1;

    if (r == 12) {
        r = 1;
    }

    rimg.src = "Images/Run (" + r + ").png";
}


var mw = 0;

function move() {

    for (var c = 0; c < 20; c ++) {

        var q = document.getElementById("p" + c);

        var z = getComputedStyle(q);

        var e = parseInt(z.marginLeft);

        e = e - 20;

        q.style.marginLeft = e + "px";
       
        // 180 -  -20   mt=32

        if (e <= 180 & e >= -5) {

            if (mt >=232) {

                clearInterval(ww);

                clearInterval(rw);
                rs.pause();

                clearInterval(bw);

                clearInterval(jw);
                jw= 1;

                clearInterval(sw);

                clearInterval(mw);

                clearInterval(kw);

                dw = setInterval(dead, 100);
                ds.play();
            }
            
        }

    }
}

var dw = 0;
var d = 0;

function dead() {

    var dimg = document.getElementById("santa");

    d = d + 1;

    if (d == 18) {
        d = 17;

        dimg.style.marginTop = "322px";

        document.getElementById("gover").style.visibility = "visible";

        document.getElementById("fscore").innerHTML = "Your Score = "+ u;
    }

    dimg.src = "Images/Dead (" + d + ").png";
}



function re() {

    location.reload();
}


var aw = 0;
var s = 1000;

function up() {

   for (var x = 0; x < 20; x++) {
       
        var deer = document.createElement("img");

        deer.src="Images/Reindeer.gif";

        deer.className="sky";

        deer.style.marginLeft= s + "px" ;

        s = s + 2100 ;

        deer.id ="s" + x;

        document.getElementById("b").appendChild(deer);
   }

}

var kw = 0;
var q = 0;
var bt = 332;

function slide() {

    var r = document.getElementById("santa");

    if(q <= 11) {
        
        bt = bt + 1;

    }

    r.style.marginTop = bt + "px";

    q = q + 1;

    if (q == 12) {
        q = 1;

        clearInterval(kw);
        kw = 0;

        rw = setInterval(run, 100);
        rs.play();

        if(aw ==0) {
            aw = up();
        }

        if(bw == 0){
            bw= setInterval(b,100)
        }
        if (crt == 0) {
            crt = dngr();
        }
        if (sw ==0) {
            sw = setInterval(updateScore, 100);
        }
        if (mw == 0) {
            mw = setInterval(move, 100);
        }
     
    }

    r.src = "Images/Slide (" + q + ").png";
   
    bt = 332;
}

var smw = 0;

function duck() {

     for (var x = 0; x < 10; x++) {

        var t = document.getElementById("s" +x);

        var f = getComputedStyle(t);

        var h = parseInt(f.marginLeft);

        h = h - 25;

        t.style.marginLeft = h + "px";

        /*if (h <= 125 & h >= -125) {

            if(bt <= 334) {
            
                clearInterval(ww);

                clearInterval(rw);
                rs.pause();

                clearInterval(bw);

                clearInterval(jw);
                jw= 1;

                clearInterval(sw);

                clearInterval(mw);

                clearInterval(smw);

                dw = setInterval(dead, 100);
                ds.play();
            }
        }*/
        
        // 120  -  -180
    }
}
