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

const faceMove = (x, y, ang, xi, yi)=>{
	
	const maxWidth=innerWidth - face.clientWidth;
	const maxHeight=innerHeight - face.clientHeight;
	
	face.style.transition='transform 2s ease';

	// función llamada sin argumentos:
	if (y==undefined && x==undefined && ang==undefined) {
		
		y = Math.floor(Math.random()*(maxHeight));
		x = maxWidth;
		let rad = Math.atan2(y,x);
		ang = rad * (180/Math.PI);
		//face.style.transform=`translate(${x}px, ${y}px)`;
		xi = 0;
		yi = 0;
		console.log('hola', maxWidth, x)
		face.style.transform=`translate(${x}px, ${y}px)`;
	}
	
	// función llamada con argumentos:
	if (y==maxHeight && x!= maxWidth){
		xi = x;
		yi = y;

		y = Math.tan(ang*Math.PI/180) * x;

		if (y >= 0) {
			x = 0;
			let rad = Math.atan2(maxHeight-y, xi);
			ang = rad * (180/Math.PI);
		}
		else {
			let rad2 = Math.atan2(y, x);
			x = Math.tan(rad2)*y;
			y = 0;

			let rad = Math.atan2(y, xi-x);
			ang = rad * (180/Math.PI);
		}
	}

	if (x==maxWidth){
		y = Math.tan(ang*Math.PI/180) * x;
		yi = y;
		xi = x;

		if (y>maxHeight){
			let rad2 = Math.atan2(y-maxHeight, x);
			x = Math.tan(rad2)*y;
			y = maxHeight;
	
			let rad = Math.atan2(maxHeight - y, maxWidth - x);
			ang = rad * (180/Math.PI);
		}else{
			x = 0;
			let rad = Math.atan2(y-yi, xi);
			ang = rad * (180/Math.PI);
			
		}
	}
	


	face.style.transform=`translate(${x}px, ${y}px)`;

	// if (x==undefined) x = maxWidth;
	// else if (x==0) x = maxWidth;
	// else x = 0;
		
		
	
	
	


	setTimeout(()=>{
		const faceLocation = face.getBoundingClientRect();
		console.dir(faceLocation);
		faceMove(x, y, ang, xi, yi);
	}, 2000)
		
	
	
	console.log(x, y)
}

faceMove();







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