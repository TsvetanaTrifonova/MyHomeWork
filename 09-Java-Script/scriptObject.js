//task 1
function ObjectStudent(){
	var student = {
		name: 'Ivan',
		age: '20',
		experience:'1',
		mark: '6',
		learn: function() { return 'learning computer science' },
		enjoy: function() { return 'enjoing' }
	}

  console.log('	I.');
	for (var prop in student){
	       console.log(prop + ": " + student[prop]);
	}

	console.log('');
	console.log('	II.');
	console.log(student.name);
	console.log(student.age);
	console.log(student.experience);
	console.log(student.mark);
	console.log(student.learn());
	console.log(student.enjoy());
}
var bntStudent = document.getElementById('bntStudent');
bntStudent.addEventListener('click', ObjectStudent);
