module.exports = function main(number) {
	number = String(number);
	var check = /^\d+$/;
    if (!check.test(number))
    {
    	return;
    }
    
    var LCDarray = new Array;
    LCDarray[0] = ['._.', '|.|', '|_|']; //0 
    LCDarray[1] = ['...', '..|', '..|'];
    LCDarray[2] = ['._.', '._|', '|_.'];
    LCDarray[3] = ['._.', '._|', '._|'];
    LCDarray[4] = ['...', '|_|', '..|'];
    LCDarray[5] = ['._.', '|_.', '._|'];
    LCDarray[6] = ['._.', '|_.', '|_|'];
    LCDarray[7] = ['._.', '..|', '..|'];
    LCDarray[8] = ['._.', '|_|', '|_|'];
    LCDarray[9] = ['._.', '|_|', '..|'];

    var result = '';

   	for(var row=0; row<3; row++)
   	{
    	for(var i=0; i<number.length; i++)
    	{
    		result = result + LCDarray[number[i]][row] + ' ';
   		}

   		result = result.substr(0,result.length-1);
   		result = result + '\n';
    }

    console.log(result);
    return result;
};