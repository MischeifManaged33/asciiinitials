var letters = [[".", "      ","      ","      ","      ","      ","      ","      ","      ","  ..  ","  ..  "],
["A", "    AAAA    ","    AAAA    ","   AA  AA   ","   AA  AA   ","  AAAAAAAA  ","  AAAAAAAA  "," AA      AA "," AA      AA ","AA        AA","AA        AA"],
["B", "BBBBBBBB    ","BBBBBBBB    ","BB    BB    ","BB     BB   ","BB    BB    ","BBBBBBBB    ","BBBBBBBB    ","BB     BB   ","BBBBBBBB    ","BBBBBBBB    "],
["C", "    CCCCCCCC","  CCCCCCCCC "," CCC        ","CCC         ","CCC         ","CCC         ","CCC         ","  CCC       ","   CCCCCCCCC","    CCCCCCCC"],
["D", "DDDDDDDDD   ","DDDDDDDDD   ","DD      DD  ","DD      DD  ","DD       DD ","DD       DD ","DD      DD  ","DD      DD  ","DDDDDDDDD   ","DDDDDDDDD   "],
["E", "EEEEEEEEEEEE","EEEEEEEEEEEE","EE          ","EE          ","EEEEEEEEEEEE","EEEEEEEEEEEE","EE          ","EE          ","EEEEEEEEEEEE","EEEEEEEEEEEE"],
["F", "FFFFFFFFFFFF","FFFFFFFFFFFF","FF          ","FF          ","FFFFFFFFFFFF","FFFFFFFFFFFF","FF          ","FF          ","FF          ","FF          "],
["G", "  GGGGGGGG  ","  GGGGGGGG  ","GGG      GGG","GGG      GGG","GGG         ","GGG    GGGGG","GGG    GGGGG","GGG      GGG","GGGGGGGGGGG ","  GGGGGGGGG "],
["H", "HH        HH","HH        HH","HH        HH","HH        HH","HHHHHHHHHHHH","HHHHHHHHHHHH","HH        HH","HH        HH","HH        HH","HH        HH"],
["I", "IIIIIIIIIIII","IIIIIIIIIIII","     II     ","     II     ","     II     ","     II     ","     II     ","     II     ","IIIIIIIIIIII","IIIIIIIIIIII"],
["J", "JJJJJJJJJJJJ","JJJJJJJJJJJJ","     JJ     ","     JJ     ","     JJ     ","     JJ     ","     JJ     ","JJ   JJ     "," JJ JJ      ","  JJJ       "],
["K", "KK        KK","KK      KK  ","KK    KK    ","KK  KK      ","KKKK        ","KKKK        ","KK  KK      ","KK    KK    ","KK      KK  ","KK        KK"],
["L", "LL          ","LL          ","LL          ","LL          ","LL          ","LL          ","LL          ","LL          ","LLLLLLLLLLLL","LLLLLLLLLLLL"],
["M", "MMMM    MMMM","MMMM    MMMM","MM  M  M  MM","MM  MMMM  MM","MM   MM   MM","MM        MM","MM        MM","MM        MM","MM        MM","MM        MM"],
["N", "NN        NN","NNNN      NN","NNNN      NN","NN  NN    NN","NN  NN    NN","NN    NN  NN","NN    NN  NN","NN      NNNN","NN      NNNN","NN        NN"],
["O", "    OOOO    ","  OOOOOOOO  ","OOOO    OOOO","OO        OO","OO        OO","OO        OO","OO        OO","OOOO    OOOO","  OOOOOOOO  ","    OOOO    "],
["P", "PPPPPPPPPP  ","PPPPPPPPPP  ","PP        PP","PP        PP","PPPPPPPPPP  ","PPPPPPPPPP  ","PP          ","PP          ","PP          ","PP          "],
["Q", "    QQQQ    ","  QQQQQQQQ  ","QQQQ    QQQQ","QQ        QQ","QQ        QQ","QQ        QQ","QQ    QQ  QQ","QQQQ    QQQQ","  QQQQQQQQ  ","    QQQQ  QQ"],
["R", "RRRRRRRRRR  ","RRRRRRRRRR  ","RR        RR","RR        RR","RRRRRRRRRR  ","RRRRRRRRRR  ","RR   RR     ","RR     RR   ","RR       RR ","RR        RR"],
["S", "  SSSSSSSS  ","  SSSSSSSS  ","SSSS    SSSS","SSSS    SSSS","  SS        ","    SSSS    ","      SSSS  ","SSSS    SSSS","SSSS    SSSS","  SSSSSSSS  "],
["T", "TTTTTTTTTTTT","TTTTTTTTTTTT","     TT     ","     TT     ","     TT     ","     TT     ","     TT     ","     TT     ","     TT     ","     TT     "],
["U", "UU        UU","UU        UU","UU        UU","UU        UU","UU        UU","UU        UU"," UU      UU "," UU      UU ","   UUUUUU   ","   UUUUUU   "],
["V", "VV        VV","VV        VV"," VV      VV "," VV      VV ","  VV    VV  ","  VV    VV  ","   VV  VV   ","   VV  VV   ","    VVVV    ","    VVVV    "],
["W", "WW        WW","WW        WW","WW        WW","WW        WW","WW   WW   WW","WW   WW   WW","WW  WWWW  WW","WW  WWWW  WW","WWWWW  WWWWW","WWWW    WWWW"],
["X", "XX        XX"," XX      XX ","  XX    XX  ","   XX  XX   ","    XXXX    ","    XXXX    ","   XX  XX   ","  XX    XX  "," XX      XX ","XX        XX"],
["Y", "YY        YY"," YY      YY ","  YY    YY  ","   YY  YY   ","    YYYY    ","    YYYY    ","     YY     ","     YY     ","     YY     ","     YY     "],
["Z", "ZZZZZZZZZZZZ","ZZZZZZZZZZZZ","         ZZZ","        ZZZ ","       ZZZ  ","    ZZZ     "," ZZZ        ","ZZZ         ","ZZZZZZZZZZZZ","ZZZZZZZZZZZZ"]];


function submitted(){
    var initials = [];
    var output = [[], [], [], [], [], [], [], [], [], []];
    var toPrint = "";
    var inputName = document.getElementById("name").value;
    inputName = inputName.toLowerCase().split(" ");

    for(var x of inputName){
        initials.push(x.substring(0, 1));
         initials.push("."); 
    }

    for(var j of initials){
        var lineNumber = 1;
         if(j == "."){
            for(let i = 0; i < letters[0].length - 1; i++){
                output[lineNumber - 1].push(letters[0][lineNumber]);
                lineNumber++;
            }
        }else{ 
            for(let i = 0; i < letters[0].length - 1; i++){
                output[lineNumber - 1].push(letters[j.charCodeAt() - 96][lineNumber]);
                lineNumber++;
            }
        }
    }

    for(var k in output){
        toPrint = toPrint + "<br>";
        for(var l in output[k]){
            toPrint = toPrint + output[k][l];
        }
    }

    document.getElementById("docOutput").innerHTML = toPrint;
}
