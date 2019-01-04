   /*
        Navigate to directory 
        type 'node kata2.js AAAA BBBBB ABABABAB BABABA AAABBB'
        (Sample Input)
        
        code returns
        3 4 0 0 4 
        (Sample Output)
    */

    function read_string(input){
        
        var deletions = 0;
        var this_letter = input.charAt(0);

        for(var i=1;i<input.length;i++){

            if(input[i]==this_letter) {
                deletions++;
            } else {
                this_letter=input[i];
            }
            
        }
        console.log(deletions);

    }

    process.argv.forEach(function (val, index) {
        if (index>1) read_string(val);
    });