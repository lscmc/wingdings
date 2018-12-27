if(window.location.search.substr(1)=="debug")document.getElementById("textarea-i").removeAttribute("required");
document.getElementById("btn-translate").addEventListener("click", translate);
document.getElementById("ph").addEventListener("focus",function(){document.getElementById("wd-ver").focus();});
function translate(){
	var o=document.getElementById("textarea-i").value;
	var v=document.getElementById("wd-ver").value;
	if(v=="wd"){
	document.getElementById("talbl-f").innerHTML="Wingdings";
	//20-2F start
	o=o.replace(/ /g," ").replace(/!/g,"🖉").replace(/\"/g,"✂").replace(/#/g,"✁").replace(/\$/g,"👓").replace(/%/g,"🕭").replace(/&/g,"🕮");
	o=o.replace(/\'/g,"🕯").replace(/\(/g,"🕿").replace(/\)/g,"✆").replace(/\*/g,"🖂").replace(/\+/g,"🖃").replace(/\,/g,"📪");
	o=o.replace(/-/g,"📫").replace(/\./g,"📬").replace(/\//g,"📭");
	//20-2f end
	}else if(v=="wd2"){
	document.getElementById("talbl-f").innerHTML="Wingdings 2";
	//20-2F start
	o=o.replace(/ /g," ").replace(/!/g,"🖊").replace(/\"/g,"🖋").replace(/#/g,"🖌").replace(/\$/g,"🖍").replace(/%/g,"✄").replace(/&/g,"✀");
	o=o.replace(/\'/g,"🕾").replace(/\(/g,"🕽").replace(/\)/g,"🗅").replace(/\*/g,"🗆").replace(/\+/g,"🗇").replace(/\,/g,"🗈");
	o=o.replace(/-/g,"🗉").replace(/\./g,"🗊").replace(/\//g,"🗋");
	//20-2F end
	}if(o==""){document.getElementById("textarea-i").focus();}else{document.getElementById("textarea-o").focus();}
	document.getElementById("textarea-o").value=o;
}
