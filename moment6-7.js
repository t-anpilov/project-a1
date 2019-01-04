const ratio = 9549;
const hp_kwt = 1.34;
var getPower = (x, y) => hp_kwt * (x * y) / ratio;

class EffectivePower {
	constructor(name, capacity, moment, rotation){
		this._name = name;
		this._capacity = capacity;
		this._moment = moment;
		this._rotation = rotation;
	}
	
	run(){console.log(this._name + ' power on ' + this._rotation + 'rpm is: ' + Math.round(getPower(this._moment, this._rotation)) + 'hp')};
    
	count(){console.log(this._name + ' specific power is ' + Math.round((getPower(this._moment, this._rotation)) * 1000 / this._capacity) + 'hp/L')};
	
	result(){
		let res = document.createElement('p');
		res.innerHTML = this._name + ' power on ' + this._rotation + 'rpm is: ' + Math.round(getPower(this._moment, this._rotation)) + 'hp';
		document.body.appendChild(res);
	}

	result2(){
		let res = document.createElement('p');
		res.innerHTML = this._name + ' specific power is ' + Math.round((getPower(this._moment, this._rotation)) * 10000 / this._capacity)/10 + 'hp/L';
		document.body.appendChild(res);
	}

	result_moment(){
		let res = document.createElement('p');
		res.innerHTML = this._name + ' specific moment is ' + Math.round(this._moment * 10000 / this._capacity)/10 + 'N*m/L';
		document.body.appendChild(res);
		let empty = document.createElement('p');
		empty.innerHTML  = '';
		document.body.appendChild(empty);
	}
}

var audi = new EffectivePower('Audi A4 1.9 TDI', 1896, 310, 1900);
audi.run();
audi.count();

document.getElementById('power').addEventListener('click', addCar);
window.addEventListener('keypress', comeOn);

function addCar() {
	let a = Name.value;
	let b = +Capacity.value;
	let c = +Moment.value;
	let d = +Rot.value;
	let am = new EffectivePower(a, b, c, d);
	am.result();
	am.result2();
	am.result_moment();
}

function comeOn(event) {
	if (event.keyCode == 13) {addCar()}
};