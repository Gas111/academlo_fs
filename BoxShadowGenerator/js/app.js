const shadowBox=document.querySelector(".shadow__box");
const textBackgrounColor=document.querySelector("#back_color");
const textBorderColor=document.querySelector("#border_color");
const rangeBorderRadius=document.querySelector("#border_radius");
const rangeHeight=document.querySelector("#range_height");
const rangeWidth=document.querySelector("#range_width");
const rangeHoffset=document.querySelector("#horizontal_offset");
const rangeVoffset=document.querySelector("#vertical_offset");
const rangeBlurRadius=document.querySelector("#blur_radius");
const rangeSpreadRadius=document.querySelector("#spread_radius");
const backShadowColor=document.querySelector("#back_shadow_color");

// variables rem box,
const remBorderRadius=document.querySelector("#rem_border_radius");
const remRangeHeight=document.querySelector("#rem_range_height");
const remRangeWidth=document.querySelector("#rem_range_width");

// variables px box,
const pxHorizontalOffset=document.querySelector("#px_horizontal_offset");
const pxVerticalOffset=document.querySelector("#px_vertical_offset");
const pxBlurRadius=document.querySelector("#px_blur_radius");
const pxSpreadRadius=document.querySelector("#px_spread_radius");



// variables auxiliares
var hOffsetValue=0;
var vOffsetValue=0;
var blurRadiusValue=0;
var spreadRadiusValue=0;
var color="black";


textBackgrounColor.addEventListener("change",(e)=>{
    shadowBox.style.backgroundColor=e.target.value;
    console.log(e.target.value);
});


textBorderColor.addEventListener("change",(e)=>{
    shadowBox.style.borderColor=e.target.value;
    console.log("color",e.target.value);
});

rangeBorderRadius.addEventListener("input",(e)=>{
    shadowBox.style.borderRadius= `${e.target.value}rem`;
    console.log("radio borde",e.target.value);
    remBorderRadius.value=e.target.value;
});



rangeHeight.addEventListener("input",(e)=>{
    shadowBox.style.height= `${e.target.value}rem`;
    console.log(e.target.value);
    remRangeHeight.value=e.target.value;
});


rangeWidth.addEventListener("input",(e)=>{
    shadowBox.style.width= `${e.target.value}rem`;
    console.log(e.target.value);
    remRangeWidth.value=e.target.value;
});



rangeHoffset.addEventListener("input",(e)=>{
    shadowBox.style.boxShadow= `${e.target.value}px ${vOffsetValue}px ${blurRadiusValue}px ${spreadRadiusValue}px ${color}`;
    hOffsetValue=e.target.value;
    pxHorizontalOffset.value=e.target.value;
    // console.log(rangeHoffset.getAttributeNa);
    
});

rangeVoffset.addEventListener("input",(e)=>{
    shadowBox.style.boxShadow= `${hOffsetValue}px ${e.target.value}px ${blurRadiusValue}px ${spreadRadiusValue}px ${color}`; 
     console.log(e.target.value, hOffsetValue);
    vOffsetValue=e.target.value;
    pxVerticalOffset.value=e.target.value;
});


rangeBlurRadius.addEventListener("change",(e)=>{
    shadowBox.style.boxShadow= `${hOffsetValue}px ${vOffsetValue}px ${e.target.value}px ${spreadRadiusValue}px ${color}`; 
    console.log(e.target.value);
    blurRadiusValue=e.target.value;
    pxBlurRadius.value=e.target.value;
});


rangeSpreadRadius.addEventListener("input",(e)=>{
    shadowBox.style.boxShadow=  `${hOffsetValue}px ${vOffsetValue}px ${blurRadiusValue}px ${e.target.value}px ${color}`; 
    console.log(e.target.value);
    spreadRadiusValue=e.target.value;
    pxSpreadRadius.value=e.target.value;
});


backShadowColor.addEventListener("input",(e)=>{
    shadowBox.style.boxShadow=  `${hOffsetValue}px ${vOffsetValue}px ${blurRadiusValue}px ${spreadRadiusValue}px ${e.target.value}`; 
    console.log(e.target.value);
    color=e.target.value;
});


// cambio en los box REM y PX

pxBlurRadius.addEventListener("change",(e)=>{


})







