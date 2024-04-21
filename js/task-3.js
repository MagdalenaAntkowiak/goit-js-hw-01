<script>
    function getElementWidth (content, padding, border){
        const a=content.replace("px", "");
        const b=padding.replace("px", "");
    const c=border.replace("px", "");
   
    return (a + (b*2) + (c*2));



    }

 console.log(parseFloat(a), parseFloat(b), parseFl(c));
    console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px")); 

</script>