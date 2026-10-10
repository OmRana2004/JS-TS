           // WHAT WILL THE OUTPUT OF THIS QUESTION AND WHY?
                                
const user = {
    name: "OM",
    greet(){                         // BAHI ISKA OUTPUT UNDEFINED HOGA KUKE HAR FUNCTION KA APNA THIS() HOTA HA AUR BUT setTieout MEA WINDOW KA THIS() HOTA HA OTHERWISE UNDEFINED HOTA HA.
       setTimeout(function(){        // BUT IF WE WANT TO GET THE OUTPUT THEN WE HAVE TO USE A ARROW FUNCTION IN setTimeout, BECAUSE ARROW FUNCTION USES LEXICAL THIS().
        console.log(this.name);      // LEXICAL THIS(), MEANS KE WO APNA PARENT KA THIS BHE USE KAR SAKTA HA... UNCOMMENT NEXT CODE TO SEE THE OUTPUT.
       },0)
    }
}
user.greet()

// const obj = {
//     nam:  "RAM",
//     gret(){
//         setTimeout(()=> {
//             console.log(this.nam);
//         },0)
//     }
// }
// obj.gret()