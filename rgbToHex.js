
/*
* transform rgb value to hexadecimal value
* example:
*   rgbToHex( "rgb(  )" )   //
* */

const rgbToHex = function (rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+).*\)$/);
    console.log(rgb);
};

export default rgbToHex;
