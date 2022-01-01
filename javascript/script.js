function program1(){
var data=[1,2,3,4,5,6,7,8,9,-1,-2,-3,-4];
document.getElementById("start1").innerHTML=("starting array:"+ data);
for(var i=0;i<data.length;i++){
    console.log(i,data[i])
    document.getElementById("program1").innerHTML =( "ending array is:"+ data);
   
}
}
function program2(){
    var arr=[1,2,3,4,5,6,7,8,9,-1,-2,-3,-4];
    for(var i=0;i<arr.length;i++){
       if(arr[i]<0){
           console.log(i,arr[i])
           document.getElementById("program2").innerHTML +=(i) + ":" +arr[i] + "<br>"
       }
    }
    }
    function program3(){
        var ar=[1,2,3,4,5,6]
        sum=0;
        for(var i=0;i<ar.length;i++){
         sum +=ar[i];
         console.log(sum);
        }
        document.getElementById("program3").innerHTML += sum;
    }
    function program4(){
        var max=[1,2,3,4,5,6,7,-2]
        for(var i=0;i<max.length;i++){
            if(max[i]<0){
         document.getElementById("program4").innerHTML=(max[i])
            }
            else if(max[i]>0){
                document.getElementById("program").innerHTML=(max[i])
            }
        }
    }
    function program5(){
        var largest=[1,2,3,4,5,6,7,8]
        for(var i=0;i<largest.length;i++){
                if(largest[i] !=largest[largest.length-1]){
                    console.log(i,largest[i])
                    var a=largest[i] 
                }else if(a>0){
                    console.log(a)
                    document.getElementById("prog").innerHTML +=a;
                }
                
               
            }
        }
        function program6(){
            var evenodd=[1,2,3,4,5,6,7,8,10]
            even=0;
            odd=0;
            for(var i=0;i<evenodd.length;i++){
                if(evenodd[i]%2==0){
                even++;
                console.log(even);
              document.getElementById("program6").innerHTML=even;
                }
                else{
                    odd++;
                    console.log(odd);
                    document.getElementById("pro").innerHTML=odd;
                }
        }
    }

    function negative(){
        var negative=[-1,-2,-3,-4,-5,-6,1,2,3,4,5,6,7,8,9]
        var ele=0
        for(var i=0;i<negative.length;i++){
            if(negative[i]<0){
              ele++
              console.log(ele);
              document.getElementById("program7").innerHTML=ele;
            }
        }
    }
    function program8(){
        var a=[1,2,3,4,5,6]
        var b=[2,4,6,8,10]
        for(var i=0;i<b.length;i++){
            a.push(b[i])
            console.log(a);
            document.getElementById("program8").innerHTML=a;
        }
    }
    function insert(){
        var insert=[1,2,3,4,5,6,7]
        document.getElementById("start").innerHTML=("starting Array"+ ':'+insert);
       insert.push(10);
       console.log(insert);
       document.getElementById("program9").innerHTML=("new array is"+ ':' +insert);
    }
    function del(){
        var d=[1,2,3,4,5,6,7,8,9,10]
         document.getElementById("start10").innerHTML="Existing array is:"+d
            d.splice(1,1);
            console.log(d);
            document.getElementById("program10").innerHTML="After deleting array:"+d;
        }

    function frequency(){
        var fre=[1,2,3,4,5,10]
        document.getElementById("start11").innerHTML=("old array is"+':'+fre);
        for(var i=0;i<fre.length;i++){
            frequency=1/fre[i];
            console.log("frequency is",frequency);
            document.getElementById("program11").innerHTML+=("frequency of index"+[i]+':'+frequency+'<br>');
        }
    
    }

    function program12(){
    var a=[1,2,3,4,5,6,7,8,9,10]
    document.getElementById("start12").innerHTML=("old array is"+':'+a);
    for(var i=0;i<a.length;i++){
           if (a[i]%2==0) {
            console.log("even number in array",a[i]);
            document.getElementById("even").innerHTML+=(a[i]);
           }
           else{
               console.log("odd array is:",a[i]);
               document.getElementById("odd").innerHTML+=(+a[i])
           }
    }

    }
//   function program13(){
//     var a=[1,2,3,4,2,3,4,5];
//     var counts=[];
//     a.forEach((x)=>{
//         counts[x] = (counts[x] || 0) +1 ;
//     });
//     console.log(counts)
//     document.getElementById("start13").innerHTML="count duplicate element:"+counts+"<br>";
    
// }
    
    function program15(){
        var a1=[1,2,3,4]
        document.getElementById("first").innerHTML+=a1;
        var a2=[5,6,7,8]
        document.getElementById("second").innerHTML+=a2;
        var a3=[9,10,11]
        document.getElementById("third").innerHTML+=a3;

        a1.push(a2)
        console.log(a1);
        a1.push(a3);
        console.log(a1);
        document.getElementById("program15").innerHTML+=a1;

    }
    function program16(){
        var rev=[1,2,3,4,5]
        var reverse=[]
        for ( i =rev.length-1;i>=0; i--) {
            reverse.push(rev[i])
            console.log(rev[i])
            document.getElementById("program16").innerHTML=("reverse array is:"+reverse);
        }
    }

    function program17(){
        var sep=[1,2,3,4,5,6,7,8,9]
        document.getElementById("program17").innerHTML+=sep;
        var e=[];
        var o=[];
        for (let i = 0; i < sep.length; i++) {
            if (sep[i]%2==0) {
                var e=sep[i];
                console.log(e);
                document.getElementById("sepeven").innerHTML+=e
            }
            else{
                var o=sep[i];
                console.log(o);
                document.getElementById("sepodd").innerHTML+=o
                
            }
            
        }

    }
    function program18(){
    var a=document.getElementById("num")
    var p=a.value;
    var s=document.getElementById("search");
    var ser=[1,2,3,4,5]
    for (let i = 0; i < ser.length; i++) {
        if(p==ser[i]){
            console.log("number is available",a);
           document.write("number is available");
        }
        else if(p!=ser[i]){
           s.innerHTML="number is not available"
        }
        
    }
}
function program20(){
var y=[1,2,3,4,5,6,7,8,9,10]
y.forEach((x)=>{
    if(x%2==0){
        console.log(x);
        document.getElementById("start20").innerHTML+=x;
    }
});
}

function program23()
{
var userInput = document.getElementById("num1").value;
var f=document.getElementById("program23");
switch (userInput) {

case (userInput==1):
document.write("mOnday")
break;

case (userInput==2):
document.write("Tuesday")
break;

// default:
// f.innerHTML="Invalid Value";
// break;
}
}