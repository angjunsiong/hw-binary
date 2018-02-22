var exercise = {};

exercise.roman = function(TimeHere){

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    // 
    //-------------------------------------

    Hour = TimeHere.getHours();
	Min = TimeHere.getMinutes();
	Sec = TimeHere.getSeconds();

	var Roman = {
        hour_col1 : Math.floor (Hour/10),
        hour_col2 : Hour - Math.floor (Hour/10)*10,
        min_col1 : Math.floor (Min/10),
        min_col2 : Min - Math.floor (Min/10)*10,
        sec_col1 : Math.floor (Sec/10),
        sec_col2 : Sec - Math.floor (Sec/10)*10,
    }
  
	return Roman

};

exercise.binary = function(TimeHere, col){

    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
    //    var binary = { 
    //        position8 : 'off', 
    //        position4 : 'on', 
    //        position2 : 'on', 
    //        position1 : 'on', 
    //    }; 
    // 
    //----------------------------------------------------------
    
    Hour = TimeHere.getHours();
	Min = TimeHere.getMinutes();
	Sec = TimeHere.getSeconds();

    hour_col1 = Math.floor (Hour/10);
    hour_col2 = Hour - Math.floor (Hour/10)*10;
    min_col1 = Math.floor (Min/10);
    min_col2 = Min - Math.floor (Min/10)*10;
    sec_col1 = Math.floor (Sec/10);
    sec_col2 = Sec - Math.floor (Sec/10)*10;

    var RomanRaw = [hour_col1, hour_col2, min_col1, min_col2, sec_col1, sec_col2]; 
    // console.log(RomanRaw)

    var Switch = {
        block4 : 'off',
        block3 : 'off',
        block2 : 'off',
        block1 : 'off',
    }

    // block 4 is "8" block
    // block 3 is "4" block
    // block 2 is "2" block
    // block 1 is "1" block

    if (RomanRaw[col-1] >= 8){
        Switch.block4 = 'on';
        RomanRaw[col-1] -= 8;
    }

    // console.log(RomanRaw[col-1])
    // console.log(Switch)
    
    if (RomanRaw[col-1] >= 4){
        Switch.block3 = 'on';
        RomanRaw[col-1] -= 4;
    }

    // console.log(RomanRaw[col-1])
    // console.log(Switch)

    if (RomanRaw[col-1] >= 2){
        Switch.block2 = 'on';
        RomanRaw[col-1] -= 2;
    }

    // console.log(RomanRaw[col-1])
    // console.log(Switch)

    if (RomanRaw[col-1] >= 1){
        Switch.block1 = 'on';
        RomanRaw[col-1] -= 1;
    }

    // console.log(RomanRaw[col-1])
    // console.log(Switch)

	return Switch

};