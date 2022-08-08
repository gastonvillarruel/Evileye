addEventListener('click', e=>{
	console.log(e);
});


const eyes = document.querySelectorAll('.pupil-container');


addEventListener('mousemove', e=>{

	eyes.forEach(eye=>{

		const eyePos = eye.getBoundingClientRect();
		//devuelve un objecto (DOMRect) con datos sobre la posición del elemento relativa a la esquina superior izquierda de la ventana.

		// coordenadas del mouse
		const mouseX = e.clientX;
		const mouseY = e.clientY;

		// coordenadas del ojo
		const eyeX = eyePos.left + (eyePos.width/2);
		const eyeY = eyePos.top + (eyePos.height/2);

		//diferencia entre las anteriores (distancia)
		const deltaX = eyeX - mouseX;
		const deltaY = eyeY - mouseY;

		// posición del mouse en radianes (medida de ángulo)
		const rad = Math.atan2(deltaY, deltaX);

		// conversión a grados (deg) por regla de 3, y redondeo
		const deg = Math.round(rad*(180/Math.PI));


		eye.style.transform = `rotate(${deg}deg)`


		console.log(eyeX, eyeY)
		console.log(mouseX, mouseY)
		console.log(deltaX, deltaY)
		console.log(rad, deg)
	})
})




/*

PI es la relación entre la longitud de la circunferencia y el diámetro. La circunferencia es igual a 3.14 veces el diámetro.

Un Radián es el ángulo central de una circunferencia que abarca un arco de igual longitud que el radio (1rad es aproximadamente igual a 57.3°). 180° = PI rad, 360° = 2PI rad.

Un cateto, es cualquiera de los dos lados menores de un triángulo rectángulo, los que conforman el ángulo recto. El lado de mayor medida se denomina hipotenusa.


*/