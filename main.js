if(window.location.search.substr(1)=="debug")document.getElementById("textarea-i").removeAttribute("required");
document.getElementById("btn-translate").addEventListener("click", translate);
document.getElementById("btn-demo").addEventListener("click", demo);
document.getElementById("ph").addEventListener("focus",function(){document.getElementById("wd-ver").focus();});
function demo(){
	document.getElementById("textarea-i").focus();
	document.getElementById("textarea-i").value="! \" # $ % & ' ( ) * + , - . /\n0 1 2 3 4 5 6 7 8 9 : ; < = > ?";
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
