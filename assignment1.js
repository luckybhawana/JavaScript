
//Assignment 
//all javascript

//works properly
function palindrome(str)
{
    var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    
    //join() joins all elemanet of an array to an string
    //reverse() reverses the order of the elements in an array
    //
    var checkPalindrome = removeChar.split('').reverse().join('');
    
    if(removeChar === checkPalindrome)
        {
            console.log(str + " is a Plaindrome");
        }
    else
        {
            console.log("<div>" + str + " is not a Palindrome </div>");
        }
}
palindrome("eye");


//works properly
function count(string)
{
    //var string = "I love javascript programming";
    
    var count = 0;
    var count1 = 0;
    
    for(var i = 0; string.length >  i; i++)
        {
            if(string.charAt(i) == 'i')
                {
                    ++count;  
                    //console.log("Number of count for i is " + count);
                }
            if(string.charAt(i) == 'a')
                {
                   ++count1;
                }

        }
     console.log("Number of count for i is " + count);   
     console.log("Number of count for a is " + count1);
}

console.log(count("i love javascript programming"));


 // works properly
var str = "I am mad";

console.log(str + " = "+ str.split("").join("").split(" ").reverse().join(" "));


//works properly
var users = ["Kiran","Ashwini","ChandraShekar","Vishal"];

//i have a list of users, add a new users "Ravi" after Ashwini
function listUsers()
{
    //splice adds/removes items to/from an array and return the removed items.
    users.splice(2,0,"Ravi"); //at position 2, remove 0                                 but add "ravi"
    
    console.log(users);
}
console.log(listUsers());


//Remove the user "ChnadraShekar" if he is before "Vishal"
function removeUsers()
{
    //splice adds/removes items to/from an array and return the removed items.
    users.splice(3,1); //at position 3, remove 1 add nothing
    
    console.log(users);
}
console.log(removeUsers());

