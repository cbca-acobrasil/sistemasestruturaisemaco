// JavaScript Document

function AbreVideo(curso,arquivo)
{
	window.open('/moodle/popUp/popVideo.php?curso='+curso+'&arquivo='+arquivo+'', '', 'scrollbars=no,status=no,width=400,height=340');
}	

function AbreVideo2(curso,arquivo)
{
	window.open('/moodle/popUp/popVideo2.php?curso='+curso+'&arquivo='+arquivo+'', '', 'scrollbars=no,status=no,width=400,height=340');
}

function AbreSWF(curso,arquivo,largura,altura)
{
	window.open('/moodle/popUp/popSWF.php?curso='+curso+'&arquivo='+arquivo+'&largura='+largura+'&altura='+altura+'', '', 'scrollbars=no,status=no,width='+largura+',height='+altura+'');
}

function AbrePlayerSWF(curso,arquivo)
{
	window.open('/moodle/popUp/popVideo_playerSWF.php?curso='+curso+'&arquivo='+arquivo+'', '', 'scrollbars=no,status=no,width=455,height=345');
}

function AbrePlayerSWFlow(curso,arquivo)
{
	window.open('/moodle/popUp/popVideo_playerSWF-LOW.php?curso='+curso+'&arquivo='+arquivo+'', '', 'scrollbars=no,status=no,width=405,height=350');
}

function AbrePlayerSWFmed(curso,arquivo)
{
	window.open('/moodle/popUp/popVideo_playerSWF-MED.php?curso='+curso+'&arquivo='+arquivo+'', '', 'scrollbars=no,status=no,width=505,height=426');
}

function AbrePlayerSWFhigh(curso,arquivo)
{
	window.open('/moodle/popUp/popVideo_playerSWF-HIGH.php?curso='+curso+'&arquivo='+arquivo+'', '', 'scrollbars=no,status=no,width=605,height=500');
}