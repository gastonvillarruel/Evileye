addEventListener('click', e=>{
	console.log(e);
});

// addEventListener('mousemove', e=>{
// 	const root = document.documentElement;
// 	let leftEyeX = e.clientX - 200;
// 	let leftEyeY = e.clientY - 473;
// 	let rightEyeX = e.clientX - 250;
	
// 	(leftEyeY<=-30 || leftEyeY>=30)?
// 		(leftEyeY>=30)?
// 			root.style.setProperty('--lefteyeY', `30px`)
// 			:
// 			root.style.setProperty('--lefteyeY', `-30px`)
// 		:
// 		root.style.setProperty('--lefteyeY', `${leftEyeY}px`);

// 	(leftEyeX<=-16 || leftEyeX>=16)?
// 		(leftEyeX>=16)?
// 			root.style.setProperty('--lefteyeX', `16px`)
// 			:
// 			root.style.setProperty('--lefteyeX', `-16px`)
// 		:
// 		root.style.setProperty('--lefteyeX', `${leftEyeX}px`);

// 	(leftEyeY<=-30 || leftEyeY>=30)?
// 		(leftEyeY>=30)?
// 			root.style.setProperty('--righteyeY', `30px`)
// 			:
// 			root.style.setProperty('--righteyeY', `-30px`)
// 		:
// 		root.style.setProperty('--righteyeY', `${leftEyeY}px`);

// 	(rightEyeX<=-16 || rightEyeX>=16)?
// 		(rightEyeX>=16)?
// 			root.style.setProperty('--righteyeX', `16px`)
// 			:
// 			root.style.setProperty('--righteyeX', `-16px`)
// 		:
// 		root.style.setProperty('--righteyeX', `${rightEyeX}px`);


// 	console.log(leftEyeX);


// })



const leftEye = document.querySelector('.lefteye');

const leftEyePos = leftEye.getBoundingClientRect();
	//devuelve un objecto (DOMRect) con datos sobre la posición del elemento relativa a la esquina superior izquierda de la ventana.
console.dir(leftEye.clientWidth)

addEventListener('mousemove', e=>{

	// coordenadas del mouse
	const mouseX = e.clientX;
	const mouseY = e.clientY;

	// coordenadas del ojo
	const leftEyeX = leftEyePos.left + (leftEyePos.width/2);
	const leftEyeY = leftEyePos.top + (leftEyePos.height/2);

	//diferencia entre las anteriores (distancia)
	const deltaX = leftEyeX - mouseX;
	const deltaY = leftEyeY - mouseY;

	// posición del mouse en radianes (medida de ángulo)
	const rad = Math.atan2(deltaY, deltaX);

	// conversión a grados (deg) por regla de 3, y redondeo
	const deg = Math.round(rad*(180/Math.PI));


	console.log(leftEyeX, leftEyeY)
	console.log(mouseX, mouseY)
	console.log(deltaX, deltaY)
	console.log(rad, deg)
})


console.log(innerWidth, innerHeight)




/*

PI es la relación entre la longitud de la circunferencia y el diámetro. La circunferencia es igual a 3.14 veces el diámetro.

Un Radián es el ángulo central de una circunferencia que abarca un arco de igual longitud que el radio (1rad es aproximadamente igual a 57.3°). 180° = PI rad, 360° = 2PI rad.

Un cateto, es cualquiera de los dos lados menores de un triángulo rectángulo, los que conforman el ángulo recto. El lado de mayor medida se denomina hipotenusa.



*/