function changeCSS(spanID, show) {
	var obj = document.getElementById(spanID);
	
	if (show)
		obj.className = 'ShowSubmenu';	//Show
	else
		obj.className = 'HideSubmenu';	//Hide
}﻿


<!-- Script para abrir popups dinamicamente-->

function getObj(id){
	if(document.getElementById){
		//NE
		return document.getElementById(id);
	}else{
		if (document.all) {
			//IE5+
			return document.all(id);	
		}else{
			//IE5-
			return document(id);	
		}
		
	}
}

function resizeWindowByImage(ImageId){
	var myImage = getObj(ImageId);
	window.resizeTo(myImage.width+25, myImage.height+50);
}

/* No link coloque como no exemplo:
	
	<a href="javascript:void(window.open('/pasta/pop.asp?imagem=pasta/arquivo.jpg', '', 'scrollbars=no,status=no,width=50,height=50,resizable'));">
		link para o popup</a>*/
		