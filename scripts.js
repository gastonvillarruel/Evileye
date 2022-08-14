const eyelids = document.querySelectorAll('.eyelids');
const eyes = document.querySelectorAll('.pupil-container');
const eyeball = document.querySelectorAll('.eyes')



// función para enrojecer los ojos:
let gb = 255;
const evileye = ()=>{
	gb--;
	eyeball.forEach(eyes => eyes.style.background = `rgb(255, ${gb}, ${gb})`);
	if (gb<=150) {
			if (gb==70) clearInterval(interval);
			eyelids.forEach(eyelids=>{
				eyelids.style.transition='height 1s'
				eyelids.style.height=`20%`;
			})	
	}
	// console.log(gb);
}
	
// intervalo para ejecutar la función evileye cada 1 seg:
let interval;
const evileyeInterval = ()=>{
	interval = setInterval(evileye, 500);
}
evileyeInterval();




// Función pestañar
const blink = (e)=>{
	console.log(e.button)
	if (e.button!=0) return;
	eyelids.forEach(eyelids=>eyelids.style.transition='height .05s');
	if (e.type == 'mousedown'){
		eyelids.forEach(eyelids=>eyelids.style.height='50%');
		clearInterval(interval);
	}else eyelids.forEach(eyelids=>eyelids.style.height='0');
	
}


// función mover los ojos:
const eyesRotation = (e)=>{
	eyes.forEach(eye=>{
		
		const eyePos = eye.getBoundingClientRect();
		//devuelve un objecto (DOMRect) con datos sobre la posición del elemento relativa a la esquina superior izquierda de la ventana.
		
		// coordenadas del mouse
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		
		// coordenadas del ojo
		const eyeX = eyePos.left + (eyePos.width/2);
		const eyeY = eyePos.top + (eyePos.height/2);
		
		//diferencia entre las anteriores (largo de cada cateto)
		const deltaX = eyeX - mouseX;
		const deltaY = eyeY - mouseY;
		
		// posición del mouse en radianes (medida de ángulo). Aplicamos el arcotangente del cociente de los catetos para hallar el ángulo.
		const rad = Math.atan2(deltaY, deltaX);
		// atan2(y, x) retorna el ángulo, en radianes, entre el eje positivo X y el punto (en las coordenadas x e y)
		
	
		// conversión a grados (deg) por regla de 3, y redondeo
		let deg = Math.round(rad*(180/Math.PI));
		
		// correción para cuando el ángulo toma un valor negativo
		if (deg<0) deg = deg + 360;
		
		eye.style.transform = `rotate(${deg}deg)`;
		
		// console.log(eye.firstElementChild.className)
		// console.log("eye coord: "+eyeX, eyeY)
		// console.log('mouse coord: '+ mouseX, mouseY)
		// console.log('delta: '+ deltaX, deltaY)
		// console.log('rad: '+ rad, 'deg: ', deg + "°")
	})
}

// Función para disminuir el rojo de los ojos:
const reduceEvileye = ()=>{
	if (gb<250) {
		gb += 25;
		eyeball.forEach(eyes => eyes.style.background = `rgb(255, ${gb}, ${gb})`);
	}
	evileyeInterval();
}



// Función para mover aleatoriamente la cara:
const face = document.querySelector('.face');
/*
const faceMove = (x, y, xi, yi)=>{
	
	const maxWidth=innerWidth - face.clientWidth;
	const maxHeight=innerHeight - face.clientHeight;
	
	
	let rad;
	let xf, xfc, yf, yfc, h;
	
	// función llamada sin argumentos:
	if (y==undefined && x==undefined) {	
		yfc = Math.floor(Math.random()*maxHeight);
		xfc = maxWidth;
		xi = 0;
		yi = 0;
		rad = Math.atan2(yfc, xfc) 
		h=Math.round(xfc/Math.cos(rad));
	}else if (x>0 && x<maxWidth){
		(yi>y)? 
			rad = Math.atan(Math.abs(x-xi)/yi) 
			:
			rad = Math.atan(Math.abs(x-xi)/(maxHeight-yi));
		xf = x + (Math.tan(rad)*maxHeight*Math.sign(x-xi));
		if (xf>=0 && xf<=maxWidth){
			xfc=xf;
			(yi>y)? yf = maxHeight : yf = 0;
			yfc = yf;
			h=Math.round(maxHeight/Math.cos(rad));
		}else {
			(xf<0)? xfc = 0 : xfc = maxWidth;
			(yi>y)? 
				(
					yf = Math.abs(xfc - x) / Math.tan(rad),
					h=Math.round(yf/Math.cos(rad))
				)
				:
				(
					yf = maxHeight - (Math.abs(xfc - x) / Math.tan(rad)),
					h=Math.round(maxHeight-yf/Math.cos(rad))
				)
			yfc=yf;
		}
		yi=y; 
		xi=x;
	}else{
		(xi>x)? 
		rad = Math.atan(Math.abs(y-yi)/xi) 
		:
		rad = Math.atan(Math.abs(y-yi)/(maxWidth-xi));
		yf = y + (Math.tan(rad)*maxWidth*Math.sign(y-yi));
		if (yf>=0 && yf<=maxHeight){
			yfc=yf;
			(xi>x)? xf = maxWidth : xf = 0;
			xfc=xf;
			h=Math.round(maxWidth/Math.cos(rad));
		}else {
			(yf<0)? yfc = 0 : yfc = maxHeight;
			(xi>x)? 
				xf = Math.abs(yfc - y) / Math.tan(rad)
				:
				xf = maxWidth - (Math.abs(yfc - y) / Math.tan(rad));
			h=Math.round(maxWidth/Math.cos(rad))
				
			xfc=xf;
		}
		yi=y;
		xi=x;
	}
		
		let transition = h/1000;
		
		console.log(h, transition)

		face.style.transition=`transform ${transition}s linear`;
		face.style.transform=`translate(${xfc}px, ${yfc}px)`;
		

	setTimeout(()=>{
		const faceLocation = face.getBoundingClientRect();
		//console.dir(faceLocation);
		faceMove(xfc, yfc, xi, yi);
	}, h)
	
	
	
}
*/
let dir;
const compDir=()=>{

}
const faceMove = (x)=>{
	//velX+=4;

	let direction = compDir();

	if (dir==ltr){
		x+=4;
	}else x-=4;

	let facePos= face.getBoundingClientRect();
	console.dir(facePos)

	face.style.transform=`translate(${x}px)`
	
	if (facePos.left>=innerWidth-facePos.width) {
		dir = rtl;
	}
	setTimeout(()=>{
		faceMove(x)
	},10)
}
faceMove(0);







// Escuchas de eventos
addEventListener('mousemove', eyesRotation)

addEventListener('mousedown', blink);

addEventListener('mouseup', blink);

addEventListener('click', reduceEvileye)





/*

PI es la relación entre la longitud de la circunferencia y el diámetro. La circunferencia es igual a 3.14 veces el diámetro.

Un Radián es el ángulo central de una circunferencia que abarca un arco de igual longitud que el radio (1rad es aproximadamente igual a 57.3°). 180° = PI rad, 360° = 2PI rad.

Un cateto, es cualquiera de los dos lados menores de un triángulo rectángulo, los que conforman el ángulo recto. El lado de mayor medida se denomina hipotenusa.


*/