//Objects
//.............
//Associative Array
//Hash Table
//Dictionary

//console.log(typeof [1,2])
//'Lana'.toUpperCase(); //Strings are objects 

//JSON - JavaScript Object Notation
//[{},{},{}, ]


var user = {
	name: 'Benny',
	age: 50,
	car: {
		make: 'Audi',
		model: 'TT',
		year: '2003'
	}
};

user.gender = 'Male';

var add_me = 'hobby';
user[add_me] = 'Tennis';

//console.log(user);
//console.log(user.name);
//console.log(user.car.make);



for (var key in user) 
{
	var obj = user[key];
	if (typeof obj == 'object') 
	{
		for (var key2 in user[key])
		{
			console.log(key2 + ' = '  + obj[key2]);
			
		}	
	}
	else
	{
		console.log(key + ' = ' + user[key]);
	}
}
