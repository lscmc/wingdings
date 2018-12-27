if(window.location.search.substr(1)=="debug")document.getElementById("textarea-i").removeAttribute("required");
document.getElementById("btn-translate").addEventListener("click", translate);
document.getElementById("btn-demo").addEventListener("click", demo);
document.getElementById("ph").addEventListener("focus",function(){document.getElementById("wd-ver").focus();});
function demo(){
	document.getElementById("textarea-i").focus();
	document.getElementById("textarea-i").value="! \" # $ % & ' ( ) * + , - . /\n0 1 2 3 4 5 6 7 8 9 : ; < = > ?\n@ A B C D E F G H I J K L M N O\nP Q R S T U V W X Y Z [ \\ ] ^ _";
	translate();
}
function translate(){
	var o=document.getElementById("textarea-i").value;var v=document.getElementById("wd-ver").value;
	if(v=="wd"){
	document.getElementById("talbl-f").innerHTML="Wingdings";
	//20-2F start
	o=o.replace(/ /g," ").replace(/!/g,"🖉").replace(/\"/g,"✂").replace(/#/g,"✁").replace(/\$/g,"👓").replace(/%/g,"🕭").replace(/&/g,"🕮")
	   .replace(/\'/g,"🕯").replace(/\(/g,"🕿").replace(/\)/g,"✆").replace(/\*/g,"🖂").replace(/\+/g,"🖃").replace(/\,/g,"📪")
	   .replace(/-/g,"📫").replace(/\./g,"📬").replace(/\//g,"📭");
	//20-2f end
	//30-3f start
	o=o.replace(/0/g,"📁").replace(/1/g,"📂").replace(/2/g,"📄").replace(/3/g,"🗏").replace(/4/g,"🗐").replace(/5/g,"🗄").replace(/6/g,"⌛")
	   .replace(/7/g,"🖮").replace(/8/g,"🖰").replace(/9/g,"🖲").replace(/:/g,"🖳").replace(/;/g,"🖴").replace(/</g,"🖫")
	   .replace(/=/g,"🖬").replace(/>/g,"✇").replace(/\?/g,"✍");
	//30-3f end
	//40-4f start
	o=o.replace(/@/g,"🖎").replace(/A/g,"✌").replace(/B/g,"👌").replace(/C/g,"👍").replace(/D/g,"👎").replace(/E/g,"☜").replace(/F/g,"☞")
	   .replace(/G/g,"☝").replace(/H/g,"☟").replace(/I/g,"🖐").replace(/J/g,"☺").replace(/K/g,"😐").replace(/L/g,"☹")
	   .replace(/M/g,"💣").replace(/N/g,"☠").replace(/O/g,"🏳");
	//40-4f end
	//50-5f start
	o=o.replace(/P/g,"🏱").replace(/Q/g,"✈").replace(/R/g,"☼").replace(/S/g,"💧").replace(/T/g,"❄").replace(/U/g,"🕆").replace(/V/g,"✞")
	   .replace(/W/g,"🕈").replace(/X/g,"✠").replace(/Y/g,"✡").replace(/Z/g,"☪").replace(/\[/g,"☯").replace(/\\/g,"ॐ")
	   .replace(/\]/g,"☸").replace(/\^/g,"♈").replace(/_/g,"♉");
	//50-5f end
	}else if(v=="wd2"){
	document.getElementById("talbl-f").innerHTML="Wingdings 2";
	//20-2F start
	o=o.replace(/ /g," ").replace(/!/g,"🖊").replace(/\"/g,"🖋").replace(/#/g,"🖌").replace(/\$/g,"🖍").replace(/%/g,"✄").replace(/&/g,"✀")
	   .replace(/\'/g,"🕾").replace(/\(/g,"🕽").replace(/\)/g,"🗅").replace(/\*/g,"🗆").replace(/\+/g,"🗇").replace(/\,/g,"🗈")
	   .replace(/-/g,"🗉").replace(/\./g,"🗊").replace(/\//g,"🗋");
	//20-2F end
	//30-3f start
	o=o.replace(/0/g,"🗌").replace(/1/g,"🗍").replace(/2/g,"📋").replace(/3/g,"🗑").replace(/4/g,"🖵").replace(/5/g,"🗔").replace(/6/g,"🖶")
	   .replace(/7/g,"🖷").replace(/8/g,"🖸").replace(/9/g,"🖭").replace(/:/g,"🖯").replace(/;/g,"🖱").replace(/</g,"🖒")
	   .replace(/=/g,"🖓").replace(/>/g,"🖘").replace(/\?/g,"🖙");
	//30-3f end
	}else if(v=="wd3"){
	document.getElementById("talbl-f").innerHTML="Wingdings 3";
	//20-2F start
	o=o.replace(/ /g," ").replace(/!/g,"⭠").replace(/\"/g,"⭢").replace(/#/g,"⭡").replace(/\$/g,"⭣").replace(/%/g,"⭦").replace(/&/g,"⭧")
	   .replace(/\'/g,"⭩").replace(/\(/g,"⭨").replace(/\)/g,"⭰").replace(/\*/g,"⭲").replace(/\+/g,"⭱").replace(/\,/g,"⭳")
	   .replace(/-/g,"⭶").replace(/\./g,"⭸").replace(/\//g,"⭻");
	//20-2F end
	}else if(v=="wbd"){
	document.getElementById("talbl-f").innerHTML="Webdings";
	//20-2F start
	o=o.replace(/ /g," ").replace(/!/g,"🕷").replace(/\"/g,"🕸").replace(/#/g,"🕲").replace(/\$/g,"🕶").replace(/%/g,"🏆").replace(/&/g,"🎖")
	   .replace(/\'/g,"🖇").replace(/\(/g,"🗨").replace(/\)/g,"🗩").replace(/\*/g,"🗰").replace(/\+/g,"🗱").replace(/\,/g,"🌶")
	   .replace(/-/g,"🎗").replace(/\./g,"🙾").replace(/\//g,"🙼");
	//20-2F end
	}else if(v=="lol"){
	document.getElementById("talbl-f").innerHTML="Whatever";
	o=o.replace(/./g,"");
	}if(o==""){document.getElementById("textarea-i").focus();}else{document.getElementById("textarea-o").focus();}
	document.getElementById("textarea-o").value=o;
}
