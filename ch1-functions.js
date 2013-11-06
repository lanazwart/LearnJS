unction age() {
	console.log(25);
}
age();

function animal(name, color) {
	if (typeof name =='undefined') {
		name = 'dog';
	}
	return 'My ' + color + ' ' + name  + ' ran away!';
}

var result = animal('horse', 'pink');
console.log(result);

var create = {
	// looks like: man()
	man: function (height) {
		return 'Generating a man who is ' + height + ' tall.';
	},
	 
	woman: function() {
		return 'Generating a woman ' ;
	},
	
	animal: {
		dog: function () {
			return 'Arf'
		}
	}
};

var a = create.man('2 feet');
console.log(a);

var b = create.animal.dog();
console.log(b);
