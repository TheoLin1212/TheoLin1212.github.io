//制作五角星方法 degree为零的时候星星正立
function drawStar(cxt, r, R, x, y, degree) {
	cxt.beginPath();
	for(var i = 0; i < 5; i++) {
		cxt.lineTo(Math.cos((54 + degree + i * 72) / 180 * Math.PI) * R + x, Math.sin((54 + degree + i * 72) / 180 * Math.PI) * R + y);
		cxt.lineTo(Math.cos((90 + degree + i * 72) / 180 * Math.PI) * r + x, Math.sin((90 + degree + i * 72) / 180 * Math.PI) * r + y);

	}
	cxt.closePath();
	cxt.fill();
	cxt.stroke();
}