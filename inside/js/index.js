/*dropdown js starts here*/

function hover(){
	let variable1=document.getElementById('php')
	variable1.addEventListener(
	"mouseover",function(e){
		console.log('you clicked');
		document.getElementById('phpshow').style.display='block';
		document.getElementById('Dotnetshow').style.display='none';
		document.getElementById('pythonshow').style.display='none';
		document.getElementById('ccnashow').style.display='none';
		document.getElementById('awsshow').style.display='none';
		document.getElementById('javashow').style.display='none';
		document.getElementById('digitalmarketingshow').style.display='none';
		document.getElementById('search_container').style.display='block';
		
	}) 
	let variable2=document.getElementById('dotnet')
	variable2.addEventListener(
	"mouseover",function(e){
		console.log('you clicked');
		document.getElementById('phpshow').style.display='none';
		document.getElementById('Dotnetshow').style.display='block';
		document.getElementById('pythonshow').style.display='none';
		document.getElementById('ccnashow').style.display='none';
		document.getElementById('awsshow').style.display='none';
		document.getElementById('javashow').style.display='none';
		document.getElementById('digitalmarketingshow').style.display='none';
	}) 
	let variable3=document.getElementById('python')
	variable3.addEventListener(
	"mouseover",function(e){
		console.log('you clicked');
		document.getElementById('phpshow').style.display='none';
		document.getElementById('Dotnetshow').style.display='none';
		document.getElementById('pythonshow').style.display='block';
		document.getElementById('ccnashow').style.display='none';
		document.getElementById('awsshow').style.display='none';
		document.getElementById('javashow').style.display='none';
		document.getElementById('digitalmarketingshow').style.display='none';
	}) 
	let variable4=document.getElementById('ccna')
	variable4.addEventListener(
	"mouseover",function(e){
		console.log('you clicked');
		document.getElementById('phpshow').style.display='none';
		document.getElementById('Dotnetshow').style.display='none';
		document.getElementById('pythonshow').style.display='none';
		document.getElementById('ccnashow').style.display='block';
		document.getElementById('awsshow').style.display='none';
		document.getElementById('javashow').style.display='none';
		document.getElementById('digitalmarketingshow').style.display='none';
	}) 
	let variable5=document.getElementById('aws')
	variable5.addEventListener(
	"mouseover",function(e){
		console.log('you clicked');
		document.getElementById('phpshow').style.display='none';
		document.getElementById('Dotnetshow').style.display='none';
		document.getElementById('pythonshow').style.display='none';
		document.getElementById('ccnashow').style.display='none';
		document.getElementById('awsshow').style.display='block';
		document.getElementById('javashow').style.display='none';
		document.getElementById('digitalmarketingshow').style.display='none';
	}) 
	let variable6=document.getElementById('java')
	variable6.addEventListener(
	"mouseover",function(e){
		console.log('you clicked');
		document.getElementById('phpshow').style.display='none';
		document.getElementById('Dotnetshow').style.display='none';
		document.getElementById('pythonshow').style.display='none';
		document.getElementById('ccnashow').style.display='none';
		document.getElementById('awsshow').style.display='none';
		document.getElementById('javashow').style.display='block';
		document.getElementById('digitalmarketingshow').style.display='none';
	}) 
	let variable7=document.getElementById('digitalmarketing')
	variable7.addEventListener(
	"mouseover",function(e){
		console.log('you clicked');
		document.getElementById('phpshow').style.display='none';
		document.getElementById('Dotnetshow').style.display='none';
		document.getElementById('pythonshow').style.display='none';
		document.getElementById('ccnashow').style.display='none';
		document.getElementById('awsshow').style.display='none';
		document.getElementById('javashow').style.display='none';
		document.getElementById('digitalmarketingshow').style.display='block';
	}) 
	}
	function normal(){
		document.getElementById('phpshow').style.display='none';
		document.getElementById('Dotnetshow').style.display='none';
		document.getElementById('pythonshow').style.display='none';
		document.getElementById('ccnashow').style.display='none';
		document.getElementById('awsshow').style.display='none';
		document.getElementById('javashow').style.display='none';
		document.getElementById('digitalmarketingshow').style.display='none';
	}
	function show(){
		document.getElementById("dropdown").style.display="block";
	}
	function dontshow(){
		document.getElementById("dropdown").style.display="none";
	}
/*dropdown js ends here*/

/*navbar scroll property*/

/*end of navbar scroll property*/

/*grid box js*/
/*grid box*/

/* function shoo(){
	    		document.getElementById("block").style.display="block"
	    		document.getElementById("span1").style.display="none"
	            document.getElementById("span2").style.display="block"
	            document.getElementById("angle").style.transform="rotate(180deg)"
	            document.getElementById("ref").style.display="block"
	                    }
	                    function sh(){
	             document.getElementById("block").style.display="none"
	    		document.getElementById("span1").style.display="block"
	            document.getElementById("span2").style.display="none"
	            document.getElementById("angle").style.transform="rotate(0deg)"
	            document.getElementById("ref").style.display="none"
	                    }*/

/*end of grid box*/
/*end of grid box header*/
function messenger(){
	document.getElementById("messenger_popop").style.display="block";
}
function hidemessenger(){
	document.getElementById("messenger_popop").style.display="none";
}
let jk=document.getElementById("urlarrow");
jk.addEventListener("mouseover",function(e){
	document.getElementById("iot").style.display="block"
})
jk.addEventListener("mouseout",function(e){
	document.getElementById("iot").style.display="none"
})
window.addEventListener('scroll', function (e) {
	var nav = document.getElementById('lowerheader');
	if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
			nav.classList.add('lowerhead-nav-color-extra');
			nav.classList.remove('lowerhead-nav-color');
		} else {
			nav.classList.add('lowerhead-nav-color');
			nav.classList.remove('lowerhead-nav-color-extra');
			
		}
});