function convertToRoman(num) {
    const romans = {
       1000: 'M',
       900: 'CM',
       800: 'DCCC',
       700: 'DCC',
       600: 'DC',
       500: 'D',
       400: 'CD',
       300: 'CCC',
       200: 'CC',
       100: 'C',
       90: 'XC',
       80: 'LXXX',
       70: 'LXX',
       60: 'LX',
       50: 'L',
       40: 'XL',
       30: 'XXX',
       20: 'XX',
       10: 'X',
       9: 'IX',
       8: 'VIII',
       7: 'VII',
       6: 'VI',
       5: 'V',
       4: 'IV',
       3: 'III',
       2: 'II',
       1: 'I'
     }
   const keyz=Object.keys(romans).reverse();
   //if num is in object
   if((num in romans)===true){
     return romans[num];
   }
   else if((num in romans)!==true){
   const lower=keyz.filter((key)=> num>key);
   
   //If difference is part of the romans object
   const difference=num-lower[0];
   console.log(difference);
   if((difference in romans)!==true){
     return romans[lower[0]].concat(convertToRoman(difference));
   }
     console.log(romans[lower[0]].concat(romans[difference]))
     return romans[lower[0]].concat(romans[difference]);
   }
   
   //If difference is not part of romans object
   
   }
   
   
   convertToRoman(997);
   