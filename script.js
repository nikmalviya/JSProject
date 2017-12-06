var hourhand = document.getElementById('hourhand');
var minutehand = document.getElementById('minutehand');
var secondhand = document.getElementById('secondhand');

function Clock() {
	var date = new Date();
	var hour = date.getHours() % 12; 
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var hourdeg = (hour * 30) + (0.5 * minute); 
	var minutedeg = (minute * 6) + (0.1 * second); 
	var seconddeg = second * 6;
	hourhand.style.transform = 'rotate(' + hourdeg + 'deg)';
	minutehand.style.transform = 'rotate(' + minutedeg + 'deg)';
	secondhand.style.transform = 'rotate(' + seconddeg + 'deg)';

	setInterval(Clock, 1000);
};
Clock();
/*function change()
{
	document.getElementsById("x").style.backgroundColor="red";
}*/