<script>
                                                                                           function validateform(){
var candidate_name=document.register.name.value;
                       if(candidate_name==null || candidate_name==""){
         alert("Please Enter your name.");
                                                return false;
}
else if(document.register.pass.value.length<8 || document.register.pass.value.length>20){
alert("Please enter password in more than 8 and less thAN 20 char.");
return false;
}
                 
else if(document.register.pin.value.length<6 || document.register.pin.value.length>6){
alert("Please enter pincode in 6 digits only.");
return false;
}
else if(isNaN(document.register.pin.value)){
alert("Pincode must be in digits only!!");
return false;
}
}
</script>