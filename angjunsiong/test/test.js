var should = require('chai').should();
var ex = require('./ex.js').load('./exercise.js');


function timeStamp(time){

    var stamp = {
        hour_col1 : Math.floor(time.getHours() / 10),
        hour_col2 : (time.getHours() % 10),
        min_col1  : Math.floor(time.getMinutes() / 10),
        min_col2  : (time.getMinutes() % 10),
        sec_col1  : Math.floor(time.getSeconds() / 10),
        sec_col2  : (time.getSeconds() % 10)
    };
    return stamp;
}

function binary(time, col){

    var stamp  = timeStamp(time);
    var number = stamp[col];

	var binary = { 
        position8 : 'off', 
		position4 : 'off', 
		position2 : 'off', 
		position1 : 'off', 
    }; 

	if (number >= 8){
        binary.position8 = 'on';
        number -= 8;
    }
    if (number >= 4){
        binary.position4 = 'on';
        number -= 4;
    }
    if (number >= 2){
        binary.position2 = 'on';
        number -= 2;
    }
    if (number >= 1){
        binary.position1 = 'on';
        number -= 1;
    }
   return binary;
}



for(i=0;i<10;i++){

	var hours   = Math.floor(Math.random()*24);
	var minutes = Math.floor(Math.random()*60);
	var seconds = Math.floor(Math.random()*60);

	var time = new Date(Date.parse('09 Aug 2017 ' + 
				hours   + ':' +
				minutes + ':' +
				seconds));

	var professor = {
		hour_col1 : binary(time,'hour_col1'),
		hour_col2 : binary(time,'hour_col2'),
		min_col1  : binary(time,'min_col1'),
		min_col2  : binary(time,'min_col2'),
		sec_col1  : binary(time,'sec_col1'),
		sec_col2  : binary(time,'sec_col2')
	};

	var student = {
		hour_col1 : ex.binary(time,'hour_col1'),
		hour_col2 : ex.binary(time,'hour_col2'),
		min_col1  : ex.binary(time,'min_col1'),
		min_col2  : ex.binary(time,'min_col2'),
		sec_col1  : ex.binary(time,'sec_col1'),
		sec_col2  : ex.binary(time,'sec_col2')
	};

    check(professor,student, time);
}

function check(professor,student, time){

    describe('Binary Clock Test', function() {
        var label = 'The time is ' + time.toTimeString();
        it(label, function() {
            professor.should.eql(student);
        });
    });

}
