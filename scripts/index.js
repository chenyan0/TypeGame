window.onload=function(){
	var small,time=0, hasJishuqi=false,top;
	var body=document.getElementById('body');
	var big=document.createElement('div');
	var jishiqi=document.getElementById('jishiqi');
	big.setAttribute('id','big');
	body.appendChild(big);
	var huajianpan=function(){
		for(var i=0;i<52;i++){
			small=document.createElement('div');
			small.setAttribute('class','small');
			var r=65+Math.floor(Math.random()*57);
			while(r>=91&&r<=96){
				r=65+Math.floor(Math.random()*57);
			}
			small.innerHTML=String.fromCharCode(r);
			big.appendChild(small);
		}
		top=big.firstElementChild;
	};
	huajianpan();
	var t;
		jilu=document.getElementById('jilu'),
		tip=document.getElementById('tip'),
		record=document.getElementsByClassName('record'),
		arr=[];
	var fn=function(){
		jishiqi.innerHTML=Time(time);
		time+=1;
	};
	document.onmousedown=function(e){
		var el=e.target;
		if(el.id=='start'){
			t=setInterval(fn,1000);
			startgame();
		}
		if(el.id=='exit'){
			clearInterval(t);
			tip.style.display='block';
			tip.innerHTML='<div id="tishi">确定要退出？</div><span id="button1">Yes</span><span id="button2">No</span>';
		}else if(el.id=='button1'){
			window.close();
		}else if(el.id=='button2'||el.id=='button'){
			tip.style.display='none';
			clearInterval(t);
			jishiqi.innerHTML='00:00';
			time=0;
			if(!big.firstElementChild){
				huajianpan();
			}
		}
	};
	document.onmouseover=function(e){
		var el=e.target;
		if(el.id=='history'){
			jilu.style.display='block'; 
			for(var i=0;i<record.length;i++){
				arr=arr.splice(-3);
				if(!arr[i]){
					record[i].innerHTML='';
				}else{
					record[i].innerHTML=arr[i];
				}
				
			}
		}
	}
	document.onmouseout=function(e){
		var el=e.target;
		if(el.id=='history'){
			jilu.style.display='none'; 
		}

	}
// -------计时--------------------------
 	var Time=(function(){
		var min,sec;
		return function(time){
			min=Math.floor(time/60);
			sec=Math.floor(time%60);
			if(sec<10){
				sec='0'+sec;
			}
			if(min<10){
				min='0'+min;
			}
			return min+':'+sec;
		};
	})();
// --------------开始游戏------------
	var startgame=function(){
		document.onkeydown=function(e){
			// 小写shift 
			if(e.shiftKey){
				d=e.keyCode;
			}else{
				d=e.keyCode+32;
			}
			if(d==top.innerHTML.charCodeAt(0)){
				big.removeChild(top);
				top=big.firstElementChild;

			}
			if(!top){
				clearInterval(t);
				tip.style.display='block';
				var s=52/time;
				tip.innerHTML='<div id="tishi">平均速度：<span>'+Number(s.toFixed(3))+'字</span>/秒</div><span id="button">再练一遍</span>';
				arr.push(Number(s.toFixed(3))+'字/秒');
				document.onkeydown=null;
				
			}
		};
	};

		// 覆盖式------------------------------------------------------
	
	// 	document.onkeydown=function(e){
	// 	// 大写shift   
	
	// 	if(!hasJishuqi){
	// 		var t=setInterval(function(){
	// 			jishiqi.innerHTML=time;
	// 			time+=1;
	// 		},1000);
	// 		hasJishuqi=true;
	// 	}
	// 	if(e.shiftKey){
	// 		d=e.keyCode;
	// 	}else{
	// 		d=e.keyCode+32;
	// 	}
	// 	console.log(d);
	// 	if(d==top.innerHTML.charCodeAt(0)){
	// 		top.style.background='#c4a0f2';
	// 		top=top.nextElementSibling;
		
	// 	}
	// 	if(top==null){
			
	// 		alert(time);
	// 		clearInterval(t);
	// 		location.reload();
	// 	}
			
		
	// };
	
		

		

	

	

};