var result;
var str;
function clearall() {
    var str=document.getElementById("screen");
    str.value="";
}
function del(){
    str=document.getElementById("screen");
    str.value=str.value.substring(0,str.value.length-1);
}
function Click(nums,str) {
    str = document.getElementById("screen");
    str.value = str.value + nums;
}
function cal(str){
    var index=str.lastIndexOf("(");
    if(index>-1){
        var endindex=str.indexOf(")",index);
        if(endindex>-1){
            var result=cal(str.substring(index+1,endindex));
            return cal(str.substring(0,index)+(""+result)+str.substring(endindex+1));
        }
    }
    index=str.indexOf("+");
    if(index > -1){
        return cal(str.substring(0,index)) + cal(str.substring(index + 1));
    }
    index = str.lastIndexOf("-");
    if(index > -1){
        return cal(str.substring(0,index)) - cal(str.substring(index + 1));
    }
    index = str.lastIndexOf("*");
    if(index > -1){
        return cal(str.substring(0,index)) * cal(str.substring(index + 1));
    }
    index = str.lastIndexOf("/");
    if(index > -1){
        return cal(str.substring(0,index)) / cal(str.substring(index + 1));
    }
    if("" === str)
        return 0;
    else
        return Number(str);
}
function deal(str) {
    var res;
    try {
        eval(str);
    }
    catch (e){
        res="input error";
        return res;
    }
    var index=str.indexOf("*");
    if(str[index+1]==="*"){
        //str=eval(str);
        res=eval(str);
        return res;
    }
    res = cal(str);
    if(res===Infinity||res===-Infinity)
        return "divided by zero";
    return res;
}
function get_result() {
    str = document.getElementById("screen");
    result=deal(str.value);
    while(result.toString()===str.value){
        str.value="ERROR!input again";
        clearall();
    }
    str.value=result;
}
