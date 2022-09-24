var names = new Array();
names[0] ="yaakov";
names[1] ="John";
names[2] ="Jen";
names[3] ="jason";
names[4] ="parul";
names[5] ="disha";
names[6] ="anjali";
names[7] ="sanskar";
names[8] ="suyash";
names[9] ="yash";
names[10] ="deepak";
names[11] ="prazal";
names[12] ="chutiya";
for(var i = 0; i< names.length ; i++){
    if(names[i].charAt(0)=== 'J' || names[i].charAt(0)=== 'j')
    {
        console.log("Goodbye "+ names[i])

    }
    else 
        console.log("Hello "+ names[i])
}

