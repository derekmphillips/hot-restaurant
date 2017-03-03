// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var tableArray = [
	{
		name: "John Table",
		phone: "999-999-9999",
		email: "email@email.com",
		unique: "johntable1"
	
	}
	// objects representing customers with reservations go here
	// you may want to start with some hard-coded for testing
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
