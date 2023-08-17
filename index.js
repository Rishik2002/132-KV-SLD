const line1 = document.querySelector("#line1");
const line11 = document.querySelector("#line1-1");
const CB1 = document.querySelector("#CB-1");

const iso1 = document.querySelector("#iso1-1");

const iso2 = document.querySelector("#iso1-2")

const btn = document.querySelector("[button]");

const btnColor = btn.style.backgroundColor;

const line2 = document.querySelector("#line2");
const line2Color = line2.style.backgroundColor;

const line22 = document.querySelector("#line2-2");
const line22Color = line22.style.backgroundColor;


const line23 = document.querySelector("#line2-3");
const line23Color = line23.style.backgroundColor;

const line31 = document.querySelector("#line3-1");
const line31Color = line31.style.backgroundColor;


const line32 = document.querySelector("#line3-2");
const line32Color = line32.style.backgroundColor;


const line1Color = line1.style.backgroundColor;

const CB1borderColor = CB1.style.borderColor;

// const CB1Color = CB1.style.backgroundColor;

const line11Color = line11.style.backgroundColor;

const CB1backColor = CB1.style.backgroundColor;

CB1.addEventListener("click",()=>{

    if(CB1.style.borderColor === CB1borderColor && CB1.style.backgroundColor === CB1backColor){
        CB1.style.backgroundColor = "red";
        //   CB1Color = CB1.style.backgroundColor;

    }

    else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === iso1BorderColor && bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === "darkorange"){
        alert(`Bay5iso1 is close already and charge the bus1 therefore Bay1iso1 is can't close `);
    }

    else if(iso2.style.backgroundColor === "red" && iso2.style.borderColor === iso2BorderColor && bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === "darkorange"){
        alert(`Bay5iso2 is close already and charge the bus2 therefore Bay1iso2 is can't close `);
    }

    else if(iso1.style.backgroundColor === "red" && bay5iso2.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === "green" ){
        alert(`To close the CB-1 for charging the BUS-1 & BUS-2 through CB-3 ,first open the Bay5iso2`)
    }

    else if(iso2.style.backgroundColor === "red" && bay5iso1.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === "green" ){
        alert(`To close the CB-1 for charging the BUS-1 & BUS-2 through CB-3 ,first open the Bay5iso1`)
    }

    else if(CB1.style.borderColor === "red" && CB1.style.backgroundColor === CB1backColor && iso1.style.borderColor === iso1BorderColor && iso2.style.borderColor === iso2BorderColor){
        
        CB1.style.backgroundColor = "red";
        line11.style.backgroundColor = "red";
        line2.style.backgroundColor = "red";
        line22.style.backgroundColor = "red";
        line23.style.backgroundColor = "red";
        iso1.style.borderColor = "red";
        iso2.style.borderColor = "red";
 
    
        // CB1 close when iso1 is already close which charge the bus 1  when CB3 is Open

        if(iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && CB3.style.backgroundColor === CB3BackColor){
            line31.style.backgroundColor = "red";
            bus1.style.backgroundColor = "red";
            bay2line31.style.backgroundColor = "red";
            bay2iso1.style.borderColor = "red";
            bay3line31.style.backgroundColor = "red";
            bay3iso1.style.borderColor = "red";
            bay3line11.style.backgroundColor = "red";
            bay3line1.style.backgroundColor = "red";
            bay4line31.style.backgroundColor = "red";
            bay4iso1.style.borderColor = "red";
        
            if((bay2iso1.style.backgroundColor === "green" ) && (bay4iso1.style.backgroundColor === "green" )){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red"

                // if(CB2.style.backgroundColor === "green "  && CB4.style.backgroundColor === "green"){
                //     bay2line1.style.backgroundColor ="red"
                //     bay4line1.style.backgroundColor = "red"

                // }

            }

            else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red";
            }

            else if(bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === bay4iso1Color){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
            }


        }

           // CB1 close and charge by CB1 closing

        // else if(iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && CB3.style.backgroundColor === CB3BackColor && bay4iso1.style.backgroundColor === "green"){
        //     line31.style.backgroundColor = "red";
        //     bus1.style.backgroundColor = "red";
        //     bay2line31.style.backgroundColor = "red";
        //     bay2iso1.style.borderColor = "red";
        //     bay3line31.style.backgroundColor = "red";
        //     bay3iso1.style.borderColor = "red";
        //     bay3line11.style.backgroundColor = "red";
        //     bay3line1.style.backgroundColor = "red";
        //     bay4line31.style.backgroundColor = "red";
        //     bay4iso1.style.borderColor = "red";

        //     bay4line21.style.backgroundColor = "red"
        //     bay4line2.style.backgroundColor = "red"
        //     bay4line22.style.backgroundColor = "red"
        //     bay4line11.style.backgroundColor = "red"

        // }

        // CB1 close and charge the bus1 through iso1 when CB3 close 

        else if(iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && CB3.style.backgroundColor === "green" ){
            iso1.style.backgroundColor = "red"
        line31.style.backgroundColor = "red"
        bus1.style.backgroundColor = "red"
        bay3line31.style.backgroundColor ="red"
        bay3iso1.style.borderColor = "red"
        bay3line1.style.backgroundColor = "red"
        bay3line11.style.backgroundColor = "red"
        bay2line31.style.backgroundColor ="red"
        bay2iso1.style.borderColor = "red"
        bay2line32.style.backgroundColor ="red"
        bay2iso2.style.borderColor = "red"
        bay4line31.style.backgroundColor = "red"
        bay4iso1.style.borderColor = "red"
        
        bay3line22.style.backgroundColor = "red"
        bus2.style.backgroundColor = "red"
        bay3line32.style.backgroundColor ="red"
        bay3iso2.style.borderColor = "red"
        bay3line2.style.backgroundColor = "red"
        bay3line32.style.backgroundColor ="red"
        bay3iso2.style.borderColor = "red"
        bay4line32.style.backgroundColor = "red"
        bay4iso2.style.borderColor = "red"

        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

        }

        }

        // CB1 close when the iso2 is already is close then charge the bus 1 and CB3 is open

        else if(iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === iso1BackColor && CB3.style.backgroundColor === CB3BackColor ){
            line32.style.backgroundColor = "red";
            bus2.style.backgroundColor = "red";
            bay2line32.style.backgroundColor = "red";
            bay2iso2.style.borderColor = "red";
            bay3line2.style.backgroundColor = "red";
            bay3line22.style.backgroundColor = "red";
            bay3iso2.style.borderColor = "red";
            bay3line32.style.backgroundColor = "red";
        
            bay4line32.style.backgroundColor = "red";
            bay4iso2.style.borderColor = "red";
            // bay5line32.style.backgroundColor = "red";
            // bay5iso2.style.borderColor = "red";


            if((bay2iso2.style.backgroundColor === "green" ) && (bay4iso2.style.backgroundColor === "green" )){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red"
            }

            else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red";
            }

            else if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
            }

         
            
        }

        // CB1 close when the iso2 is already is close then charge the bus 1 and CB3 is close 

        else if(iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === iso1BackColor && CB3.style.backgroundColor === "green"){
            line32.style.backgroundColor = "red"
            bus2.style.backgroundColor = "red"
            bay3line32.style.backgroundColor ="red"
            bay3iso2.style.borderColor = "red"
            bay3line2.style.backgroundColor = "red"
            bay3line22.style.backgroundColor = "red"
            bay2line32.style.backgroundColor ="red"
            bay2iso2.style.borderColor = "red"
            bay4line32.style.backgroundColor = "red"
            bay4iso2.style.borderColor = "red"
        
            bus1.style.backgroundColor = "red"
            bay3line31.style.backgroundColor ="red"
            bay3iso1.style.borderColor = "red"
            bay3line1.style.backgroundColor = "red"
            bay3line11.style.backgroundColor = "red"
            bay2line31.style.backgroundColor ="red"
            bay2iso1.style.borderColor = "red"
            bay4line31.style.backgroundColor = "red"
            bay4iso1.style.borderColor = "red"


            if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
    
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red";
            }
    
            else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red";
            }
    
            else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
    
            }

        }

        // iso1 and iso2 close charge by CB1 closing 

        else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red" && (bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color )){
            line31.style.backgroundColor = "red";
            bus1.style.backgroundColor = "red";
            line32.style.backgroundColor = "red";
            bus2.style.backgroundColor = "red";
            bay2line31.style.backgroundColor = "red";
            bay2iso1.style.borderColor = "red";
            bay2line32.style.backgroundColor = "red";
            bay2iso2.style.borderColor = "red";
            bay3line1.style.backgroundColor = "red";
            bay3line11.style.backgroundColor = "red";
            bay3line31.style.backgroundColor = "red";
            bay3iso1.style.borderColor = "red";

            bay3line32.style.backgroundColor = "red";
            bay3iso2.style.borderColor = "red";
            bay4line31.style.backgroundColor = "red";
            bay4iso1.style.borderColor = "red";
            // bay5line31.style.backgroundColor = "red";
            // bay5iso1.style.borderColor = "red";
            bay3line2.style.backgroundColor = "red";
            bay3line22.style.backgroundColor = "red";
            bay4line32.style.backgroundColor = "red";
            bay4iso2.style.borderColor = "red";
            // bay5line32.style.backgroundColor = "red";
            // bay5iso2.style.borderColor = "red";

            if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "red"
                bay2line2.style.backgroundColor = "red"
                bay2line22.style.backgroundColor = "red"
                bay2line11.style.backgroundColor = "red"

                if(bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green"){
                    bay4line21.style.backgroundColor = "red"
                    bay4line2.style.backgroundColor = "red"
                 bay4line22.style.backgroundColor = "red"
                 bay4line11.style.backgroundColor = "red"
                }
      
            }

            else if(bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green"){
                bay4line21.style.backgroundColor = "red"
                bay4line2.style.backgroundColor = "red"
                bay4line22.style.backgroundColor = "red"
                bay4line11.style.backgroundColor = "red"
            }

            
        }


        else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red" && (bay4iso1.style.backgroundColor === "green"|| bay4iso2.style.backgroundColor === "green" )){

            line31.style.backgroundColor = "red";
            bus1.style.backgroundColor = "red";
            line32.style.backgroundColor = "red";
            bus2.style.backgroundColor = "red";
            bay2line31.style.backgroundColor = "red";
            bay2iso1.style.borderColor = "red";
            bay2line32.style.backgroundColor = "red";
            bay2iso2.style.borderColor = "red";
            bay3line1.style.backgroundColor = "red";
            bay3line11.style.backgroundColor = "red";
            bay3line31.style.backgroundColor = "red";
            bay3iso1.style.borderColor = "red";

            bay3line32.style.backgroundColor = "red";
            bay3iso2.style.borderColor = "red";
            bay4line31.style.backgroundColor = "red";
            bay4iso1.style.borderColor = "red";
           
            bay3line2.style.backgroundColor = "red";
            bay3line22.style.backgroundColor = "red";
            bay4line32.style.backgroundColor = "red";
            bay4iso2.style.borderColor = "red";


            bay4line21.style.backgroundColor = "red"
            bay4line2.style.backgroundColor = "red"
            bay4line22.style.backgroundColor = "red"
            bay4line11.style.backgroundColor = "red"


        }


        // iso1 is close , CB3 close & bay2iso2 close 

        else if(iso1.style.backgroundColor === "red" && CB3.style.backgroundColor === "green"){
            line31.style.backgroundColor = "red";
            bus1.style.backgroundColor = "red";
           
            bus2.style.backgroundColor = "red";
            bay2line31.style.backgroundColor = "red";
            bay2iso1.style.borderColor = "red";
            bay2line32.style.backgroundColor = "red";
            bay2iso2.style.borderColor = "red";
            bay3line1.style.backgroundColor = "red";
            bay3line11.style.backgroundColor = "red";
            bay3line31.style.backgroundColor = "red";
            bay3iso1.style.borderColor = "red";

            bay3line32.style.backgroundColor = "red";
            bay3iso2.style.borderColor = "red";
            bay4line31.style.backgroundColor = "red";
            bay4iso1.style.borderColor = "red";
            
            bay3line2.style.backgroundColor = "red";
            bay3line22.style.backgroundColor = "red";
            bay4line32.style.backgroundColor = "red";
            bay4iso2.style.borderColor = "red";

            if(bay2iso2.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "red"
                bay2line2.style.backgroundColor = "red"
                bay2line22.style.backgroundColor = "red"
                bay2line11.style.backgroundColor = "red"
            }
            else if(bay2iso1.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "red"
                bay2line2.style.backgroundColor = "red"
                bay2line22.style.backgroundColor = "red"
                bay2line11.style.backgroundColor = "red"
            }

        }


             // iso2 is close , CB3 close & bay2iso1 close 

        else if(iso2.style.backgroundColor === "red" && CB3.style.backgroundColor === "green"){
            
            bus1.style.backgroundColor = "red";
           line32.style.backgroundColor = "red";
            bus2.style.backgroundColor = "red";
            bay2line31.style.backgroundColor = "red";
            bay2iso1.style.borderColor = "red";
            bay2line32.style.backgroundColor = "red";
            bay2iso2.style.borderColor = "red";
            bay3line1.style.backgroundColor = "red";
            bay3line11.style.backgroundColor = "red";
            bay3line31.style.backgroundColor = "red";
            bay3iso1.style.borderColor = "red";

            bay3line32.style.backgroundColor = "red";
            bay3iso2.style.borderColor = "red";
            bay4line31.style.backgroundColor = "red";
            bay4iso1.style.borderColor = "red";
            
            bay3line2.style.backgroundColor = "red";
            bay3line22.style.backgroundColor = "red";
            bay4line32.style.backgroundColor = "red";
            bay4iso2.style.borderColor = "red";

            if(bay2iso1.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "red"
                bay2line2.style.backgroundColor = "red"
                bay2line22.style.backgroundColor = "red"
                bay2line11.style.backgroundColor = "red"
            }
            
            else if(bay2iso2.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "red"
                bay2line2.style.backgroundColor = "red"
                bay2line22.style.backgroundColor = "red"
                bay2line11.style.backgroundColor = "red"
            }
        }
        
    }



    // for only discharging the bus1 by CB5 and at the same time bus2 is charge by incomer-1

    else if(CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" && bus1.style.backgroundColor === "red" && bus2.style.backgroundColor === "darkorange"){
        CB1.style.backgroundColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

    
        if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
        }
    }

 // for only discharging the bus2 by CB5 and at the same time bus1 is charge by incomer-1

    else if(CB1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && bus2.style.backgroundColor === "red" && bus1.style.backgroundColor === "darkorange"){
        
        CB1.style.backgroundColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        line32.style.backgroundColor = line31Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
    }
        else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
             bay4line22.style.backgroundColor = bay4line22Color
             bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color

            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
        }
     
    }

    


    //  discharging the both iso1 & iso2 from CB1

    else if(CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" ){
        CB1.style.backgroundColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        line32.style.backgroundColor = line32Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        bay5line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if((bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay4iso2.style.borderColor === "red" || bay4iso1.style.borderColor === "red")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if((bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green") && (bay2iso1.style.borderColor === "red" || bay2iso2.style.borderColor === "red")){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }



    }

    // discharging the CB1 when the iso 1 is close and CB3 is open and the incomer-2 is off

    else if(CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && CB3.style.backgroundColor === CB3BackColor){
        CB1.style.backgroundColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
        }
    }

    // discharging the CB1 when the iso 1 is close and CB3 is close and the incomer-2 is off

    else if(CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && CB3.style.backgroundColor === "green"){
        CB1.style.backgroundColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        line32.style.backgroundColor = line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border



         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if((bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay4iso2.style.borderColor === "red" || bay4iso1.style.borderColor === "red")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if((bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green") && (bay2iso1.style.borderColor === "red" || bay2iso2.style.borderColor === "red")){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }

        // discharging iso2 , BUS-1 when CB3 is open

        else if(CB1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === iso1BackColor && CB3.style.backgroundColor === CB3BackColor){
            CB1.style.backgroundColor = CB1backColor
            line11.style.backgroundColor = line11Color
            line2.style.backgroundColor = line2Color
            line23.style.backgroundColor = line23Color
            line22.style.backgroundColor = line22Color
            line32.style.backgroundColor = line32Color
            iso1.style.borderColor = iso1BorderColor
            iso2.style.borderColor = iso2BorderColor
    
            bay5line32.style.backgroundColor = bay5line32Color
            bus2.style.backgroundColor = bus2Color
            bay3line32.style.backgroundColor = bay3line32Color
            bay3iso2.style.borderColor = bay3iso2BorderColor
            bay3line2.style.backgroundColor = bay3line2Color
            bay3line22.style.backgroundColor = bay3line22Color
            bay2line32.style.backgroundColor = bay2line32Color
            bay2iso2.style.borderColor = bay2iso2Border
            bay4line32.style.backgroundColor = bay4line32Color
            bay4iso2.style.borderColor = bay4iso2Border

            if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
                bay4line21.style.backgroundColor = bay4line21Color
                bay4line22.style.backgroundColor = bay4line22Color
                bay4line2.style.backgroundColor = bay4line2Color
                bay4line11.style.backgroundColor = bay4line11Color
             }
            else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = bay2line21Color
                bay2line22.style.backgroundColor = bay2line22Color
                bay2line2.style.backgroundColor = bay2line2Color
                bay2line11.style.backgroundColor = bay2line11Color
             }
            else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
                bay4line21.style.backgroundColor = bay4line21Color
                 bay4line22.style.backgroundColor = bay4line22Color
                 bay4line2.style.backgroundColor = bay4line2Color
                bay4line11.style.backgroundColor = bay4line11Color
    
                bay2line21.style.backgroundColor = bay2line21Color
                bay2line22.style.backgroundColor = bay2line22Color
                bay2line2.style.backgroundColor = bay2line2Color
                bay2line11.style.backgroundColor = bay2line11Color
            }
        }
    
    // discharging iso2 , BUS-1 ,BUS-2 when CB3 is close

    else if(CB1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === "green"){
        CB1.style.backgroundColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border


        if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if((bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay4iso2.style.borderColor === "red" || bay4iso1.style.borderColor === "red")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if((bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green") && (bay2iso1.style.borderColor === "red" || bay2iso2.style.borderColor === "red")){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }





    else{
        CB1.style.backgroundColor = CB1backColor;
        line11.style.backgroundColor = line11Color;
        line2.style.backgroundColor = line2Color;
        line22.style.backgroundColor = line22Color;
         line23.style.backgroundColor = line23Color;
         iso1.style.borderColor = iso1BorderColor;
         iso2.style.borderColor = iso2BorderColor;
        
    }
})

const supply1 = document.querySelector(".supply-1")
const termination1 = document.querySelector(".termination-1");

btn.addEventListener("click", ()=> {

    
    if((line1.style.backgroundColor === line1Color) && (CB1.style.borderColor === CB1borderColor) && (CB1.style.backgroundColor === CB1backColor)){
        
        
        line1.style.backgroundColor = "red";
        CB1.style.borderColor = "red"
        btn.style.backgroundColor = "red"
        supply1.classList.add("active")
        termination1.classList.add("active3")

        if(CB1.style.backgroundColor === "red"){
            line11.style.backgroundColor = "red"
            line2.style.backgroundColor = "red"
            line23.style.backgroundColor ="red"
            line22.style.backgroundColor = "red"
            iso1.style.borderColor = "red"
            iso2.style.borderColor ="red"
        }
        // else{
        //     line1.styl.backgroundColor = line1Color
        //     line11.style.backgroundColor = line11Color
        //     line2.style.backgroundColor = line2Color
        //     line23.style.backgroundColor = line23Color
        //     line22.style.backgroundColor = line22Color
        //     iso1.style.borderColor = iso1BorderColor
        //     iso2.style.borderColor = iso2BorderColor
        // }
    }

    else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === "darkorange" && CB3.style.backgroundColor === "green" && CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red"){
        alert(`The the bay5iso2 is already charge the BUS-1 & BUS-2 by CB-3`)
    }


    else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === "darkorange" && CB3.style.backgroundColor === "green" && CB1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red"){
        alert(`The the bay5iso1 is already charge the BUS-1 & BUS-2 by CB-3`)
    }


    else if(bay5iso1.style.backgroundColor === "darkorange" &&  bay5iso1.style.borderColor === "darkorange" && iso1.style.backgroundColor === "red" && iso1.style.borderColor === iso1BorderColor && CB1.style.backgroundColor === "red" && CB1.style.borderColor === CB1borderColor){
        alert(`Error`);
    }

    else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === "darkorange" && iso2.style.backgroundColor === "red"  && iso2.style.borderColor === iso1BorderColor && CB1.style.backgroundColor === "red" && CB1.style.borderColor=== CB1borderColor){
        alert(`Error`)
    }



    else if((line1.style.backgroundColor === line1Color) && (CB1.style.borderColor === CB1borderColor) && (CB1.style.backgroundColor === "red") && (iso1.style.backgroundColor === iso1BackColor) && (iso2.style.backgroundColor === iso2BackColor)){
             supply1.classList.add("active")
             termination1.classList.add("active3")

             btn.style.backgroundColor = "red"
            line1.style.backgroundColor ="red"
            line11.style.backgroundColor = "red"
            line2.style.backgroundColor = "red";
            line23.style.backgroundColor = "red"
            line22.style.backgroundColor = "red"
            CB1.style.borderColor = "red"
            iso1.style.borderColor = "red";
            iso2.style.borderColor = "red";
    }


    // iso1 charging BUS-1
    else if(CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" &&  CB1.style.borderColor === CB1borderColor && iso1.style.borderColor === iso1BorderColor && iso2.style.backgroundColor === iso2BorderColor && CB3.style.backgroundColor === CB3BackColor && bay3iso1.style.backgroundColor === bay3iso1BackColor){
        supply1.classList.add("active")
        termination1.classList.add("active3")

        btn.style.backgroundColor = "red"
        line1.style.backgroundColor = "red"
        line11.style.backgroundColor = "red" 
        line2.style.backgroundColor = "red"
        line23.style.backgroundColor ="red"
        line22.style.backgroundColor = "red"
        line31.style.backgroundColor = "red"
        CB1.style.borderColor ="red"
        iso1.style.borderColor = "red"
        bus1.style.backgroundColor ="red"
        iso2.style.borderColor ="red"
        bay2line31.style.backgroundColor ="red"
        bay2iso1.style.borderColor = "red"
        bay3line1.style.backgroundColor = "red";
        bay3line11.style.backgroundColor = "red";
        bay3line31.style.backgroundColor ="red"
        bay3iso1.style.borderColor = "red"
        bay4line31.style.backgroundColor = "red"
        bay4iso1.style.borderColor = "red"

        if((bay2iso1.style.backgroundColor === "green" ) && (bay4iso1.style.backgroundColor === "green" )){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red"
        }

        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if(bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === bay4iso1Color){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";
        }

        
    }
    
    // iso1 charging and BUC COupler CLOSE

    else if(CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && CB1.style.borderColor === CB1borderColor  && CB3.style.backgroundColor === "green"){
        supply1.classList.add("active")
        termination1.classList.add("active3")

        btn.style.backgroundColor = "red"
        line1.style.backgroundColor = "red"
        line11.style.backgroundColor = "red"
        line2.style.backgroundColor = "red"
        line23.style.backgroundColor ="red"
        line22.style.backgroundColor = "red"
        line31.style.backgroundColor = "red"
        line32.style.backgroundColor = "red"
        CB1.style.borderColor ="red"
        iso1.style.borderColor = "red"
        bus1.style.backgroundColor ="red"
        iso2.style.borderColor ="red"
        bay2line31.style.backgroundColor ="red"
        bay2iso1.style.borderColor = "red"
        bay2line32.style.backgroundColor = "red"
        bay2iso2.style.borderColor  = "red"
        bay3line31.style.backgroundColor ="red"
        bay3iso1.style.borderColor = "red"
        bay3line1.style.backgroundColor = "red"
        bay3line11.style.backgroundColor = "red"
      
        bay3line2.style.backgroundColor = "red"
        bay3line22.style.backgroundColor = "red"
        bay3iso2.style.borderColor = "red";
        bay3line32.style.backgroundColor = "red";
        bus2.style.backgroundColor = "red";
        // CB3.style.borderColor = "red"
        bay4line31.style.backgroundColor = "red"
        bay4iso1.style.borderColor = "red"
        bay4line32.style.backgroundColor = "red"
        bay4iso2.style.borderColor  = "red"


        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

        }

      

    }

    // iso2 charging bus 2

    else if(CB1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === iso1BackColor && CB3.style.backgroundColor === CB3BackColor)
    {
        supply1.classList.add("active")
        termination1.classList.add("active3")

        btn.style.backgroundColor = "red"
        line1.style.backgroundColor = "red"
        line11.style.backgroundColor = "red"
        CB1.style.borderColor = "red"
        line2.style.backgroundColor = "red"
        line23.style.backgroundColor ="red"
        line22.style.backgroundColor = "red"
        iso1.style.borderColor = "red"
        iso2.style.borderColor ="red"
        line32.style.backgroundColor = "red"
        bus2.style.backgroundColor = "red"
        bay2line32.style.backgroundColor = "red"
        bay2iso2.style.borderColor = "red"
        bay3line32.style.backgroundColor = "red"
        bay3iso2.style.borderColor = "red"
        bay3line22.style.backgroundColor = "red"
        bay3line2.style.backgroundColor = "red"
        bay3iso2.style.borderColor = "red"
        bay2iso2.style.borderColor = "red"
        bay4line32.style.backgroundColor = "red"
        bay4iso2.style.borderColor = "red"

        // if(CB3.style.backgroundColor === "green"){

        //     bay2iso1.style.borderColor = "red";
        //     bay2line31.style.backgroundColor = "red";
        //     bay3line11.style.backgroundColor = "red";
        //     bay3line1.style.backgroundColor = "red";
        //     bay3iso1.style.borderColor = "red";
        //     bay3line31.style.backgroundColor = "red";
        //     bus1.style.backgroundColor = "red";
        //     bay4line31.style.backgroundColor = "red";
        //     bay4iso1.style.borderColor = "red";
        
        // }

        if((bay2iso2.style.backgroundColor === "green" ) && (bay4iso2.style.backgroundColor === "green" )){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red"
        }

        else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";
        }
        
        
    }

    // for discharging the iso 2 through INCOMER -1 

    else if(CB1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && CB1.style.borderColor === CB1borderColor && iso2.style.borderColor === iso2BorderColor && iso1.style.backgroundColor === iso1BackColor &&  CB3.style.backgroundColor === CB3BackColor)
    {
        supply1.classList.add("active")
        termination1.classList.add("active3")

        btn.style.backgroundColor = "red"
        line1.style.backgroundColor = "red"
        line11.style.backgroundColor = "red"
        CB1.style.borderColor = "red"
        line2.style.backgroundColor = "red"
        line23.style.backgroundColor ="red"
        line22.style.backgroundColor = "red"
        iso1.style.borderColor = "red"
        iso2.style.borderColor ="red"
        line32.style.backgroundColor = "red"
        bus2.style.backgroundColor = "red"
        bay2line32.style.backgroundColor = "red"
        bay2iso2.style.borderColor = "red"
        bay3line32.style.backgroundColor = "red"
        bay3iso2.style.borderColor = "red"
        bay3line22.style.backgroundColor = "red"
        bay3line2.style.backgroundColor = "red"
        bay3iso2.style.borderColor = "red"
        bay2iso2.style.borderColor = "red"
        bay4line32.style.backgroundColor = "red"
        bay4iso2.style.borderColor = "red"

        
        // bus1.style.backgroundColor = "red"
        // bay3line31.style.backgroundColor ="red"
        // bay3iso1.style.borderColor = "red"
        // bay3line1.style.backgroundColor = "red"
        // bay3line11.style.backgroundColor = "red"
        // bay2line31.style.backgroundColor ="red"
        // bay2iso1.style.borderColor = "red"
        // bay4line31.style.backgroundColor = "red"
        // bay4iso1.style.borderColor = "red"

        // if(CB3.style.backgroundColor === "green"){

        //     bay2iso1.style.borderColor = "red";
        //     bay2line31.style.backgroundColor = "red";
        //     bay3line11.style.backgroundColor = "red";
        //     bay3line1.style.backgroundColor = "red";
        //     bay3iso1.style.borderColor = "red";
        //     bay3line31.style.backgroundColor = "red";
        //     bus1.style.backgroundColor = "red";
        //     bay4line31.style.backgroundColor = "red";
        //     bay4iso1.style.borderColor = "red";
        
        // }

        if((bay2iso2.style.backgroundColor === "green" ) && (bay4iso2.style.backgroundColor === "green" )){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red"
        }

        else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";
        }
        
        
    }

    // iso2 charging the bus2 and CB3 is close

    else if( CB1.style.backgroundColor === "red" && CB1.style.borderColor === CB1borderColor && iso2.style.backgroundColor === "red" && iso2.style.borderColor === iso2BorderColor && CB3.style.backgroundColor === "green"){
        supply1.classList.add("active")
        termination1.classList.add("active3")

        btn.style.backgroundColor = "red"
        line1.style.backgroundColor = "red"
        line11.style.backgroundColor = "red"
        CB1.style.borderColor = "red"
        line2.style.backgroundColor = "red"
        line23.style.backgroundColor ="red"
        line22.style.backgroundColor = "red"
        iso1.style.borderColor = "red"
        iso2.style.borderColor = "red"
        line32.style.backgroundColor = "red"
        bus2.style.backgroundColor = "red"
        bay3line32.style.backgroundColor ="red"
        bay3iso2.style.borderColor = "red"
        bay3line2.style.backgroundColor = "red"
        bay3line22.style.backgroundColor = "red"
        bay2line32.style.backgroundColor ="red"
        bay2iso2.style.borderColor = "red"
        bay4line32.style.backgroundColor = "red"
        bay4iso2.style.borderColor = "red"
    
        bus1.style.backgroundColor = "red"
        bay3line31.style.backgroundColor ="red"
        bay3iso1.style.borderColor = "red"
        bay3line1.style.backgroundColor = "red"
        bay3line11.style.backgroundColor = "red"
        bay2line31.style.backgroundColor ="red"
        bay2iso1.style.borderColor = "red"
        bay4line31.style.backgroundColor = "red"
        bay4iso1.style.borderColor = "red"

        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

        }

    }

    // both iso1 & iso2 close

    else if(CB1.style.backgroundColor === "red" && CB1.style.borderColor === CB1borderColor && iso1.style.backgroundColor === "red" && iso1.style.borderColor === iso1BorderColor && iso2.style.backgroundColor === "red" && iso2.style.borderColor === iso2BorderColor && CB3.style.backgroundColor === CB3BackColor){
        supply1.classList.add("active")
        termination1.classList.add("active3")

        btn.style.backgroundColor = "red"
        line1.style.backgroundColor = "red"
        line11.style.backgroundColor = "red"
        CB1.style.borderColor = "red"
        line2.style.backgroundColor = "red"
        line23.style.backgroundColor ="red"
        line22.style.backgroundColor = "red"
        iso1.style.borderColor = "red"
        iso2.style.borderColor ="red"
        line31.style.backgroundColor = "red"
        line32.style.backgroundColor = "red"
        bus1.style.backgroundColor = "red"
        bus2.style.backgroundColor = "red"
        bay3line31.style.backgroundColor = "red"
        bay3line32.style.backgroundColor = "red"
        bay3iso1.style.borderColor = "red"
        bay3iso2.style.borderColor = "red"
        bay3line1.style.backgroundColor = "red"
        bay3line11.style.backgroundColor = "red"
        bay3line22.style.backgroundColor = "red"
        bay3line2.style.backgroundColor = "red"

        bay4line31.style.backgroundColor = "red"
        bay4line32.style.backgroundColor = "red"
        bay4iso1.style.borderColor = "red"
        bay4iso2.style.borderColor = "red"

        bay2iso1.style.borderColor = "red"
        bay2iso2.style.borderColor = "red"
        bay2line32.style.backgroundColor = "red"
        bay2line31.style.backgroundColor = "red"

        
        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

        }

    
      
    }


    // for only discharging the bus1 by CB5 and at the same time bus2 is charge by incomer-1

    else if(CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" && bus1.style.backgroundColor === "red" && bus2.style.backgroundColor === "darkorange"){
        supply1.classList.remove("active")
        termination1.classList.remove("active3")

        btn.style.backgroundColor = btnColor
        line1.style.backgroundColor = line1Color
        CB1.style.borderColor = CB1borderColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border


        if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
        }
    }

    
 // for only discharging the bus2 by CB1 and at the same time bus1 is charge by incomer-1

 else if(CB1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && bus1.style.backgroundColor === "darkorange" && bus2.style.backgroundColor === "red" ){
    supply1.classList.remove("active")
    termination1.classList.remove("active3")

    btn.style.backgroundColor = btnColor
    line1.style.backgroundColor = line1Color
    CB1.style.borderColor = CB5BackColor
    line11.style.backgroundColor = line11Color
    line2.style.backgroundColor = line2Color
    line23.style.backgroundColor = line23Color
    line22.style.backgroundColor = line22Color
    iso1.style.borderColor = iso1BorderColor
    iso2.style.borderColor = iso2BorderColor
    line31.style.backgroundColor = line31Color
    line32.style.backgroundColor = line31Color
    bus2.style.backgroundColor = bus2Color
    bay3line32.style.backgroundColor = bay3line32Color
    bay3iso2.style.borderColor = bay3iso2BorderColor
    bay3line2.style.backgroundColor = bay3line2Color
    bay3line22.style.backgroundColor = bay3line22Color
    bay2line32.style.backgroundColor = bay2line32Color
    bay2iso2.style.borderColor = bay2iso2Border
    bay4line32.style.backgroundColor = bay4line32Color
    bay4iso2.style.borderColor = bay4iso2Border

    if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
    }
    else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
    }

}   


    
    // discharging iso1 when the CB3 is open 

    else if(CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && CB3.style.backgroundColor === CB3BackColor ){
        supply1.classList.remove("active")
        termination1.classList.remove("active3")

        btn.style.backgroundColor = btnColor
        line1.style.backgroundColor = line1Color
        CB1.style.borderColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        line32.style.backgroundColor = line32Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border
       

         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }

        // discharging iso1 when the CB3 is close


    else if(CB1.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && CB3.style.backgroundColor === "green" ){
        supply1.classList.remove("active")
        termination1.classList.remove("active3")

        btn.style.backgroundColor = btnColor
        line1.style.backgroundColor = line1Color
        CB1.style.borderColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        line32.style.backgroundColor = line32Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border
       

         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }



     // discharging iso2 , Cb3 is open


     else if(CB1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === iso1BackColor && CB3.style.backgroundColor === CB3BackColor ){
        supply1.classList.remove("active")
        termination1.classList.remove("active3")

        btn.style.backgroundColor = btnColor
        line1.style.backgroundColor = line1Color
        CB1.style.borderColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        line32.style.backgroundColor = line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border
      
       

         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }


    
     // discharging iso2 , Cb3 is close


     else if(CB1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === iso1BackColor && CB3.style.backgroundColor === "green" ){
        supply1.classList.remove("active")
        termination1.classList.remove("active3")
        btn.style.backgroundColor = btnColor
        line1.style.backgroundColor = line1Color
        CB1.style.borderColor = CB1backColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        line31.style.backgroundColor = line31Color
        line32.style.backgroundColor = line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border


        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border
      
       

         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }

        // discharging both iso1 & iso2


        else if(CB1.style.backgroundColor === "red" &&  iso1.style.backgroundColor === "red" &&  iso2.style.backgroundColor === "red" ){
            supply1.classList.remove("active")
            termination1.classList.remove("active3")
            btn.style.backgroundColor = btnColor
            line1.style.backgroundColor = line1Color
            CB1.style.borderColor = CB1backColor
            line11.style.backgroundColor = line11Color
            line2.style.backgroundColor = line2Color
            line23.style.backgroundColor = line23Color
            line22.style.backgroundColor = line22Color
            iso1.style.borderColor = iso1BorderColor
            iso2.style.borderColor = iso2BorderColor
            line31.style.backgroundColor = line31Color
            line32.style.backgroundColor = line32Color
            bus2.style.backgroundColor = bus2Color
            bay3line32.style.backgroundColor = bay3line32Color
            bay3iso2.style.borderColor = bay3iso2BorderColor
            bay3line2.style.backgroundColor = bay3line2Color
            bay3line22.style.backgroundColor = bay3line22Color
            bay2line32.style.backgroundColor = bay2line32Color
            bay2iso2.style.borderColor = bay2iso2Border
            bay4line32.style.backgroundColor = bay4line32Color
            bay4iso2.style.borderColor = bay4iso2Border
    
    
            bus1.style.backgroundColor = bus1Color
            bay3line31.style.backgroundColor = bay3line31Color
            bay3iso1.style.borderColor = bay3iso1BorderColor
            bay3line1.style.backgroundColor = bay3line1Color
            bay3line11.style.backgroundColor = bay3line11Color
            bay2line31.style.backgroundColor = bay2line31Color
            bay2iso1.style.borderColor = bay2iso1Border
            bay4line31.style.backgroundColor = bay4line31Color
            bay4iso1.style.borderColor = bay4iso1Border
    
    
             if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
                bay4line21.style.backgroundColor = bay4line21Color
                bay4line22.style.backgroundColor = bay4line22Color
                bay4line2.style.backgroundColor = bay4line2Color
                bay4line11.style.backgroundColor = bay4line11Color
        
                bay2line21.style.backgroundColor = bay2line21Color
                bay2line22.style.backgroundColor = bay2line22Color
                bay2line2.style.backgroundColor = bay2line2Color
                bay2line11.style.backgroundColor = bay2line11Color
                }
            
            else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
                bay4line21.style.backgroundColor = bay4line21Color
                bay4line22.style.backgroundColor = bay4line22Color
                bay4line2.style.backgroundColor = bay4line2Color
                bay4line11.style.backgroundColor = bay4line11Color
            }
            else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = bay2line21Color
                bay2line22.style.backgroundColor = bay2line22Color
                bay2line2.style.backgroundColor = bay2line2Color
                bay2line11.style.backgroundColor = bay2line11Color
             }
         
        }

    

    else {
        line1.style.backgroundColor = line1Color
        CB1.style.borderColor = CB1borderColor
        line11.style.backgroundColor = line11Color
        line2.style.backgroundColor = line2Color
        line23.style.backgroundColor = line23Color
        line22.style.backgroundColor = line22Color
        iso1.style.borderColor = iso1BorderColor
        iso2.style.borderColor = iso2BorderColor
        btn.style.backgroundColor = btnColor
        supply1.classList.remove("active")
        btn.style.backgroundColor = btnColor
        termination1.classList.remove("active3")
    }


})


const iso1BackColor = iso1.style.backgroundColor;
const iso1BorderColor = iso1.style.borderColor;



iso1.addEventListener("click", ()=> {
  
    if(iso1.style.backgroundColor === iso1BackColor && iso1.style.borderColor === iso1BorderColor && bay5iso1.style.backgroundColor === bay5iso1Color && bus1.style.backgroundColor === bus1Color){
        iso1.style.backgroundColor = "red";

        if(CB3.style.backgroundColor === "green" && iso2.style.backgroundColor === "red"){
            alert(`Open the CB-3 to close the Bay1iso1`)
            iso1.style.backgroundColor = iso1BackColor
        }
    
    }

    else if(iso1.style.backgroundColor === iso1BackColor && bus1.style.backgroundColor === "darkorange" && bus2.style.backgroundColor === "darkorange"){
        alert(`To close the Bay1iso1 open the Bay5iso1`);
        iso1.style.backgroundColor = iso1BackColor
    }

    else if(bay5iso1.style.backgroundColor === "darkorange" && iso1.style.backgroundColor === iso1BackColor){
        alert(`Bay5iso2 is also closed for charging BUS-1`)
    }
   
    // else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === bay5iso1Border){
    //     alert(`BUS-1 is already charged by Bay5iso1`)
    // }

    else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === "darkorange"){
        alert(`Both Bay5iso1 & Bay5iso2 is closed `)
    }

    else if(iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red" && CB3.style.backgroundColor === "green"){
        alert(`Botth BUS-1 & BUS-2 is charged by Bay1iso2`)
    }

    // iso1 charging bus - 1 and if bay2iso1 close  CB3 is open 

    else if(iso1.style.borderColor === "red"  && iso1.style.backgroundColor === iso1BorderColor && CB3.style.backgroundColor === CB3BackColor){
        iso1.style.backgroundColor ="red"
        line31.style.backgroundColor = "red"
        bus1.style.backgroundColor = "red"
        bay3line31.style.backgroundColor ="red"
        bay3iso1.style.borderColor = "red"
        bay3line1.style.backgroundColor = "red"
        bay3line11.style.backgroundColor = "red"
        bay2line31.style.backgroundColor ="red"
        bay2iso1.style.borderColor = "red"
        bay4line31.style.backgroundColor = "red"
        bay4iso1.style.borderColor = "red"

            if((bay2iso1.style.backgroundColor === "green" ) && (bay4iso1.style.backgroundColor === "green" )){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red"
            }

            else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red";
            }

            else if(bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === bay4iso1Color){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
            }

    }


    // iso1 charging bus - 1 and if bay2iso1 close  CB3 is close 

    else if( iso1.style.borderColor === "red" && iso1.style.backgroundColor === iso1BackColor  && CB3.style.backgroundColor === "green" ){
        iso1.style.backgroundColor = "red"
        line31.style.backgroundColor = "red"
        bus1.style.backgroundColor = "red"
        bay3line31.style.backgroundColor ="red"
        bay3iso1.style.borderColor = "red"
        bay3line1.style.backgroundColor = "red"
        bay3line11.style.backgroundColor = "red"
        bay2line31.style.backgroundColor ="red"
        bay2iso1.style.borderColor = "red"
        bay2line32.style.backgroundColor ="red"
        bay2iso2.style.borderColor = "red"
        bay4line31.style.backgroundColor = "red"
        bay4iso1.style.borderColor = "red"
        
        bay3line22.style.backgroundColor = "red"
        bus2.style.backgroundColor = "red"
        bay3line32.style.backgroundColor ="red"
        bay3iso2.style.borderColor = "red"
        bay3line2.style.backgroundColor = "red"
        bay3line32.style.backgroundColor ="red"
        bay3iso2.style.borderColor = "red"
        bay4line32.style.backgroundColor = "red"
        bay4iso2.style.borderColor = "red"

        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "red";
            bay4line22.style.backgroundColor =  "red";
            bay4line2.style.backgroundColor =  "red";
            bay4line11.style.backgroundColor =  "red";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "red";
            bay2line22.style.backgroundColor =  "red";
            bay2line2.style.backgroundColor =  "red";
            bay2line11.style.backgroundColor =  "red";

        }
        

    }

    // else if(iso1.style.borderColor === "red" && iso1.style.backgroundColor === iso1BorderColor && CB3.style.backgroundColor === "green" && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
    //     iso1.style.backgroundColor ="red"
    //     line31.style.backgroundColor = "red"
    //     bus1.style.backgroundColor = "red"
    //     bay3line31.style.backgroundColor ="red"
    //     bay3iso1.style.borderColor = "red"
    //     bay3line1.style.backgroundColor = "red"
    //     bay3line11.style.backgroundColor = "red"
    //     bay2line31.style.backgroundColor ="red"
    //     bay2iso1.style.borderColor = "red"
    //     bay4line31.style.backgroundColor = "red"
    //     bay4iso1.style.borderColor = "red"
    //     bay3line22.style.backgroundColor = "red"
    //     bus2.style.backgroundColor = "red"
    //     bay3line32.style.backgroundColor ="red"
    //     bay3iso2.style.borderColor = "red"
    //     bay3line2.style.backgroundColor = "red"
    //     bay3line32.style.backgroundColor ="red"
    //     bay3iso2.style.borderColor = "red"
    //     bay4line32.style.backgroundColor = "red"
    //     bay4iso2.style.borderColor = "red"


    //     if(bay4iso1.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
    //         bay4line21.style.backgroundColor = "red"
    //         bay4line22.style.backgroundColor = "red"
    //         bay4line2.style.backgroundColor = "red"
    //         bay4line11.style.backgroundColor = "red"
    //     }
    // }

    // dischargin the iso1, bus1 when CB3 is open

    else if(iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === CB3BackColor ){
        
    
        iso1.style.backgroundColor = iso1BackColor
        line31.style.backgroundColor = line31Color
    bus1.style.backgroundColor = bus1Color
    bay3line31.style.backgroundColor = bay3line31Color
    bay3iso1.style.borderColor = bay3iso1BorderColor
    bay3line1.style.backgroundColor = bay3line1Color
    bay3line11.style.backgroundColor = bay3line11Color
    bay2line31.style.backgroundColor = bay2line31Color
    bay2iso1.style.borderColor = bay2iso1Border
    bay4line31.style.backgroundColor = bay4line31Color
    bay4iso1.style.borderColor = bay4iso1Border


    if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
     }
    else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color
    }


    }


    // iso1 discharging when the bay5iso2 is also charge  (bus-1 red & bus-2 is orange )

    
    else if(iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && bay5iso2.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === CB3BackColor ){
        
    
        iso1.style.backgroundColor = iso1BackColor
        line31.style.backgroundColor = line31Color
    bus1.style.backgroundColor = bus1Color
    bay3line31.style.backgroundColor = bay3line31Color
    bay3iso1.style.borderColor = bay3iso1BorderColor
    bay3line1.style.backgroundColor = bay3line1Color
    bay3line11.style.backgroundColor = bay3line11Color
    bay2line31.style.backgroundColor = bay2line31Color
    bay2iso1.style.borderColor = bay2iso1Border
    bay4line31.style.backgroundColor = bay4line31Color
    bay4iso1.style.borderColor = bay4iso1Border


    if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
     }
    else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color
    }


    }

     // discharging the iso1, bus1, bus2 when CB3 is closr

     else if(iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor && bay5iso1.style.backgroundColor === bay5iso1Color && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === "green"){
        
    
        iso1.style.backgroundColor = iso1BackColor
        line31.style.backgroundColor = line31Color
    bus1.style.backgroundColor = bus1Color
    bay3line31.style.backgroundColor = bay3line31Color
    bay3iso1.style.borderColor = bay3iso1BorderColor
    bay3line1.style.backgroundColor = bay3line1Color
    bay3line11.style.backgroundColor = bay3line11Color
    bay2line31.style.backgroundColor = bay2line31Color
    bay2iso1.style.borderColor = bay2iso1Border
    bay4line31.style.backgroundColor = bay4line31Color
    bay4iso1.style.borderColor = bay4iso1Border



    bus2.style.backgroundColor = bus2Color
    bay3line32.style.backgroundColor = bay3line32Color
    bay3iso2.style.borderColor = bay3iso2BorderColor
    bay3line2.style.backgroundColor = bay3line2Color
    bay3line22.style.backgroundColor = bay3line22Color
    bay2line32.style.backgroundColor = bay2line32Color
    bay2iso2.style.borderColor = bay2iso2Border
    bay4line32.style.backgroundColor = bay4line32Color
    bay4iso2.style.borderColor = bay4iso2Border

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color

    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    
         if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
             bay4line21.style.backgroundColor = bay4line21Color
             bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
        }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
             bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color

            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
        }     


    }


    else if(iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && CB3.style.backgroundColor === CB3BackColor){
        iso1.style.backgroundColor = bay5iso1Color
        line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border
        

        if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
       bay4line2.style.backgroundColor = bay4line2Color
       bay4line11.style.backgroundColor = bay4line11Color
     }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
       bay2line21.style.backgroundColor = bay2line21Color
       bay2line22.style.backgroundColor = bay2line22Color
       bay2line2.style.backgroundColor = bay2line2Color
       bay2line11.style.backgroundColor = bay2line11Color
     }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
       bay4line21.style.backgroundColor = bay4line21Color
       bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
       bay4line11.style.backgroundColor = bay4line11Color

       bay2line21.style.backgroundColor = bay2line21Color
       bay2line22.style.backgroundColor = bay2line22Color
       bay2line2.style.backgroundColor = bay2line2Color
       bay2line11.style.backgroundColor = bay2line11Color
     }    
    }

    

     else  {
        iso1.style.backgroundColor = iso1BackColor;
    }

   


})

const iso2BackColor = iso2.style.backgroundColor;
const iso2BorderColor = iso2.style.borderColor;

const bus2 = document.querySelector("#bus2");

const bus2Color = bus2.style.backgroundColor;

const bus1 = document.querySelector("#bus1");

const bus1Color = bus1.style.backgroundColor;


iso2.addEventListener("click" , ()=>{
    
    if(iso2.style.backgroundColor === iso2BackColor && iso2.style.borderColor === iso2BorderColor && bay5iso2.style.backgroundColor === bay5iso2Color && bus2.style.backgroundColor === bus2Color){
        iso2.style.backgroundColor = "red";

        if(CB3.style.backgroundColor === "green" && iso1.style.backgroundColor === "red"){
            alert(`To close the Bay1iso2 open the CB-3`)
            iso2.style.backgroundColor = iso1BackColor
        }
    }

    else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === "darkorange" && CB3.style.backgroundColor === "green" && bus2.style.backgroundColor === "darkorange"){
        alert(`To close the Bay1iso2 open the CB-3`);
        // iso2.style.backgroundColor = iso2BackColor
    }

    else if(iso2.style.backgroundColor === iso2BackColor && bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === "darkorange"){
        alert(`BUS-2 is already charged by the Bay5iso2`)
    }

    else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === bay5iso2Border){
        alert(`To charge the BUS-2 by Bay1iso2 open the Bay5iso2`)
    }

    else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === "darkorange"){
        alert(`Both BUS-1 & BUS-2 is charged already`)
    }
    
    else if(iso1.style.backgroundColor === "red" && iso2.style.borderColor === "red" && CB3.style.backgroundColor === "green" ){
        alert(`To close the Bay1iso2 open the CB-3`)
    }

    else if(iso2.style.backgroundColor === iso2BackColor && iso2.style.borderColor === "red" && CB3.style.backgroundColor === CB3BackColor){
            iso2.style.backgroundColor = "red"
            line32.style.backgroundColor = "red"
            bus2.style.backgroundColor = "red"
            bay3line32.style.backgroundColor ="red"
            bay3iso2.style.borderColor = "red"
            bay3line2.style.backgroundColor = "red"
            bay3line22.style.backgroundColor = "red"
            bay2line32.style.backgroundColor ="red"
            bay2iso2.style.borderColor = "red"
            bay4line32.style.backgroundColor = "red"
            bay4iso2.style.borderColor = "red"


            if((bay2iso2.style.backgroundColor === "green" ) && (bay4iso2.style.backgroundColor === "green" )){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red"
            }

            else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red";
            }

            else if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
            }
    }

    else if(iso2.style.backgroundColor === iso2BackColor && iso2.style.borderColor === "red" && CB3.style.backgroundColor === "green"){
            iso2.style.backgroundColor = "red"
            line32.style.backgroundColor = "red"
            bus2.style.backgroundColor = "red"
            bay3line32.style.backgroundColor ="red"
            bay3iso2.style.borderColor = "red"
            bay3line2.style.backgroundColor = "red"
            bay3line22.style.backgroundColor = "red"
            bay2line32.style.backgroundColor ="red"
            bay2iso2.style.borderColor = "red"
            bay4line32.style.backgroundColor = "red"
            bay4iso2.style.borderColor = "red"
        
            bus1.style.backgroundColor = "red"
            bay3line31.style.backgroundColor ="red"
            bay3iso1.style.borderColor = "red"
            bay3line1.style.backgroundColor = "red"
            bay3line11.style.backgroundColor = "red"
            bay2line31.style.backgroundColor ="red"
            bay2iso1.style.borderColor = "red"
            bay4line31.style.backgroundColor = "red"
            bay4iso1.style.borderColor = "red"

            // if(bay2iso2.style.backgroundColor === "green" && bay2iso2.style.borderColor === "red"){
            //     bay2line21.style.backgroundColor =  "red";
            //     bay2line22.style.backgroundColor =  "red";
            //     bay2line2.style.backgroundColor =  "red";
            //     bay2line11.style.backgroundColor =  "red";
            // }
            if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
    
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red";
            }
    
            else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
                bay4line21.style.backgroundColor =  "red";
                bay4line22.style.backgroundColor =  "red";
                bay4line2.style.backgroundColor =  "red";
                bay4line11.style.backgroundColor =  "red";
            }
    
            else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
                bay2line21.style.backgroundColor =  "red";
                bay2line22.style.backgroundColor =  "red";
                bay2line2.style.backgroundColor =  "red";
                bay2line11.style.backgroundColor =  "red";
    
            }


    }


    // iso2 charging the BUS-2 and CB3 is open

    else if(iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === iso1BackColor && CB3.style.backgroundColor === CB3BackColor){
        bus2.style.backgroundColor = bus2Color
        iso2.style.backgroundColor = iso2BackColor
        line32.style.backgroundColor = line32Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
        }

        
    }

    
    // iso2 charging the BUS-2 and CB3 is open and bay5iso1 is charging the BUS-1

    else if(iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === iso1BackColor && bay5iso1.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === CB3BackColor){
        bus2.style.backgroundColor = bus2Color
        iso2.style.backgroundColor = iso2BackColor
        line32.style.backgroundColor = line32Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
        }

    }


         // discharging the iso2, bus2, bus1 when CB3 is closr

         else if(iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === iso1BackColor && bay5iso1.style.backgroundColor === bay5iso1Color && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === "green"){
         
            bus2.style.backgroundColor = bus2Color
            iso2.style.backgroundColor = iso2BackColor
            line32.style.backgroundColor = line32Color
            bay3line32.style.backgroundColor = bay3line32Color
            bay3iso2.style.borderColor = bay3iso2BorderColor
            bay3line2.style.backgroundColor = bay3line2Color
            bay3line22.style.backgroundColor = bay3line22Color
            bay2line32.style.backgroundColor = bay2line32Color
            bay2iso2.style.borderColor = bay2iso2Border
            bay4line32.style.backgroundColor = bay4line32Color
            bay4iso2.style.borderColor = bay4iso2Border
        
            bus1.style.backgroundColor = bus1Color
            bay3line31.style.backgroundColor = bay3line31Color
            bay3iso1.style.borderColor = bay3iso1BorderColor
            bay3line1.style.backgroundColor = bay3line1Color
            bay3line11.style.backgroundColor = bay3line11Color
            bay2line31.style.backgroundColor = bay2line31Color
            bay2iso1.style.borderColor = bay2iso1Border
            bay4line31.style.backgroundColor = bay4line31Color
            bay4iso1.style.borderColor = bay4iso1Border


            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
        
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color

            if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
                bay4line21.style.backgroundColor = bay4line21Color
                bay4line22.style.backgroundColor = bay4line22Color
                bay4line2.style.backgroundColor = bay4line2Color
                bay4line11.style.backgroundColor = bay4line11Color
            }
            else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = bay2line21Color
                bay2line22.style.backgroundColor = bay2line22Color
                bay2line2.style.backgroundColor = bay2line2Color
                bay2line11.style.backgroundColor = bay2line11Color
             }
            else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        }



        else if(iso2.style.backgroundColor === "red" && iso1.style.backgroundColor === "red" && CB3.style.backgroundColor === CB3BackColor){
            bus2.style.backgroundColor = bus2Color
            iso2.style.backgroundColor = bay5iso2Color
            line32.style.backgroundColor = bay5line32Color
            bay3line32.style.backgroundColor = bay3line32Color
            bay3iso2.style.borderColor = bay3iso2BorderColor
            bay3line2.style.backgroundColor = bay3line2Color
            bay3line22.style.backgroundColor = bay3line22Color
            bay2line32.style.backgroundColor = bay2line32Color
            bay2iso2.style.borderColor = bay2iso2Border
            bay4line32.style.backgroundColor = bay4line32Color
            bay4iso2.style.borderColor = bay4iso2Border
        
            if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
                bay4line21.style.backgroundColor = bay4line21Color
                bay4line22.style.backgroundColor = bay4line22Color
                bay4line2.style.backgroundColor = bay4line2Color
                bay4line11.style.backgroundColor = bay4line11Color
            }
            else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = bay2line21Color
                bay2line22.style.backgroundColor = bay2line22Color
                bay2line2.style.backgroundColor = bay2line2Color
                bay2line11.style.backgroundColor = bay2line11Color
             }
                else if( (bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green") ){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        }

    else {
        iso2.style.backgroundColor = iso2BackColor;
        // bay5iso1.style.backgroundColor = bay5iso1Color;
        // bay5line31.style.backgroundColor = bay5line31Color
      

    }


})


// bay2 

const bay2line32 = document.querySelector(".bay2-line32");
const bay2line32Color = bay2line32.style.backgroundColor;
const bay2iso2 = document.querySelector(".bay2-iso2");
const bay2iso2Color = bay2iso2.style.backgroundColor;
const bay2iso2Border = bay2iso2.style.borderColor;

const bay2line31 = document.querySelector(".bay2-line31");
const bay2line31Color = bay2line31.style.backgroundColor;
const bay2iso1 = document.querySelector(".bay2-iso1");
const bay2iso1Color = bay2iso1.style.backgroundColor;
const bay2iso1Border = bay2iso1.style.borderColor;
const bay2line21 = document.querySelector(".bay2-line21");
const bay2line22 = document.querySelector(".bay2-line22");
const bay2line2 = document.querySelector(".bay2-line2");
const bay2line11 = document.querySelector(".bay2-line11");
const bay2line1 = document.querySelector(".bay2-line1");
const CB2 = document.querySelector(".CB-2");

const CB2BackColor = CB2.style.backgroundColor;
const CB2BorderColor = CB2.style.borderColor;

const bay2line21Color = bay2line21.style.backgroundColor;
const bay2line22Color = bay2line22.style.backgroundColor;
const bay2line2Color = bay2line2.style.backgroundColor;
const bay2line1Color = bay2line1.style.backgroundColor;
const bay2line11Color = bay2line11.style.backgroundColor;

bay2iso1.addEventListener("click", () =>{

    
    if(bay2iso1.style.backgroundColor === bay2iso1Color && bay2iso1.style.borderColor === bay2iso1Border && bay2iso2.style.backgroundColor === bay2iso2Color){

        bay2iso1.style.backgroundColor = "green";

    }

    else if(bay2iso2.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
        alert(`To close the Bay2iso1 then open the Bay2iso2`)
    }


    // for Incoming-1 RED

    else if(bay2iso1.style.borderColor === "red" && bay2iso1.style.backgroundColor === bay2iso1Color && bay2iso2.style.backgroundColor === bay2iso2Color){
        bay2iso1.style.backgroundColor = "green"
        bay2line21.style.backgroundColor = "red"
        bay2line2.style.backgroundColor = "red"
        bay2line22.style.backgroundColor = "red"
        bay2line11.style.backgroundColor = "red"

        if(CB2.style.backgroundColor === "green"){
            bay2line1.style.backgroundColor = "red"
        }

    }



    else if(bay2iso1.style.borderColor === "red" && bay2iso1.style.backgroundColor === "green"){
        
        bay2iso1.style.backgroundColor = bay2iso1Color
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line11.style.backgroundColor = bay2line11Color

        if(CB2.style.backgroundColor === "green"){
            bay2line1.style.backgroundColor = bay2line1Color
        }
    }


        // for incoming-2 ORANGE

    else if(bay2iso1.style.borderColor === "darkorange" && bay2iso1.style.backgroundColor === bay2iso1Color && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay2iso1.style.backgroundColor = "green"
            bay2line21.style.backgroundColor = "darkorange"
            bay2line2.style.backgroundColor = "darkorange"
            bay2line22.style.backgroundColor = "darkorange"
            bay2line11.style.backgroundColor = "darkorange"
    
            if(CB2.style.backgroundColor === "green"){
                bay2line1.style.backgroundColor = "darkorange"
            }
    
    }

    else if(bay2iso1.style.borderColor === "darkorange" && bay2iso1.style.backgroundColor === "green"){
        
        bay2iso1.style.backgroundColor = bay2iso1Color
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line11.style.backgroundColor = bay2line11Color

        if(CB2.style.backgroundColor === "green"){
            bay2line1.style.backgroundColor = bay2line1Color
        }
    }

        
    else{

        bay2iso1.style.backgroundColor = bay2iso1Color;
        
        
    }
  


})


bay2iso2.addEventListener("click", ()=>{

     

    if(bay2iso2.style.backgroundColor === bay2iso2Color && bay2iso2.style.borderColor === bay2iso2Border && bay2iso1.style.backgroundColor === bay2iso1Color){

        bay2iso2.style.backgroundColor = "green";
        

    }

    else if(bay2iso1.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
        alert(`To close the Bay2iso2 then open the Bay2iso1`)
    }


    // for incoming - 1 RED

    else if(bay2iso2.style.borderColor === "red" && bay2iso2.style.backgroundColor === bay2iso1Color && bay2iso1.style.backgroundColor === bay2iso1Color){
        bay2iso2.style.backgroundColor = "green"
        bay2line21.style.backgroundColor = "red"
        bay2line2.style.backgroundColor = "red"
        bay2line22.style.backgroundColor = "red"
        bay2line11.style.backgroundColor = "red"

        if(CB2.style.backgroundColor === "green"){
            bay2line1.style.backgroundColor = "red"
        }

    }

    else if(bay2iso2.style.borderColor === "red" && bay2iso2.style.backgroundColor === "green"){
        
        bay2iso2.style.backgroundColor = bay2iso2Color
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line11.style.backgroundColor = bay2line11Color

        if(CB2.style.backgroundColor === "green"){
            bay2line1.style.backgroundColor = bay2line1Color
        }
    }


            // for incoming-2 ORANGE

    
    else if(bay2iso2.style.borderColor === "darkorange" && bay2iso2.style.backgroundColor === bay2iso1Color && bay2iso1.style.backgroundColor === bay2iso1Color){
                bay2iso2.style.backgroundColor = "green"
                bay2line21.style.backgroundColor = "darkorange"
                bay2line2.style.backgroundColor = "darkorange"
                bay2line22.style.backgroundColor = "darkorange"
                bay2line11.style.backgroundColor = "darkorange"
        
                if(CB2.style.backgroundColor === "green"){
                    bay2line1.style.backgroundColor = "darkorange"
                }
        
     }
        
    else if(bay2iso2.style.borderColor === "darkorange" && bay2iso2.style.backgroundColor === "green"){
                
                bay2iso2.style.backgroundColor = bay2iso2Color
                bay2line21.style.backgroundColor = bay2line21Color
                bay2line2.style.backgroundColor = bay2line2Color
                bay2line22.style.backgroundColor = bay2line22Color
                bay2line11.style.backgroundColor = bay2line11Color
        
                if(CB2.style.backgroundColor === "green"){
                    bay2line1.style.backgroundColor = bay2line1Color
                }

     }
        
    

    else{

        bay2iso2.style.backgroundColor = bay2iso2Color;
        
    }    


})


CB2.addEventListener("click", ()=>{


    if(CB2.style.backgroundColor === CB2BackColor && bay2line11.style.backgroundColor === bay2line11Color){
        CB2.style.backgroundColor = "green";
    }

    else if(bay2line11.style.backgroundColor === "red" && CB2.style.backgroundColor === CB2BackColor){
        CB2.style.backgroundColor = "green"
        bay2line1.style.backgroundColor = "red"
    }

    else if(bay2line11.style.backgroundColor === "darkorange" && CB2.style.backgroundColor === CB2BackColor){
        CB2.style.backgroundColor = "green"
        bay2line1.style.backgroundColor = "darkorange"
    }
    

    else{
        CB2.style.backgroundColor = CB2BackColor;
        bay2line1.style.backgroundColor = bay2line1Color
    }

})



// Bay - 3 BUS COUPLER

const bay3line1 = document.querySelector(".bay3-line1");
const bay3line11 = document.querySelector(".bay3-line11");
const CB3 = document.querySelector(".CB-3");
const bay3line22 = document.querySelector(".bay3-line22");
const bay3line2 = document.querySelector(".bay3-line2");

const CB3BackColor = CB3.style.backgroundColor;
const CB3BorderColor = CB3.style.borderColor;

const bay3line1Color = bay3line1.style.backgroundColor;
const bay3line11Color = bay3line11.style.backgroundColor;
const bay3line22Color = bay3line22.style.backgroundColor;
const bay3line2Color = bay3line2.style.backgroundColor;

const bay3line31 = document.querySelector(".bay3-line31");
const bay3line32 = document.querySelector(".bay3-line32");
const bay3iso1 = document.querySelector(".bay3-iso1");
const bay3iso2 = document.querySelector(".bay3-iso2");

const bay3line31Color = bay3line31.style.backgroundColor;
const bay3line32Color = bay3line32.style.backgroundColor;
const bay3iso1BackColor = bay3iso1.style.backgroundColor;
const bay3iso1BorderColor = bay3iso1.style.borderColor;
const bay3iso2BackColor = bay3iso2.style.backgroundColor;
const bay3iso2BorderColor = bay3iso2.style.borderColor;

// && bay3line11.style.backgroundColor === bay3line11Color && bay3line22.style.backgroundColor === bay3line22Color
CB3.addEventListener("click", ()=>{

    if(bay3line11.style.backgroundColor === "red" && bay3line22.style.backgroundColor === "darkorange"){
        alert(`The Bus coupler cannot close because both the bus charge individually`)
        // CB3.style.backgroundColor = CB3BackColor
       
    }

    else if(bay3line11.style.backgroundColor === "darkorange" && bay3line22.style.backgroundColor === "red"){
        alert(`The Bus coupler cannot close because both the bus charge individually`)
       
    }

    else if(iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && CB3.style.backgroundColor === CB3BackColor){
        alert(`Both bay1iso1 & bay1iso2 are closed`)
    }

    else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === CB3BackColor){
        alert(`Both bay5iso1 & bay5iso2 are closed`)
    }



    else if(iso1.style.backgroundColor === "red" && iso2.style.backgroundColor === "red" && iso1.style.borderColor === "red" && iso2.style.borderColor === "red" && bay5iso1.style.backgroundColor === bay5iso1Color && bay5iso2.style.backgroundColor === bay5iso2Color){
        alert(`Error`)
    }

    else if(iso1.style.backgroundColor === iso1BackColor && iso2.style.backgroundColor === iso1BackColor && bay5iso1.style.borderColor === "darkorange" && bay5iso2.style.borderColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange"){
        alert(`Error`)
    }

    else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === bay5iso2Border){
        alert(`To charge BUS-2 close CB-3 the bay5iso2`)
    }

    else if(iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red" && bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === bay5iso1Border){
        alert(`To charge the BUS-1 by CB-3 close the bay5iso1`)
    }

    else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === "darkorange" && iso2.style.backgroundColor === "red" && iso2.style.borderColor === iso2BorderColor){
        alert(`To charge the BUS-2 by CB-3 close the bay1iso2`)
    }

    else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === "darkorange" && iso1.style.backgroundColor === "red" && iso1.style.borderColor === iso1BorderColor){
        alert(`To charge the BUS-1 by CB-3 close the bay1iso1`)

    }
        else if(CB3.style.backgroundColor === CB3BackColor && CB3.style.borderColor === CB3BorderColor ){

        CB3.style.backgroundColor = "green";

        if(bay3line22.style.backgroundColor === "darkorange" && bay3line11.style.backgroundColor === bay3line11Color && bay5iso2.style.backgroundColor === "darkorange"){

            bay3line11.style.backgroundColor = "darkorange";
            bay3line1.style.backgroundColor = "darkorange";
            bay3iso1.style.borderColor = "darkorange";
            bay3line31.style.backgroundColor = "darkorange";
            bus1.style.backgroundColor = "darkorange";
            bay2line31.style.backgroundColor = "darkorange";
            bay2iso1.style.borderColor = "darkorange";
            bay4line31.style.backgroundColor = "darkorange";
            bay4iso1.style.borderColor = "darkorange";


            if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
    
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange";
            }
    
            else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange";
            }
    
            else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
    
            }
        }

        // from bay5iso1 to BUS2 charge 

        else if(bay3line11.style.backgroundColor === "darkorange" && bay3line22.style.backgroundColor === bay3line22Color && bay5iso1.style.backgroundColor === "darkorange"){
            bay3line22.style.backgroundColor = "darkorange"
            bay3line2.style.backgroundColor = "darkorange"
            bay3iso2.style.borderColor = "darkorange"
            bay3line32.style.backgroundColor = "darkorange"
            bus2.style.backgroundColor = "darkorange"
            bay2line32.style.backgroundColor = "darkorange"
            bay2iso2.style.borderColor = "darkorange"
            bay4line32.style.backgroundColor = "darkorange"
            bay4iso2.style.borderColor = "darkorange"

            if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
    
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange";
            }
    
            else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange";
            }
    
            else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
    
            }
        }

        // from bay5iso2 to Bus1
        
        // else if(bay3line22.style.backgroundColor === "darkorange" && bay3line22.style.backgroundColor === bay3line22Color && bay5iso2.style.backgroundColor === "darkorange"){
        //     bay3line11.style.backgroundColor = "darkorange"
        //     bay3line1.style.backgroundColor = "darkorange"
        //     bay3iso1.style.borderColor = "darkorange"
        //     bay3line31.style.backgroundColor = "darkorange"
        //     bus1.style.backgroundColor = "darkorange"
        //     bay2line31.style.backgroundColor = "darkorange"
        //     bay2iso1.style.borderColor = "darkorange"
        //     bay4line31.style.backgroundColor = "darkorange"
        //     bay4iso1.style.borderColor = "darkorange"

        //     if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
        //         bay2line21.style.backgroundColor =  "darkorange";
        //         bay2line22.style.backgroundColor =  "darkorange";
        //         bay2line2.style.backgroundColor =  "darkorange";
        //         bay2line11.style.backgroundColor =  "darkorange";
    
        //         bay4line21.style.backgroundColor =  "darkorange";
        //         bay4line22.style.backgroundColor =  "darkorange";
        //         bay4line2.style.backgroundColor =  "darkorange";
        //         bay4line11.style.backgroundColor =  "darkorange";
        //     }
    
        //     else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
        //         bay4line21.style.backgroundColor =  "darkorange";
        //         bay4line22.style.backgroundColor =  "darkorange";
        //         bay4line2.style.backgroundColor =  "darkorange";
        //         bay4line11.style.backgroundColor =  "darkorange";
        //     }
    
        //     else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
        //         bay2line21.style.backgroundColor =  "darkorange";
        //         bay2line22.style.backgroundColor =  "darkorange";
        //         bay2line2.style.backgroundColor =  "darkorange";
        //         bay2line11.style.backgroundColor =  "darkorange";
    
        //     }
        // }



        // charge iso2,CB3,bay2iso1,bay4iso1
        
        else if(bay3line22.style.backgroundColor === "red" && bay3line11.style.backgroundColor === bay3line11Color){

           
            bay3line11.style.backgroundColor = "red";
            bay3line1.style.backgroundColor = "red";
            bay3iso1.style.borderColor = "red";
            bay3line31.style.backgroundColor = "red";
            bus1.style.backgroundColor = "red";
            bay2line31.style.backgroundColor = "red";
            bay2iso1.style.borderColor = "red";
            bay4line31.style.backgroundColor = "red";
            bay4iso1.style.borderColor = "red";

            if(bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === bay4iso1Color){
                bay2line21.style.backgroundColor = "red"
                bay2line22.style.backgroundColor = "red"
                bay2line2.style.backgroundColor = "red"
                bay2line11.style.backgroundColor = "red"
            }
            else if(bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "red"
                bay2line22.style.backgroundColor = "red"
                bay2line2.style.backgroundColor = "red"
                bay2line11.style.backgroundColor = "red"
                bay4line21.style.backgroundColor = "red"
                bay4line22.style.backgroundColor = "red"
                bay4line2.style.backgroundColor = "red"
                bay4line11.style.backgroundColor = "red"
            }

            else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color) {
                bay4line21.style.backgroundColor = "red"
                bay4line22.style.backgroundColor = "red"
                bay4line2.style.backgroundColor = "red"
                bay4line11.style.backgroundColor = "red"
            }

        }

        else if(bay3line11.style.backgroundColor === "red" && bay3line22.style.backgroundColor === bay3line22Color){
            bay3line22.style.backgroundColor = "red"
            bay3line2.style.backgroundColor = "red"
            bay3iso2.style.borderColor = "red"
            bay3line32.style.backgroundColor = "red"
            bus2.style.backgroundColor = "red"
            bay2line32.style.backgroundColor = "red"
            bay2iso2.style.borderColor = "red"
            bay4line32.style.backgroundColor = "red"
            bay4iso2.style.borderColor = "red"

            if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
                bay2line21.style.backgroundColor = "red"
                bay2line22.style.backgroundColor = "red"
                bay2line2.style.backgroundColor = "red"
                bay2line11.style.backgroundColor = "red"
            }
            else if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "red"
                bay2line22.style.backgroundColor = "red"
                bay2line2.style.backgroundColor = "red"
                bay2line11.style.backgroundColor = "red"
                bay4line21.style.backgroundColor = "red"
                bay4line22.style.backgroundColor = "red"
                bay4line2.style.backgroundColor = "red"
                bay4line11.style.backgroundColor = "red"
            }
            else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
                bay4line21.style.backgroundColor = "red"
                bay4line22.style.backgroundColor = "red"
                bay4line2.style.backgroundColor = "red"
                bay4line11.style.backgroundColor = "red"
            }
        }

        // else{
        //     CB3.style.backgroundColor = CB3BackColor
        // }
       

    }

   

    // else if(bay5iso1.style.backgroundColor === "darkorange" &&  bay3line11.style.backgroundColor === "darkorange" && bay3line22.style.backgroundColor === "darkorange"){
    //     CB3.style.backgroundColor = CB3BackColor;
    //     bay3line22.style.backgroundColor = bay3line22Color;
    //     bay3line2.style.backgroundColor = bay3line2Color;
    //     bay3iso2.style.borderColor = bay3iso2BorderColor;
    //     bay3line32.style.backgroundColor = bay3line32Color;
    //     bus2.style.backgroundColor = bus2Color;
    //     bay2line32.style.backgroundColor = bay2line32Color
    //     bay2iso2.style.borderColor = bay2iso2Border
    //     bay4line32.style.backgroundColor = bay4line32Color
    //     bay4iso2.style.borderColor = bay4iso2Border

        
    // }



    // for discharging the bus2 by BUS COUPLER  

    else if(iso1.style.backgroundColor === "red" &&  bay3line11.style.backgroundColor === "red" && bay3line22.style.backgroundColor === "red" && bay2iso1.style.backgroundColor === bay2iso1Color && bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === bay2iso2Color && bay4iso1.style.bay2line1Color === bay4iso1Color){
        CB3.style.backgroundColor = CB3BackColor;
        bay3line22.style.backgroundColor = bay3line22Color;
        bay3line2.style.backgroundColor = bay3line2Color;
        bay3iso2.style.borderColor = bay3iso2BorderColor;
        bay3line32.style.backgroundColor = bay3line32Color;
        bus2.style.backgroundColor = bus2Color;
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border
    }

    



    // where bay2-iso2 is discharge through CB 

    else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && CB3.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
        CB3.style.backgroundColor = CB3BackColor;
        bay3line22.style.backgroundColor = bay3line22Color;
        bay3line2.style.backgroundColor = bay3line2Color;
        bay3iso2.style.borderColor = bay3iso2BorderColor;
        bay3line32.style.backgroundColor = bay3line32Color;
        bus2.style.backgroundColor = bus2Color;
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
    } 


    else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && CB3.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green" && bay2iso2.style.borderColor === "red" && bay4iso2.style.backgroundColor === "green"){
        CB3.style.backgroundColor = CB3BackColor;
        bay3line22.style.backgroundColor = bay3line22Color;
        bay3line2.style.backgroundColor = bay3line2Color;
        bay3iso2.style.borderColor = bay3iso2BorderColor;
        bay3line32.style.backgroundColor = bay3line32Color;
        bus2.style.backgroundColor = bus2Color;
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color

        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    } 


    else if( iso1.style.backgroundColor === "red" && CB3.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === "green"){
        CB3.style.backgroundColor = CB3BackColor;
        bay3line22.style.backgroundColor = bay3line22Color;
        bay3line2.style.backgroundColor = bay3line2Color;
        bay3iso2.style.borderColor = bay3iso2BorderColor;
        bay3line32.style.backgroundColor = bay3line32Color;
        bus2.style.backgroundColor = bus2Color;
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    }

    else if( iso1.style.backgroundColor === "red" && CB3.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === "green"){
        CB3.style.backgroundColor = CB3BackColor;
        bay3line22.style.backgroundColor = bay3line22Color;
        bay3line2.style.backgroundColor = bay3line2Color;
        bay3iso2.style.borderColor = bay3iso2BorderColor;
        bay3line32.style.backgroundColor = bay3line32Color;
        bus2.style.backgroundColor = bus2Color;
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
    }


    // from iso2 discharging the bus 2 will discharge the bay4 iso1

    else if(iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red" && CB3.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green" && bay2iso2.style.borderColor === "red" && bay4iso1.style.backgroundColor === "green"){
        CB3.style.backgroundColor = CB3BackColor;
        bay3line11.style.backgroundColor = bay3line11Color;
        bay3line1.style.backgroundColor = bay3line1Color;
        bay3iso1.style.borderColor = bay3iso1BorderColor;
        bay3line31.style.backgroundColor = bay3line31Color;
        bus1.style.backgroundColor = bus1Color;
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border
        
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
        
       
    } 



    else if(iso2.style.backgroundColor === "red" && bay3line11.style.backgroundColor === "red" && bay3line22.style.backgroundColor === "red" && bay2iso1.style.backgroundColor === bay2iso1Color){
        
        CB3.style.backgroundColor = CB3BackColor;
        
        bay3line11.style.backgroundColor = bay3line11Color
        bay3line1.style.backgroundColor = bay3line1Color;
        bay3iso1.style.borderColor = bay3iso1BorderColor;
        bay3line31.style.backgroundColor = bay3line31Color;
        bus1.style.backgroundColor = bus1Color;
        bay2line31.style.backgroundColor = bay2line31Color;
        bay2iso1.style.borderColor = bay2iso1Border;
        bay4line31.style.backgroundColor = bay4line31Color;
        bay4iso1.style.borderColor = bay4iso1Border;
    }

    else if(iso1.style.backgroundColor === "red" && bay3line11.style.backgroundColor === "red" && bay3line22.style.backgroundColor === "red" && iso2.style.backgroundColor === iso2BackColor ){
        CB3.style.backgroundColor = CB3BackColor;
        bay3line22.style.backgroundColor = bay3line22Color;
        bay3line2.style.backgroundColor = bay3line2Color;
        bay3iso2.style.borderColor = bay3iso2BorderColor;
        bay3line32.style.backgroundColor = bay3line32Color;
        bus2.style.backgroundColor = bus2Color;
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border
    }

    // discharging CB3,bay2iso1 

    else if(iso2.style.backgroundColor === "red" && bay3line11.style.backgroundColor === "red" && bay3line22.style.backgroundColor === "red" && CB3.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === bay4iso1Color){
        
        CB3.style.backgroundColor = CB3BackColor;
      
        bay3line11.style.backgroundColor = bay3line11Color
        bay3line1.style.backgroundColor = bay3line1Color;
        bay3iso1.style.borderColor = bay3iso1BorderColor;
        bay3line31.style.backgroundColor = bay3line31Color;
        bus1.style.backgroundColor = bus1Color;
        bay2line31.style.backgroundColor = bay2line31Color;
        bay2iso1.style.borderColor = bay2iso1Border;
        bay4line31.style.backgroundColor = bay4line31Color;
        bay4iso1.style.borderColor = bay4iso1Border;
        
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
    }

        // discharging CB3,bay2iso1 , bay4iso1

    else if(iso2.style.backgroundColor === "red" && bay3line11.style.backgroundColor === "red" && bay3line22.style.backgroundColor === "red" && CB3.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === "green"){
        
        CB3.style.backgroundColor = CB3BackColor;
      
        bay3line11.style.backgroundColor = bay3line11Color
        bay3line1.style.backgroundColor = bay3line1Color;
        bay3iso1.style.borderColor = bay3iso1BorderColor;
        bay3line31.style.backgroundColor = bay3line31Color;
        bus1.style.backgroundColor = bus1Color;
        bay2line31.style.backgroundColor = bay2line31Color;
        bay2iso1.style.borderColor = bay2iso1Border;
        bay4line31.style.backgroundColor = bay4line31Color;
        bay4iso1.style.borderColor = bay4iso1Border;
        
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color


        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    }

    else if(iso2.style.backgroundColor === "red" && bay3line22.style.backgroundColor === "red" && bay3line11.style.backgroundColor === "red" && CB3.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === "green"){
        CB3.style.backgroundColor = CB3BackColor;
      
        bay3line11.style.backgroundColor = bay3line11Color
        bay3line1.style.backgroundColor = bay3line1Color;
        bay3iso1.style.borderColor = bay3iso1BorderColor;
        bay3line31.style.backgroundColor = bay3line31Color;
        bus1.style.backgroundColor = bus1Color;
        bay2line31.style.backgroundColor = bay2line31Color;
        bay2iso1.style.borderColor = bay2iso1Border;
        bay4line31.style.backgroundColor = bay4line31Color;
        bay4iso1.style.borderColor = bay4iso1Border;
        
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

    }

            // dicharge by CB3 when the bay5iso1 is close 

    else if( CB3.style.backgroundColor === "green" && bay3line11.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && bay3line22.style.backgroundColor === "darkorange"){

                CB3.style.backgroundColor = CB3BackColor
                bay3line22.style.backgroundColor = bay3line22Color
                bay3line2.style.backgroundColor = bay3line2Color
                bay3iso2.style.borderColor = bay3iso2BorderColor
                bay3line32.style.backgroundColor = bay3line22Color
                bus2.style.backgroundColor = bus2Color
                bay2line32.style.backgroundColor = bay2line32Color
                bay2iso2.style.borderColor = bay2iso2Color
                bay4line32.style.backgroundColor = bay4line32Color
                bay4iso2.style.borderColor = bay4iso2Border
    
                if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === "green"){
                    bay4line21.style.backgroundColor = bay4line21Color
                    bay4line22.style.backgroundColor = bay4line22Color
                    bay4line2.style.backgroundColor = bay4line2Color
                    bay4line11.style.backgroundColor = bay4line11Color
                
                    bay2line21.style.backgroundColor = bay2line21Color
                    bay2line22.style.backgroundColor = bay2line22Color
                    bay2line2.style.backgroundColor = bay2line2Color
                    bay2line11.style.backgroundColor = bay2line11Color
                }
        
                else if(bay4iso2.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === bay2iso2Color){
                    bay4line21.style.backgroundColor = bay4line21Color
                    bay4line22.style.backgroundColor = bay4line22Color
                    bay4line2.style.backgroundColor = bay4line2Color
                    bay4line11.style.backgroundColor = bay4line11Color
                }
        
                else if(bay2iso2.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === bay4iso2Color){
                    bay2line21.style.backgroundColor = bay2line21Color
                    bay2line22.style.backgroundColor = bay2line22Color
                    bay2line2.style.backgroundColor = bay2line2Color
                    bay2line11.style.backgroundColor = bay2line11Color
        
                }
     }


            // dicharge by CB3 when the bay5iso2 is close 


     else if( CB3.style.backgroundColor === "green" && bay3line22.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay3line11.style.backgroundColor === "darkorange"){

        CB3.style.backgroundColor = CB3BackColor;
        bay3line11.style.backgroundColor = bay3line11Color;
        bay3line1.style.backgroundColor = bay3line1Color;
        bay3iso1.style.borderColor = bay3iso1BorderColor;
        bay3line31.style.backgroundColor = bay3line31Color;
        bus1.style.backgroundColor = bus1Color;
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border
        

        if(bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
        }

        else if(bay4iso1.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }

        else if(bay2iso1.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === bay4iso1Color){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color

        }
}

    else {
        CB3.style.backgroundColor = CB3BackColor
    }


      
    

})


// bay3iso1.addEventListener( "click", ()=> {

//     if(bay3iso1.style.backgroundColor === bay3iso1BackColor && bay3iso1.style.borderColor === "darkorange"){
//         bay3iso1.style.backgroundColor = "green";
//         bay3line1.style.backgroundColor = "darkorange";
//         bay3line11.style.backgroundColor = "darkorange";
//         CB3.style.borderColor = "darkorange";
        
//     }

//     else if(bay3iso1.style.backgroundColor === bay3iso1BackColor && bay3iso1.style.borderColor === bay3iso1BorderColor){
//         bay3iso1.style.backgroundColor = "green";
//     }

//     else{
//         bay3iso1.style.backgroundColor = bay3iso1BackColor;
//         bay3iso1.style.backgroundColor = bay3iso1BackColor;
//         bay3line1.style.backgroundColor = bay3line1Color;
//         bay3line11.style.backgroundColor = bay3line11Color;
//         CB3.style.borderColor = CB3BorderColor
//     }


// })

// bay3iso2.addEventListener("click", ()=>{

//     if(bay3iso2.style.borderColor === "darkorange" && bay3iso2.style.backgroundColor === bay3iso2BackColor){
//          bay3iso2.style.backgroundColor = "green";
//          bay3line32.style.backgroundColor = "darkorange";
//          bus2.style.backgroundColor = "darkorange";
//          bay2line32.style.backgroundColor = "darkorange";
//          bay2iso2.style.borderColor = "darkorange";
//          bay4line32.style.backgroundColor = "darkorange";
//          bay4iso2.style.borderColor = "darkorange";


//         //  if(bay2iso2.style.backgroundColor === "green"){
//         //     bay2line32.style.backgroundColor = "orange";
//         //  }
//     }

//     else if(bay3iso2.style.backgroundColor === bay3iso2BackColor && bay3iso2.style.borderColor === bay3iso2BorderColor){
//         bay3iso2.style.backgroundColor = "green";
//     }
    
//     else{
//         bay3iso2.style.backgroundColor = bay3iso2BackColor;
//         bay3line32.style.backgroundColor = bay3line32Color;
//         bus2.style.backgroundColor = bus2Color;
//         bay2line32.style.backgroundColor = bay2line32Color;
//         bay2iso2.style.borderColor = bay2iso2Border;
//         bay4line32.style.backgroundColor = bay4line32Color;
//         bay4iso2.style.borderColor = bay5iso2Border;

//     }

  

// })

// bay-4

const bay4line32 = document.querySelector(".bay4-line32");
const bay4line32Color = bay4line32.style.backgroundColor;
const bay4iso2 = document.querySelector(".bay4-iso2");
const bay4iso2Color = bay4iso2.style.backgroundColor;
const bay4iso2Border = bay4iso2.style.borderColor;

const bay4line31 = document.querySelector(".bay4-line31");
const bay4line31Color = bay4line31.style.backgroundColor;
const bay4iso1 = document.querySelector(".bay4-iso1");
const bay4iso1Color = bay4iso1.style.backgroundColor;
const bay4iso1Border = bay4iso1.style.borderColor;
const bay4line21 = document.querySelector(".bay4-line21");
const bay4line22 = document.querySelector(".bay4-line22");
const bay4line2 = document.querySelector(".bay4-line2");
const bay4line11 = document.querySelector(".bay4-line11");
const bay4line1 = document.querySelector(".bay4-line1");
const CB4 = document.querySelector(".CB-4");

const CB4BackColor = CB4.style.backgroundColor;
const CB4BorderColor = CB4.style.borderColor;

const bay4line21Color = bay4line21.style.backgroundColor;
const bay4line22Color = bay4line22.style.backgroundColor;
const bay4line2Color = bay4line2.style.backgroundColor;
const bay4line1Color = bay4line1.style.backgroundColor;
const bay4line11Color = bay4line11.style.backgroundColor;


bay4iso1.addEventListener("click", () =>{

    
    if(bay4iso1.style.backgroundColor === bay4iso1Color && bay4iso1.style.borderColor === bay4iso1Border && bay4iso2.style.backgroundColor === bay4iso2Color){

        bay4iso1.style.backgroundColor = "green";

    }

    else if(bay4iso2.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === bay4iso1Color){
        alert(`To close the Bay4iso1 then open the Bay4iso2`)
    }


    // for Incoming-1 RED

    else if(bay4iso1.style.borderColor === "red" && bay4iso1.style.backgroundColor === bay4iso1Color && bay4iso2.style.backgroundColor === bay4iso2Color){
        bay4iso1.style.backgroundColor = "green"
        bay4line21.style.backgroundColor = "red"
        bay4line2.style.backgroundColor = "red"
        bay4line22.style.backgroundColor = "red"
        bay4line11.style.backgroundColor = "red"

        if(CB4.style.backgroundColor === "green"){
            bay4line1.style.backgroundColor = "red"
        }

    }



    else if(bay4iso1.style.borderColor === "red" && bay4iso1.style.backgroundColor === "green"){
        
        bay4iso1.style.backgroundColor = bay4iso1Color
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line11.style.backgroundColor = bay4line11Color

        if(CB4.style.backgroundColor === "green"){
            bay4line1.style.backgroundColor = bay4line1Color
        }
    }


        // for incoming-2 ORANGE

    else if(bay4iso1.style.borderColor === "darkorange" && bay4iso1.style.backgroundColor === bay4iso1Color && bay4iso2.style.backgroundColor === bay4iso2Color){
            bay4iso1.style.backgroundColor = "green"
            bay4line21.style.backgroundColor = "darkorange"
            bay4line2.style.backgroundColor = "darkorange"
            bay4line22.style.backgroundColor = "darkorange"
            bay4line11.style.backgroundColor = "darkorange"
    
            if(CB4.style.backgroundColor === "green"){
                bay4line1.style.backgroundColor = "darkorange"
            }
    
    }

    else if(bay4iso1.style.borderColor === "darkorange" && bay4iso1.style.backgroundColor === "green"){
        
        bay4iso1.style.backgroundColor = bay4iso1Color
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line11.style.backgroundColor = bay4line11Color

        if(CB4.style.backgroundColor === "green"){
            bay4line1.style.backgroundColor = bay4line1Color
        }
    }

        
    else{

        bay4iso1.style.backgroundColor = bay4iso1Color;
        
        
    }
  


})


bay4iso2.addEventListener("click", ()=>{

     

    if(bay4iso2.style.backgroundColor === bay4iso2Color && bay4iso2.style.borderColor === bay4iso2Border && bay4iso1.style.backgroundColor === bay4iso1Color){

        bay4iso2.style.backgroundColor = "green";
        

    }

    else if(bay4iso1.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
        alert(`To close the Bay4iso2 then open the Bay4iso1`)
    }


    // for incoming - 1 RED

    else if(bay4iso2.style.borderColor === "red" && bay4iso2.style.backgroundColor === bay2iso1Color && bay4iso1.style.backgroundColor === bay4iso1Color){
        bay4iso2.style.backgroundColor = "green"
        bay4line21.style.backgroundColor = "red"
        bay4line2.style.backgroundColor = "red"
        bay4line22.style.backgroundColor = "red"
        bay4line11.style.backgroundColor = "red"

        if(CB4.style.backgroundColor === "green"){
            bay4line1.style.backgroundColor = "red"
        }

    }

    else if(bay4iso2.style.borderColor === "red" && bay4iso2.style.backgroundColor === "green"){
        
        bay4iso2.style.backgroundColor = bay4iso2Color
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line11.style.backgroundColor = bay4line11Color

        if(CB4.style.backgroundColor === "green"){
            bay4line1.style.backgroundColor = bay4line1Color
        }
    }


            // /4 for incoming-2 ORANGE

    
    else if(bay4iso2.style.borderColor === "darkorange" && bay4iso2.style.backgroundColor === bay4iso1Color && bay4iso1.style.backgroundColor === bay4iso1Color){
                bay4iso2.style.backgroundColor = "green"
                bay4line21.style.backgroundColor = "darkorange"
                bay4line2.style.backgroundColor = "darkorange"
                bay4line22.style.backgroundColor = "darkorange"
                bay4line11.style.backgroundColor = "darkorange"
        
                if(CB4.style.backgroundColor === "green"){
                    bay4line1.style.backgroundColor = "darkorange"
                }
        
     }
        
    else if(bay4iso2.style.borderColor === "darkorange" && bay4iso2.style.backgroundColor === "green"){
                
                bay4iso2.style.backgroundColor = bay4iso2Color
                bay4line21.style.backgroundColor = bay4line21Color
                bay4line2.style.backgroundColor = bay4line2Color
                bay4line22.style.backgroundColor = bay4line22Color
                bay4line11.style.backgroundColor = bay4line11Color
        
                if(CB4.style.backgroundColor === "green"){
                    bay4line1.style.backgroundColor = bay4line1Color
                }

     }
        
    

    else{

        bay4iso2.style.backgroundColor = bay4iso2Color;
        
    }    


})


CB4.addEventListener("click", ()=>{


    if(CB4.style.backgroundColor === CB4BackColor && bay4line11.style.backgroundColor === bay4line11Color){
        CB4.style.backgroundColor = "green";
    }

    else if(bay4line11.style.backgroundColor === "red" && CB4.style.backgroundColor === CB4BackColor){
        CB4.style.backgroundColor = "green"
        bay4line1.style.backgroundColor = "red"
    }

    else if(bay4line11.style.backgroundColor === "darkorange" && CB4.style.backgroundColor === CB4BackColor){
        CB4.style.backgroundColor = "green"
        bay4line1.style.backgroundColor = "darkorange"
    }
    

    else{
        CB4.style.backgroundColor = CB4BackColor;
        bay4line1.style.backgroundColor = bay4line1Color
    }

})


// bay-5


const bay5line32 = document.querySelector(".bay5-line32");
const bay5line32Color = bay5line32.style.backgroundColor;
const bay5iso2 = document.querySelector(".bay5-iso2");
const bay5iso2Color = bay5iso2.style.backgroundColor;
const bay5iso2Border = bay5iso2.style.borderColor;

const bay5line31 = document.querySelector(".bay5-line31");
const bay5line31Color = bay5line31.style.backgroundColor;
const bay5iso1 = document.querySelector(".bay5-iso1");
const bay5iso1Color = bay5iso1.style.backgroundColor;
const bay5iso1Border = bay5iso1.style.borderColor;
const bay5line21 = document.querySelector(".bay5-line21");
const bay5line22 = document.querySelector(".bay5-line22");
const bay5line2 = document.querySelector(".bay5-line2");
const bay5line11 = document.querySelector(".bay5-line11");
const bay5line1 = document.querySelector(".bay5-line1");
const CB5 = document.querySelector(".CB-5");

const CB5BackColor = CB5.style.backgroundColor;
const CB5BorderColor = CB5.style.borderColor;

const bay5line21Color = bay5line21.style.backgroundColor;
const bay5line22Color = bay5line22.style.backgroundColor;
const bay5line2Color = bay5line2.style.backgroundColor;
const bay5line1Color = bay5line1.style.backgroundColor;
const bay5line11Color = bay5line11.style.backgroundColor;



CB5.addEventListener("click", ()=>{

    if(CB5.style.backgroundColor === CB5BackColor && CB5.style.borderColor === CB5BorderColor){
        CB5.style.backgroundColor = "darkorange";
    }

    else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === bay5iso1Border){
        alert(`Error`);
    }

    else if(iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red" && bay5iso2.style.backgroundColor === "darkorange"  && bay5iso2.style.borderColor === bay5iso1Border){
        alert(`Error`)
    }

    else if(iso1.style.backgroundColor === "red" && bay5iso2.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === "green"){
        alert(`To charge the BUS-2 by Bay5iso2 & BUS-1 by CB-3 open the iso1 `)
    }

    
    else if(iso2.style.backgroundColor === "red" && bay5iso1.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === "green"){
        alert(`To charge the BUS-1 by Bay5iso2 & BUS-2 by CB-3 open the iso2 `)
    }

    else if(CB5.style.borderColor === "darkorange" && CB5.style.backgroundColor === CB5BackColor && bay5iso1.style.borderColor === bay5iso1Border && bay5iso2.style.borderColor === bay5iso2Border){

        CB5.style.backgroundColor = "darkorange"
        bay5line11.style.backgroundColor = "darkorange"
        bay5line2.style.backgroundColor = "darkorange"
        bay5line21.style.backgroundColor = "darkorange"
        bay5line22.style.backgroundColor = "darkorange"
        bay5iso1.style.borderColor = "darkorange"
        bay5iso2.style.borderColor = "darkorange"


          // CB5 close when iso1 is already close which charge the bus 1  when CB3 is Open

          if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === CB3BackColor){
            bay5line31.style.backgroundColor = "darkorange";
            bus1.style.backgroundColor = "darkorange";
            bay2line31.style.backgroundColor = "darkorange";
            bay2iso1.style.borderColor = "darkorange";
            bay3line31.style.backgroundColor = "darkorange";
            bay3iso1.style.borderColor = "darkorange";
            bay3line11.style.backgroundColor = "darkorange";
            bay3line1.style.backgroundColor = "darkorange";
            bay4line31.style.backgroundColor = "darkorange";
            bay4iso1.style.borderColor = "darkorange";
        
            if((bay2iso1.style.backgroundColor === "green" ) && (bay4iso1.style.backgroundColor === "green" )){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange"
            }

            else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange";
            }

            else if(bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === bay4iso1Color){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
            }


        }

        // CB5 close and charge the bus1 through iso1 when CB3 close 

        else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === "green" ){
        bay5iso1.style.backgroundColor = "darkorange"
        bay5line31.style.backgroundColor = "darkorange"
        bus1.style.backgroundColor = "darkorange"
        bay3line31.style.backgroundColor ="darkorange"
        bay3iso1.style.borderColor = "darkorange"
        bay3line1.style.backgroundColor = "darkorange"
        bay3line11.style.backgroundColor = "darkorange"
        bay2line31.style.backgroundColor ="darkorange"
        bay2iso1.style.borderColor = "darkorange"
        bay2line32.style.backgroundColor ="darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay4line31.style.backgroundColor = "darkorange"
        bay4iso1.style.borderColor = "darkorange"
        
        bay3line22.style.backgroundColor = "darkorange"
        bus2.style.backgroundColor = "darkorange"
        bay3line32.style.backgroundColor ="darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay3line2.style.backgroundColor = "darkorange"
        bay3line32.style.backgroundColor ="darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay4line32.style.backgroundColor = "darkorange"
        bay4iso2.style.borderColor = "darkorange"

        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

        }

        }


         // CB5 close when the iso2 is already is close then charge the bus 1 and CB3 is open

         else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === iso1BackColor && CB3.style.backgroundColor === CB3BackColor ){
            bay5line32.style.backgroundColor = "darkorange";
            bus2.style.backgroundColor = "darkorange";
            bay2line32.style.backgroundColor = "darkorange";
            bay2iso2.style.borderColor = "darkorange";
            bay3line2.style.backgroundColor = "darkorange";
            bay3line22.style.backgroundColor = "darkorange";
            bay3iso2.style.borderColor = "darkorange";
            bay3line32.style.backgroundColor = "darkorange";
        
            bay4line32.style.backgroundColor = "darkorange";
            bay4iso2.style.borderColor = "darkorange";
            // bay5line32.style.backgroundColor = "red";
            // bay5iso2.style.borderColor = "red";


            if((bay2iso2.style.backgroundColor === "green" ) && (bay4iso2.style.backgroundColor === "green" )){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange"
            }

            else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange";
            }

            else if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
            }

         
            
        }


        
        // CB5 close when the iso2 is already is close then charge the bus 1 and CB3 is close 

        else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso1Color && CB3.style.backgroundColor === "green"){
            bay5line32.style.backgroundColor = "darkorange"
            bus2.style.backgroundColor = "darkorange"
            bay3line32.style.backgroundColor ="darkorange"
            bay3iso2.style.borderColor = "darkorange"
            bay3line2.style.backgroundColor = "darkorange"
            bay3line22.style.backgroundColor = "darkorange"
            bay2line32.style.backgroundColor ="darkorange"
            bay2iso2.style.borderColor = "darkorange"
            bay4line32.style.backgroundColor = "darkorange"
            bay4iso2.style.borderColor = "darkorange"
        
            bus1.style.backgroundColor = "darkorange"
            bay3line31.style.backgroundColor ="darkorange"
            bay3iso1.style.borderColor = "darkorange"
            bay3line1.style.backgroundColor = "darkorange"
            bay3line11.style.backgroundColor = "darkorange"
            bay2line31.style.backgroundColor ="darkorange"
            bay2iso1.style.borderColor = "darkorange"
            bay4line31.style.backgroundColor = "darkorange"
            bay4iso1.style.borderColor = "darkorange"


            if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
    
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange";
            }
    
            else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange";
            }
    
            else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
    
            }

        }


        else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === "darkorange" && (bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color )){
            bay5line31.style.backgroundColor = "darkorange";
            bus1.style.backgroundColor = "darkorange";
            bay5line32.style.backgroundColor = "darkorange";
            bus2.style.backgroundColor = "darkorange";
            bay2line31.style.backgroundColor = "darkorange";
            bay2iso1.style.borderColor = "darkorange";
            bay2line32.style.backgroundColor = "darkorange";
            bay2iso2.style.borderColor = "darkorange";
            bay3line1.style.backgroundColor = "darkorange";
            bay3line11.style.backgroundColor = "darkorange";
            bay3line31.style.backgroundColor = "darkorange";
            bay3iso1.style.borderColor = "darkorange";

            bay3line32.style.backgroundColor = "darkorange";
            bay3iso2.style.borderColor = "darkorange";
            bay4line31.style.backgroundColor = "darkorange";
            bay4iso1.style.borderColor = "darkorange";
            // bay5line31.style.backgroundColor = "red";
            // bay5iso1.style.borderColor = "red";
            bay3line2.style.backgroundColor = "darkorange";
            bay3line22.style.backgroundColor = "darkorange";
            bay4line32.style.backgroundColor = "darkorange";
            bay4iso2.style.borderColor = "darkorange";
            // bay5line32.style.backgroundColor = "red";
            // bay5iso2.style.borderColor = "red";

            if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "darkorange"
                bay2line2.style.backgroundColor = "darkorange"
                bay2line22.style.backgroundColor = "darkorange"
                bay2line11.style.backgroundColor = "darkorange"

                if(bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green"){
                    bay4line21.style.backgroundColor = "darkorange"
                    bay4line2.style.backgroundColor = "darkorange"
                 bay4line22.style.backgroundColor = "darkorange"
                 bay4line11.style.backgroundColor = "darkorange"
                }
      
            }

            else if(bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green"){
                bay4line21.style.backgroundColor = "darkorange"
                bay4line2.style.backgroundColor = "darkorange"
                bay4line22.style.backgroundColor = "darkorange"
                bay4line11.style.backgroundColor = "darkorange"
            }

            
        }

        
        else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === "darkorange" && (bay4iso1.style.backgroundColor === "green"|| bay4iso2.style.backgroundColor === "green" )){

            bay5line31.style.backgroundColor = "darkorange";
            bus1.style.backgroundColor = "darkorange";
            bay5line32.style.backgroundColor = "darkorange";
            bus2.style.backgroundColor = "darkorange";
            bay2line31.style.backgroundColor = "darkorange";
            bay2iso1.style.borderColor = "darkorange";
            bay2line32.style.backgroundColor = "darkorange";
            bay2iso2.style.borderColor = "darkorange";
            bay3line1.style.backgroundColor = "darkorange";
            bay3line11.style.backgroundColor = "darkorange";
            bay3line31.style.backgroundColor = "darkorange";
            bay3iso1.style.borderColor = "darkorange";

            bay3line32.style.backgroundColor = "darkorange";
            bay3iso2.style.borderColor = "darkorange";
            bay4line31.style.backgroundColor = "darkorange";
            bay4iso1.style.borderColor = "darkorange";
           
            bay3line2.style.backgroundColor = "darkorange";
            bay3line22.style.backgroundColor = "darkorange";
            bay4line32.style.backgroundColor = "darkorange";
            bay4iso2.style.borderColor = "darkorange";


            bay4line21.style.backgroundColor = "darkorange"
            bay4line2.style.backgroundColor = "darkorange"
            bay4line22.style.backgroundColor = "darkorange"
            bay4line11.style.backgroundColor = "darkorange"


        }


         // iso1 is close , CB3 close & bay2iso2 close 

         else if(bay5iso1.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === "green"){
            bay5line31.style.backgroundColor = "darkorange";
            bus1.style.backgroundColor = "darkorange";
           
            bus2.style.backgroundColor = "darkorange";
            bay2line31.style.backgroundColor = "darkorange";
            bay2iso1.style.borderColor = "darkorange";
            bay2line32.style.backgroundColor = "darkorange";
            bay2iso2.style.borderColor = "darkorange";
            bay3line1.style.backgroundColor = "darkorange";
            bay3line11.style.backgroundColor = "darkorange";
            bay3line31.style.backgroundColor = "darkorange";
            bay3iso1.style.borderColor = "darkorange";

            bay3line32.style.backgroundColor = "darkorange";
            bay3iso2.style.borderColor = "darkorange";
            bay4line31.style.backgroundColor = "darkorange";
            bay4iso1.style.borderColor = "darkorange";
            
            bay3line2.style.backgroundColor = "darkorange";
            bay3line22.style.backgroundColor = "darkorange";
            bay4line32.style.backgroundColor = "darkorange";
            bay4iso2.style.borderColor = "darkorange";

            if(bay2iso2.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "darkorange"
                bay2line2.style.backgroundColor = "darkorange"
                bay2line22.style.backgroundColor = "darkorange"
                bay2line11.style.backgroundColor = "darkorange"
            }
            else if(bay2iso1.style.backgroundColor === "green"){
                bay2line21.style.backgroundColor = "darkorange"
                bay2line2.style.backgroundColor = "darkorange"
                bay2line22.style.backgroundColor = "darkorange"
                bay2line11.style.backgroundColor = "darkorange"
            }

        }


            // iso2 is close , CB3 close & bay2iso1 close 

            else if(bay5iso2.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === "green"){
            
                bus1.style.backgroundColor = "darkorange";
               bay5line32.style.backgroundColor = "darkorange";
                bus2.style.backgroundColor = "darkorange";
                bay2line31.style.backgroundColor = "darkorange";
                bay2iso1.style.borderColor = "darkorange";
                bay2line32.style.backgroundColor = "darkorange";
                bay2iso2.style.borderColor = "darkorange";
                bay3line1.style.backgroundColor = "darkorange";
                bay3line11.style.backgroundColor = "darkorange";
                bay3line31.style.backgroundColor = "darkorange";
                bay3iso1.style.borderColor = "darkorange";
    
                bay3line32.style.backgroundColor = "darkorange";
                bay3iso2.style.borderColor = "darkorange";
                bay4line31.style.backgroundColor = "darkorange";
                bay4iso1.style.borderColor = "darkorange";
                
                bay3line2.style.backgroundColor = "darkorange";
                bay3line22.style.backgroundColor = "darkorange";
                bay4line32.style.backgroundColor = "red";
                bay4iso2.style.borderColor = "darkorange";
    
                if(bay2iso1.style.backgroundColor === "green"){
                    bay2line21.style.backgroundColor = "darkorange"
                    bay2line2.style.backgroundColor = "darkorange"
                    bay2line22.style.backgroundColor = "darkorange"
                    bay2line11.style.backgroundColor = "darkorange"
                }
                
                else if(bay2iso2.style.backgroundColor === "green"){
                    bay2line21.style.backgroundColor = "darkorange"
                    bay2line2.style.backgroundColor = "darkorange"
                    bay2line22.style.backgroundColor = "darkorange"
                    bay2line11.style.backgroundColor = "darkorange"
                }
            }



    }

     // for only discharging the bus1 by CB5 and at the same time bus2 is charge by incomer-1

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && bus1.style.backgroundColor === "darkorange" && bus2.style.backgroundColor === "red"){
        CB5.style.backgroundColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
        }

        
    }



 // for only discharging the bus2 by CB5 and at the same time bus1 is charge by incomer-1

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bus2.style.backgroundColor === "darkorange" && bus1.style.backgroundColor === "red" ){
        
        CB5.style.backgroundColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bay5line32.style.backgroundColor = bay5line31Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
    }
    else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
    }
    }




    // both bay5iso1 and bay5iso2 charge the bus1 and bus2 when cb3 is open

    else if(CB5.style.backgroundColor === "darkorange" &&  bay5iso1.style.backgroundColor === "darkorange" &&  bay5iso2.style.backgroundColor === "darkorange" ){
        CB5.style.backgroundColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        bay5line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if((bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay4iso2.style.borderColor === "darkorange" || bay4iso1.style.borderColor === "darkorange")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if((bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green") && (bay2iso1.style.borderColor === "darkorange" || bay2iso2.style.borderColor === "darkorange")){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }



    }

    // discharging the iso1 and bus1 when CB3 is open

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === CB3BackColor){
        CB5.style.backgroundColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        


        if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
        }
    }



    // both bus are orange and only bay5iso1 is close and CB3 is close 

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === "green"){
        CB5.style.backgroundColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        bay5line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border


        if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if((bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay4iso2.style.borderColor === "darkorange" || bay4iso1.style.borderColor === "darkorange")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if((bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green") && (bay2iso1.style.borderColor === "darkorange" || bay2iso2.style.borderColor === "darkorange")){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }

    // discharging bay5iso2 , BUS-1 when CB3 is open

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === CB3BackColor){
        CB5.style.backgroundColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border

        bay5line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border

        if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
         }
        else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
             bay4line22.style.backgroundColor = bay4line22Color
             bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color

            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
        }
    }


     // both bus are orange and only bay5iso2 is close and CB3 is close 

     else if(CB5.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === "green"){
        CB5.style.backgroundColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        bay5line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border


        if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if((bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay4iso2.style.borderColor === "darkorange" || bay4iso1.style.borderColor === "darkorange")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if((bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green") && (bay2iso1.style.borderColor === "darkorange" || bay2iso2.style.borderColor === "darkorange")){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }


    else {
    
            CB5.style.backgroundColor = CB5BackColor;
            bay5line11.style.backgroundColor = bay5line11Color
            bay5line2.style.backgroundColor = bay5line2Color
            bay5line21.style.backgroundColor = bay5line21Color
            bay5line22.style.backgroundColor = bay5line22Color
            bay5iso1.style.borderColor = bay5iso1Border
            bay5iso2.style.borderColor = bay5iso2Border
           
        
    }
})


bay5iso1.addEventListener("click", ()=>{

        // bus1.classList.add("active")

        if(bay5iso1.style.backgroundColor === bay5iso1Color && CB3.style.backgroundColor === CB3BackColor && bay5iso1.style.borderColor === bay5iso1Border && iso1.style.backgroundColor === iso1BackColor && bus1.style.backgroundColor === bus1Color){
            bay5iso1.style.backgroundColor = "darkorange";
        }

        else if(bay5iso1.style.backgroundColor === bay5iso1Color && iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && iso2.style.backgroundColor === iso2BackColor){
            alert(`BUS-1 is already charged by Bay1iso1`)
        }

        else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === iso1BorderColor){
            alert(`To close the Bay5iso1 open the Bay1iso1`)
        }

        else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red"){
            alert(`Both the BUS-1 & BUS-2 are charged by Bay1iso1 & Bay1iso2`)
        }
        else if(bay5iso2.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === "green" ){
            alert(`To close the Bay5iso1 open the CB-3`);
        }
        
        else if(iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red" && CB3.style.backgroundColor === "green" && bus1.style.backgroundColor === "red"){
            alert(`To close the Bay5iso1 then open the CB-3`);
        }

      
           // bay5iso1 charging bus - 1 and if bay2iso1 close then charge its 

    else if(bay5iso1.style.borderColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso1Border && CB3.style.backgroundColor === CB3BackColor){
        bay5iso1.style.backgroundColor ="darkorange"
        bay5line31.style.backgroundColor = "darkorange"
        bus1.style.backgroundColor = "darkorange"
        bay3line31.style.backgroundColor ="darkorange"
        bay3iso1.style.borderColor = "darkorange"
        bay3line1.style.backgroundColor = "darkorange"
        bay3line11.style.backgroundColor = "darkorange"
        bay2line31.style.backgroundColor ="darkorange"
        bay2iso1.style.borderColor = "darkorange"
        bay4line31.style.backgroundColor = "darkorange"
        bay4iso1.style.borderColor = "darkorange"

            if((bay2iso1.style.backgroundColor === "green" ) && (bay4iso1.style.backgroundColor === "green" )){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange"
            }

            else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
                bay4line21.style.backgroundColor =  "darkorange";
                bay4line22.style.backgroundColor =  "darkorange";
                bay4line2.style.backgroundColor =  "darkorange";
                bay4line11.style.backgroundColor =  "darkorange";
            }

            else if(bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === bay4iso1Color){
                bay2line21.style.backgroundColor =  "darkorange";
                bay2line22.style.backgroundColor =  "darkorange";
                bay2line2.style.backgroundColor =  "darkorange";
                bay2line11.style.backgroundColor =  "darkorange";
            }

    }

    // bay5iso1 charging bus - 1 and if bay2iso1 or bay4ios are close then charge its and CB3 is close

    else if( bay5iso1.style.borderColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso1Color  && CB3.style.backgroundColor === "green" ){
        bay5iso1.style.backgroundColor = "darkorange"
        bay5line31.style.backgroundColor = "darkorange"
        bus1.style.backgroundColor = "darkorange"
        bay3line31.style.backgroundColor ="darkorange"
        bay3iso1.style.borderColor = "darkorange"
        bay3line1.style.backgroundColor = "darkorange"
        bay3line11.style.backgroundColor = "darkorange"
        bay2line31.style.backgroundColor ="darkorange"
        bay2iso1.style.borderColor = "darkorange"
        bay2line32.style.backgroundColor ="darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay4line31.style.backgroundColor = "darkorange"
        bay4iso1.style.borderColor = "darkorange"
        
        bay3line22.style.backgroundColor = "darkorange"
        bus2.style.backgroundColor = "darkorange"
        bay3line32.style.backgroundColor ="darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay3line2.style.backgroundColor = "darkorange"
        bay3line32.style.backgroundColor ="darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay4line32.style.backgroundColor = "darkorange"
        bay4iso2.style.borderColor = "darkorange"

        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

        }
        

    }

    // bay5iso1 discharging bus1 when CB3 is open
       
    else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === iso2BackColor && iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === CB3BackColor ){
        
    
        bay5iso1.style.backgroundColor = bay5iso1Color
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border


    if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
     }
    else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color
    }


    }

        // iso1 discharging when the bay5iso2 is also charge  (bus-1 red & bus-2 is orange )

     else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === bay5iso2Color && iso2.style.backgroundColor === "red" && CB3.style.backgroundColor === CB3BackColor ){
        
    
            bay5iso1.style.backgroundColor = bay5iso1Color
            bay5line31.style.backgroundColor = bay5line31Color
            bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border
    
    
        if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
        }
    
    }


     // discharging the iso1, bus1, bus2 when CB3 is closr

     else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === bay5iso2Color && iso1.style.backgroundColor === iso1BackColor && iso2.style.backgroundColor === iso2BackColor && CB3.style.backgroundColor === "green"){
        
    
        bay5iso1.style.backgroundColor = bay5iso1Color
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
    bay3line31.style.backgroundColor = bay3line31Color
    bay3iso1.style.borderColor = bay3iso1BorderColor
    bay3line1.style.backgroundColor = bay3line1Color
    bay3line11.style.backgroundColor = bay3line11Color
    bay2line31.style.backgroundColor = bay2line31Color
    bay2iso1.style.borderColor = bay2iso1Border
    bay4line31.style.backgroundColor = bay4line31Color
    bay4iso1.style.borderColor = bay4iso1Border

    bus2.style.backgroundColor = bus2Color
    bay3line32.style.backgroundColor = bay3line32Color
    bay3iso2.style.borderColor = bay3iso2BorderColor
    bay3line2.style.backgroundColor = bay3line2Color
    bay3line22.style.backgroundColor = bay3line22Color
    bay2line32.style.backgroundColor = bay2line32Color
    bay2iso2.style.borderColor = bay2iso2Border
    bay4line32.style.backgroundColor = bay4line32Color
    bay4iso2.style.borderColor = bay4iso2Border

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color

    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    
         if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
             bay4line21.style.backgroundColor = bay4line21Color
             bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
        }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
             bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color

            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
        }     


    }

    else if(bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === CB3BackColor){
        bay5iso1.style.backgroundColor = bay5iso1Color
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border
        

        if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
       bay4line2.style.backgroundColor = bay4line2Color
       bay4line11.style.backgroundColor = bay4line11Color
     }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
       bay2line21.style.backgroundColor = bay2line21Color
       bay2line22.style.backgroundColor = bay2line22Color
       bay2line2.style.backgroundColor = bay2line2Color
       bay2line11.style.backgroundColor = bay2line11Color
     }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
       bay4line21.style.backgroundColor = bay4line21Color
       bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
       bay4line11.style.backgroundColor = bay4line11Color

       bay2line21.style.backgroundColor = bay2line21Color
       bay2line22.style.backgroundColor = bay2line22Color
       bay2line2.style.backgroundColor = bay2line2Color
       bay2line11.style.backgroundColor = bay2line11Color
    }    
    }

       
    else {
        bay5iso1.style.backgroundColor = iso1BackColor;
   
    }


           
})

bay5iso2.addEventListener("click", ()=>{

    if(bay5iso2.style.backgroundColor === bay5iso2Color && bay5iso2.style.borderColor === bay5iso2Border && iso2.style.backgroundColor === iso2BackColor && bus2.style.backgroundColor === bus2Color && CB3.style.backgroundColor === CB3BackColor){
        bay5iso2.style.backgroundColor = "darkorange";
    }

    else if(iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red" && bay5iso2.style.backgroundColor === bay5iso2Color ){
        alert(`To close the Bay5iso2 then open the Bay1iso2 for charge the BUS-2`)
    }

    else if(iso2.style.backgroundColor === "red" && iso2.style.borderColor === iso1BorderColor)
    {
        alert(`To close the Bay5iso2 then open the Bay1iso2`)
    }

    else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red"){
        alert(`Both BUS-1 & BUS-2 are charged already`)
    }
    else if(bay5iso1.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === "green"){
        alert(`To close the Bay5iso2 then open the CB-3`);
    }

    else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && CB3.style.backgroundColor === "green" && bus2.style.backgroundColor === "red" ){
        alert(`To close the Bay5iso2 then open the CB-3`);
        // bay5iso2.style.backgroundColor = bay5iso2Color
    }


 
 
    
    else if(bay5iso2.style.backgroundColor === bay5iso2Color && bay5iso2.style.borderColor === "darkorange" && CB3.style.backgroundColor === CB3BackColor){
        bay5iso2.style.backgroundColor = "darkorange"
        bay5line32.style.backgroundColor = "darkorange"
        bus2.style.backgroundColor = "darkorange"
        bay3line32.style.backgroundColor ="darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay3line2.style.backgroundColor = "darkorange"
        bay3line22.style.backgroundColor = "darkorange"
        bay2line32.style.backgroundColor ="darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay4line32.style.backgroundColor = "darkorange"
        bay4iso2.style.borderColor = "darkorange"


        if((bay2iso2.style.backgroundColor === "green" ) && (bay4iso2.style.backgroundColor === "green" )){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange"
        }

        else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";
        }
    }

    else if(bay5iso2.style.backgroundColor === bay5iso2Color && bay5iso2.style.borderColor === "darkorange" && CB3.style.backgroundColor === "green"){
        bay5iso2.style.backgroundColor = "darkorange"
        bay5line32.style.backgroundColor = "darkorange"
        bus2.style.backgroundColor = "darkorange"
        bay3line32.style.backgroundColor ="darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay3line2.style.backgroundColor = "darkorange"
        bay3line22.style.backgroundColor = "darkorange"
        bay2line32.style.backgroundColor ="darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay4line32.style.backgroundColor = "darkorange"
        bay4iso2.style.borderColor = "darkorange"
    
        bus1.style.backgroundColor = "darkorange"
        bay3line31.style.backgroundColor ="darkorange"
        bay3iso1.style.borderColor = "darkorange"
        bay3line1.style.backgroundColor = "darkorange"
        bay3line11.style.backgroundColor = "darkorange"
        bay2line31.style.backgroundColor ="darkorange"
        bay2iso1.style.borderColor = "darkorange"
        bay4line31.style.backgroundColor = "darkorange"
        bay4iso1.style.borderColor = "darkorange"

        // if(bay2iso2.style.backgroundColor === "green" && bay2iso2.style.borderColor === "red"){
        //     bay2line21.style.backgroundColor =  "red";
        //     bay2line22.style.backgroundColor =  "red";
        //     bay2line2.style.backgroundColor =  "red";
        //     bay2line11.style.backgroundColor =  "red";
        // }
        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

        }


}

    // bay5iso2 charging the BUS-2 and CB3 is open


else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso1Color && CB3.style.backgroundColor === CB3BackColor){
    bus2.style.backgroundColor = bus2Color
    bay5iso2.style.backgroundColor = bay5iso2Color
    bay5line32.style.backgroundColor = bay5line32Color
    bay3line32.style.backgroundColor = bay3line32Color
    bay3iso2.style.borderColor = bay3iso2BorderColor
    bay3line2.style.backgroundColor = bay3line2Color
    bay3line22.style.backgroundColor = bay3line22Color
    bay2line32.style.backgroundColor = bay2line32Color
    bay2iso2.style.borderColor = bay2iso2Border
    bay4line32.style.backgroundColor = bay4line32Color
    bay4iso2.style.borderColor = bay4iso2Border

    if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
     }
    else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color
    }

    
}

    // bay5iso2 charging the BUS-2 and CB3 is open and iso1 is charging the BUS-1


else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso1Color && iso1.style.backgroundColor === "red" && CB3.style.backgroundColor === CB3BackColor){
    bus2.style.backgroundColor = bus2Color
    bay5iso2.style.backgroundColor = bay5iso2Color
    bay5line32.style.backgroundColor = bay5line32Color
    bay3line32.style.backgroundColor = bay3line32Color
    bay3iso2.style.borderColor = bay3iso2BorderColor
    bay3line2.style.backgroundColor = bay3line2Color
    bay3line22.style.backgroundColor = bay3line22Color
    bay2line32.style.backgroundColor = bay2line32Color
    bay2iso2.style.borderColor = bay2iso2Border
    bay4line32.style.backgroundColor = bay4line32Color
    bay4iso2.style.borderColor = bay4iso2Border

    if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
     }
    else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color
    }

}

         // discharging the bay5iso2, bus2, bus1 when CB3 is closer


else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso1Color && iso1.style.backgroundColor === iso1BackColor && iso2.style.backgroundColor === iso2BackColor && CB3.style.backgroundColor === "green"){
         
    bus2.style.backgroundColor = bus2Color
    bay5iso2.style.backgroundColor = bay5iso2Color
    bay5line32.style.backgroundColor = bay5line32Color
    bay3line32.style.backgroundColor = bay3line32Color
    bay3iso2.style.borderColor = bay3iso2BorderColor
    bay3line2.style.backgroundColor = bay3line2Color
    bay3line22.style.backgroundColor = bay3line22Color
    bay2line32.style.backgroundColor = bay2line32Color
    bay2iso2.style.borderColor = bay2iso2Border
    bay4line32.style.backgroundColor = bay4line32Color
    bay4iso2.style.borderColor = bay4iso2Border

    bus1.style.backgroundColor = bus1Color
    bay3line31.style.backgroundColor = bay3line31Color
    bay3iso1.style.borderColor = bay3iso1BorderColor
    bay3line1.style.backgroundColor = bay3line1Color
    bay3line11.style.backgroundColor = bay3line11Color
    bay2line31.style.backgroundColor = bay2line31Color
    bay2iso1.style.borderColor = bay2iso1Border
    bay4line31.style.backgroundColor = bay4line31Color
    bay4iso1.style.borderColor = bay4iso1Border

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color

    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
     }
        else if( (bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green") ){
    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color
    }
}

// discharging of bay5iso2 when the bay5iso1 is charge both bus are orange 

else if(bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && CB3.style.backgroundColor === CB3BackColor){
    bus2.style.backgroundColor = bus2Color
    bay5iso2.style.backgroundColor = bay5iso2Color
    bay5line32.style.backgroundColor = bay5line32Color
    bay3line32.style.backgroundColor = bay3line32Color
    bay3iso2.style.borderColor = bay3iso2BorderColor
    bay3line2.style.backgroundColor = bay3line2Color
    bay3line22.style.backgroundColor = bay3line22Color
    bay2line32.style.backgroundColor = bay2line32Color
    bay2iso2.style.borderColor = bay2iso2Border
    bay4line32.style.backgroundColor = bay4line32Color
    bay4iso2.style.borderColor = bay4iso2Border

    if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
     }
        else if( (bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green") ){
    bay4line21.style.backgroundColor = bay4line21Color
    bay4line22.style.backgroundColor = bay4line22Color
    bay4line2.style.backgroundColor = bay4line2Color
    bay4line11.style.backgroundColor = bay4line11Color

    bay2line21.style.backgroundColor = bay2line21Color
    bay2line22.style.backgroundColor = bay2line22Color
    bay2line2.style.backgroundColor = bay2line2Color
    bay2line11.style.backgroundColor = bay2line11Color
    }

}



else {
    bay5iso2.style.backgroundColor = bay5iso2Color;
    

}

       
})

const termination2 = document.querySelector(".termination-2");

const btn2 = document.querySelector(".btn2");

const btn2Color = btn2.style.backgroundColor;

const topDown = document.querySelector(".top-down");
// const active = document.querySelector(".top-down.active");
const supply2 = document.querySelector(".supply-2");

btn2.addEventListener("click",()=>{

 
        if((bay5line1.style.backgroundColor === bay5line1Color) && (CB5.style.borderColor === CB5BorderColor) && (CB5.style.backgroundColor === CB5BackColor)){
                 bay5line1.style.backgroundColor = "darkorange";
                 CB5.style.borderColor = "darkorange";
                 btn2.style.backgroundColor = "darkorange";
                 supply2.classList.add("active2")
                 termination2.classList.add("active4");
                

             if(CB5.style.backgroundColor === "darkorange"){
                    // topDown.classList.add('active');
                     bay5line11.style.backgroundColor = "darkorange"
                    bay5line2.style.backgroundColor = "darkorange"
                    bay5line21.style.backgroundColor ="darkorange"
                    bay5line22.style.backgroundColor = "darkorange"
                    bay5iso1.style.borderColor = "darkorange"
                    bay5iso2.style.borderColor ="darkorange"
            }

             else{
                     bay5line11.style.backgroundColor = bay5line11Color
                    bay5line2.style.backgroundColor = bay5line2Color
                     bay5line21.style.backgroundColor = bay5line21Color
                    bay5line22.style.backgroundColor = bay5line22Color
                     bay5iso1.style.borderColor = bay5iso1Border
                    bay5iso2.style.borderColor = bay5iso2Border
                }
        }   


        else if(iso1.style.backgroundColor === "red" && iso1.style.borderColor === "red" && bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === bay5iso1Border && CB5.style.backgroundColor === "darkorange" && CB5.style.borderColor === CB5BorderColor){
            alert(`Error`);
        }
    
        else if(iso2.style.backgroundColor === "red" && iso2.style.borderColor === "red" && bay5iso2.style.backgroundColor === "darkorange"  && bay5iso2.style.borderColor === bay5iso1Border && CB5.style.backgroundColor === "darkorange" && CB5.style.borderColor=== CB5BorderColor){
            alert(`Error`)
        }


        else if((bay5line1.style.backgroundColor === bay5line1Color) && (CB5.style.borderColor === CB5BorderColor) && (CB5.style.backgroundColor === "darkorange") && (bay5iso1.style.backgroundColor === bay5iso1Color) && (bay5iso2.style.backgroundColor === bay5iso2Color && CB5.style.borderColor === CB5BorderColor && CB5.style.backgroundColor === "darkorange")){
            btn2.style.backgroundColor = "darkorange";
            supply2.classList.add("active2")
            termination2.classList.add("active4");
            bay5line1.style.backgroundColor ="darkorange"
            bay5line11.style.backgroundColor = "darkorange"
                bay5line2.style.backgroundColor = "darkorange";
                bay5line21.style.backgroundColor = "darkorange"
                bay5line22.style.backgroundColor = "darkorange"
                CB5.style.borderColor = "darkorange"
                bay5iso1.style.borderColor = "darkorange";
                bay5iso2.style.borderColor = "darkorange";
        }
    
    
    // iso1 charging BUS-1

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" &&  CB5.style.borderColor === CB5BorderColor && bay5iso1.style.borderColor === bay5iso1Border && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === CB3BackColor ){
        
        btn2.style.backgroundColor = "darkorange";
        supply2.classList.add("active2")
        termination2.classList.add("active4");
        bay5line1.style.backgroundColor = "darkorange"
        bay5line11.style.backgroundColor = "darkorange"
        bay5line2.style.backgroundColor = "darkorange"
        bay5line21.style.backgroundColor ="darkorange"
        bay5line22.style.backgroundColor = "darkorange"
        bay5line31.style.backgroundColor = "darkorange"
        CB5.style.borderColor ="darkorange"
        bay5iso1.style.borderColor = "darkorange"
        bus1.style.backgroundColor ="darkorange"
        bay5iso2.style.borderColor ="darkorange"
        bay2line31.style.backgroundColor ="darkorange"
        bay2iso1.style.borderColor = "darkorange"
        bay3line1.style.backgroundColor = "darkorange";
        bay3line11.style.backgroundColor = "darkorange";
        bay3line31.style.backgroundColor ="darkorange"
        bay3iso1.style.borderColor = "darkorange"
        bay4line31.style.backgroundColor = "darkorange"
        bay4iso1.style.borderColor = "darkorange"

        if((bay2iso1.style.backgroundColor === "green" ) && (bay4iso1.style.backgroundColor === "green" )){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange"
        }

        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if(bay2iso1.style.backgroundColor === "green" && bay4iso1.style.backgroundColor === bay4iso1Color){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";
        }

        
    }
    
    // iso1 charging and BUC COupler CLOSE

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === bay5iso2Color && CB5.style.borderColor === CB5BorderColor  && CB3.style.backgroundColor === "green" ){
        
        btn2.style.backgroundColor = "darkorange";
        supply2.classList.add("active2")
        termination2.classList.add("active4");
        bay5line1.style.backgroundColor = "darkorange"
        bay5line11.style.backgroundColor = "darkorange"
        bay5line2.style.backgroundColor = "darkorange"
        bay5line21.style.backgroundColor ="darkorange"
        bay5line22.style.backgroundColor = "darkorange"
        bay5line31.style.backgroundColor = "darkorange"
        CB5.style.borderColor ="darkorange"
        bay5iso1.style.borderColor = "darkorange"
        bus1.style.backgroundColor ="darkorange"
        bay5iso2.style.borderColor ="darkorange"
        bay2line31.style.backgroundColor ="darkorange"
        bay2iso1.style.borderColor = "darkorange"
        // bay3line1.style.backgroundColor = "red";
        // bay3line11.style.backgroundColor = "red";
        bay3line31.style.backgroundColor ="darkorange"
        bay3iso1.style.borderColor = "darkorange"
        bay3line1.style.backgroundColor = "darkorange"
        bay3line11.style.backgroundColor = "darkorange"
        // CB3.style.borderColor = "darkorange"
        bay4line31.style.backgroundColor = "darkorange"
        bay4iso1.style.borderColor = "darkorange"

        bus2.style.backgroundColor = "darkorange"
        bay2line32.style.backgroundColor = "darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay3line32.style.backgroundColor = "darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay3line22.style.backgroundColor = "darkorange"
        bay3line2.style.backgroundColor = "darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay4line32.style.backgroundColor = "darkorange"
        bay4iso2.style.borderColor = "darkorange"

        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

        }
      

    }

    // iso2 charging bus 2

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso1Color && CB5.style.borderColor === CB5BorderColor && bay5iso2.style.borderColor === bay5iso2Border && CB3.style.backgroundColor === CB3BackColor )
    {
        btn2.style.backgroundColor = "darkorange";
        supply2.classList.add("active2")
        termination2.classList.add("active4");
        bay5line1.style.backgroundColor = "darkorange"
        bay5line11.style.backgroundColor = "darkorange"
        CB5.style.borderColor = "darkorange"
        bay5line2.style.backgroundColor = "darkorange"
        bay5line21.style.backgroundColor ="darkorange"
        bay5line22.style.backgroundColor = "darkorange"
        bay5iso1.style.borderColor = "darkorange"
        bay5iso2.style.borderColor ="darkorange"
        bay5line32.style.backgroundColor = "darkorange"
        bus2.style.backgroundColor = "darkorange"
        bay2line32.style.backgroundColor = "darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay3line32.style.backgroundColor = "darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay3line22.style.backgroundColor = "darkorange"
        bay3line2.style.backgroundColor = "darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay4line32.style.backgroundColor = "darkorange"
        bay4iso2.style.borderColor = "darkorange"

        if((bay2iso2.style.backgroundColor === "green" ) && (bay4iso2.style.backgroundColor === "green" )){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange"
        }

        else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if(bay2iso2.style.backgroundColor === "green" && bay4iso2.style.backgroundColor === bay4iso2Color){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";
        }
        

        
        
    }

     // iso2 charging bus 2 CB3 close

     else if(CB5.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" &&  CB5.style.borderColor === CB5BorderColor && bay5iso2.style.borderColor === bay5iso2Border && CB3.style.backgroundColor === "green" ){
        btn2.style.backgroundColor = "darkorange";
        supply2.classList.add("active2")
        termination2.classList.add("active4");
        bay5line1.style.backgroundColor = "darkorange"
        bay5line11.style.backgroundColor = "darkorange"
        CB5.style.borderColor = "darkorange"
        bay5line2.style.backgroundColor = "darkorange"
        bay5line21.style.backgroundColor ="darkorange"
        bay5line22.style.backgroundColor = "darkorange"
        bay5iso1.style.borderColor = "darkorange"
        bay5iso2.style.borderColor = "darkorange"
        bay5line32.style.backgroundColor = "darkorange"
        bus2.style.backgroundColor = "darkorange"
        bay3line32.style.backgroundColor ="darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay3line2.style.backgroundColor = "darkorange"
        bay3line22.style.backgroundColor = "darkorange"
        bay2line32.style.backgroundColor ="darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay4line32.style.backgroundColor = "darkorange"
        bay4iso2.style.borderColor = "darkorange"
    
        bus1.style.backgroundColor = "darkorange"
        bay3line31.style.backgroundColor ="darkorange"
        bay3iso1.style.borderColor = "darkorange"
        bay3line1.style.backgroundColor = "darkorange"
        bay3line11.style.backgroundColor = "darkorange"
        bay2line31.style.backgroundColor ="darkorange"
        bay2iso1.style.borderColor = "darkorange"
        bay4line31.style.backgroundColor = "darkorange"
        bay4iso1.style.borderColor = "darkorange"

        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

        }

    }


    // both bay5iso1 & bay5iso2 close

    else if(CB5.style.backgroundColor === "darkorange" && CB5.style.borderColor === CB5BorderColor && bay5iso1.style.backgroundColor === "darkorange" && bay5iso1.style.borderColor === bay5iso1Border && bay5iso2.style.backgroundColor === "darkorange" && bay5iso2.style.borderColor === bay5iso2Border && CB3.style.backgroundColor === CB3BackColor){
        btn2.style.backgroundColor = "darkorange";
        supply2.classList.add("active2")
        termination2.classList.add("active4");
        bay5line1.style.backgroundColor = "darkorange"
        bay5line11.style.backgroundColor = "darkorange"
        CB5.style.borderColor = "darkorange"
        bay5line2.style.backgroundColor = "darkorange"
        bay5line21.style.backgroundColor ="darkorange"
        bay5line22.style.backgroundColor = "darkorange"
        bay5iso1.style.borderColor = "darkorange"
        bay5iso2.style.borderColor ="darkorange"
        bay5line31.style.backgroundColor = "darkorange"
        bay5line32.style.backgroundColor = "darkorange"
        bus1.style.backgroundColor = "darkorange"
        bus2.style.backgroundColor = "darkorange"
        bay3line31.style.backgroundColor = "darkorange"
        bay3line32.style.backgroundColor = "darkorange"
        bay3iso1.style.borderColor = "darkorange"
        bay3iso2.style.borderColor = "darkorange"
        bay3line1.style.backgroundColor = "darkorange"
        bay3line11.style.backgroundColor = "darkorange"
        bay3line22.style.backgroundColor = "darkorange"
        bay3line2.style.backgroundColor = "darkorange"

        bay4line31.style.backgroundColor = "darkorange"
        bay4line32.style.backgroundColor = "darkorange"
        bay4iso1.style.borderColor = "darkorange"
        bay4iso2.style.borderColor = "darkorange"

        bay2iso1.style.borderColor = "darkorange"
        bay2iso2.style.borderColor = "darkorange"
        bay2line32.style.backgroundColor = "darkorange"
        bay2line31.style.backgroundColor = "darkorange"


        if((bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && (bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green")){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if((bay4iso1.style.backgroundColor === "green" || bay4iso2.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === bay2iso1Color || bay2iso2.style.backgroundColor === bay2iso2Color)){
            bay4line21.style.backgroundColor =  "darkorange";
            bay4line22.style.backgroundColor =  "darkorange";
            bay4line2.style.backgroundColor =  "darkorange";
            bay4line11.style.backgroundColor =  "darkorange";
        }

        else if( (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green") && ( bay4iso1.style.backgroundColor === bay4iso1Color || bay4iso2.style.backgroundColor === bay4iso2Color)){
            bay2line21.style.backgroundColor =  "darkorange";
            bay2line22.style.backgroundColor =  "darkorange";
            bay2line2.style.backgroundColor =  "darkorange";
            bay2line11.style.backgroundColor =  "darkorange";

        }




      
    }


    // for only discharging the bus1 by CB5 and at the same time bus2 is charge by incomer-1

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && bus1.style.backgroundColor === "darkorange" && bus2.style.backgroundColor === "red"){
        
        btn2.style.backgroundColor =btn2Color
        supply2.classList.remove("active2")

        termination2.classList.remove("active4");
        CB5.style.borderColor = CB5BorderColor
        bay5line1.style.backgroundColor = bay5line1Color
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border


        if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === bay2iso1Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay4iso1.style.backgroundColor === bay4iso1Color && bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
        else if(bay4iso1.style.backgroundColor === "green" && bay2iso1.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
        }
    }

 // for only discharging the bus2 by CB5 and at the same time bus1 is charge by incomer-1

 else if(CB5.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bus1.style.backgroundColor === "red" && bus2.style.backgroundColor === "darkorange" ){

          
    btn2.style.backgroundColor =btn2Color
    supply2.classList.remove("active2")
    termination2.classList.remove("active4");
    bay5line1.style.backgroundColor = bay5line1Color
    CB5.style.borderColor = CB5BackColor
    bay5line11.style.backgroundColor = bay5line11Color
    bay5line2.style.backgroundColor = bay5line2Color
    bay5line21.style.backgroundColor = bay5line21Color
    bay5line22.style.backgroundColor = bay5line22Color
    bay5iso1.style.borderColor = bay5iso1Border
    bay5iso2.style.borderColor = bay5iso2Border
    bay5line31.style.backgroundColor = bay5line31Color
    bay5line32.style.backgroundColor = bay5line31Color
    bus2.style.backgroundColor = bus2Color
    bay3line32.style.backgroundColor = bay3line32Color
    bay3iso2.style.borderColor = bay3iso2BorderColor
    bay3line2.style.backgroundColor = bay3line2Color
    bay3line22.style.backgroundColor = bay3line22Color
    bay2line32.style.backgroundColor = bay2line32Color
    bay2iso2.style.borderColor = bay2iso2Border
    bay4line32.style.backgroundColor = bay4line32Color
    bay4iso2.style.borderColor = bay4iso2Border

    if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === bay2iso2Color){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    }
    else if(bay4iso2.style.backgroundColor === bay4iso2Color && bay2iso2.style.backgroundColor === "green"){
        bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
    }
    else if(bay4iso2.style.backgroundColor === "green" && bay2iso2.style.backgroundColor === "green"){
        bay4line21.style.backgroundColor = bay4line21Color
        bay4line22.style.backgroundColor = bay4line22Color
        bay4line2.style.backgroundColor = bay4line2Color
        bay4line11.style.backgroundColor = bay4line11Color

        bay2line21.style.backgroundColor = bay2line21Color
        bay2line22.style.backgroundColor = bay2line22Color
        bay2line2.style.backgroundColor = bay2line2Color
        bay2line11.style.backgroundColor = bay2line11Color
    }

}   

    // discharging bay5iso1 when the CB3 is open 

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === CB3BackColor ){
     
        btn2.style.backgroundColor =btn2Color
        supply2.classList.remove("active2")
        termination2.classList.remove("active4");
        bay5line1.style.backgroundColor = bay5line1Color
        CB5.style.borderColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bay5line32.style.backgroundColor = bay5line32Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border
       

         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }

    // discharging bay5iso1 when the CB3 is close


    else if(CB5.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === bay5iso2Color && CB3.style.backgroundColor === "green"){
        termination2.classList.remove("active4");   
        btn2.style.backgroundColor =btn2Color
        supply2.classList.remove("active2")
        bay5line1.style.backgroundColor = bay5line1Color
        CB5.style.borderColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        bay5line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border


         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }

    // discharging bay5iso2 , Cb3 is open

    else if(CB5.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso1Color && CB3.style.backgroundColor === CB3BackColor ){
              
        btn2.style.backgroundColor =btn2Color
        supply2.classList.remove("active2")
        termination2.classList.remove("active4"); 
        bay5line1.style.backgroundColor = bay5line1Color
        CB5.style.borderColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bay5line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border
      
       

         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }

    
    // discharging bay5iso2 , Cb3 is close

    
    else if(CB5.style.backgroundColor === "darkorange" && bay5iso2.style.backgroundColor === "darkorange" && bay5iso1.style.backgroundColor === bay5iso1Color && CB3.style.backgroundColor === "green"){
              
        btn2.style.backgroundColor =btn2Color
        supply2.classList.remove("active2")
        termination2.classList.remove("active4");
        bay5line1.style.backgroundColor = bay5line1Color
        CB5.style.borderColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        bay5line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border


         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
    }

    // discharging both bay5iso1 & bay5iso2

    else if(CB5.style.backgroundColor === "darkorange" &&  bay5iso1.style.backgroundColor === "darkorange" &&  bay5iso2.style.backgroundColor === "darkorange" ){
        
        termination2.classList.remove("active4");      
        btn2.style.backgroundColor =btn2Color
        supply2.classList.remove("active2")
        bay5line1.style.backgroundColor = bay5line1Color
        CB5.style.borderColor = CB5BackColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
        bay5line31.style.backgroundColor = bay5line31Color
        bus1.style.backgroundColor = bus1Color
        bay3line31.style.backgroundColor = bay3line31Color
        bay3iso1.style.borderColor = bay3iso1BorderColor
        bay3line1.style.backgroundColor = bay3line1Color
        bay3line11.style.backgroundColor = bay3line11Color
        bay2line31.style.backgroundColor = bay2line31Color
        bay2iso1.style.borderColor = bay2iso1Border
        bay4line31.style.backgroundColor = bay4line31Color
        bay4iso1.style.borderColor = bay4iso1Border

        bay5line32.style.backgroundColor = bay5line32Color
        bus2.style.backgroundColor = bus2Color
        bay3line32.style.backgroundColor = bay3line32Color
        bay3iso2.style.borderColor = bay3iso2BorderColor
        bay3line2.style.backgroundColor = bay3line2Color
        bay3line22.style.backgroundColor = bay3line22Color
        bay2line32.style.backgroundColor = bay2line32Color
        bay2iso2.style.borderColor = bay2iso2Border
        bay4line32.style.backgroundColor = bay4line32Color
        bay4iso2.style.borderColor = bay4iso2Border


         if( (bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green") && (bay2iso1.style.backgroundColor === "green" || bay2iso2.style.backgroundColor === "green")){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
    
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
            }
        
        else if(bay4iso2.style.backgroundColor === "green" || bay4iso1.style.backgroundColor === "green"){
            bay4line21.style.backgroundColor = bay4line21Color
            bay4line22.style.backgroundColor = bay4line22Color
            bay4line2.style.backgroundColor = bay4line2Color
            bay4line11.style.backgroundColor = bay4line11Color
        }
        else if(bay2iso2.style.backgroundColor === "green" || bay2iso1.style.backgroundColor === "green"){
            bay2line21.style.backgroundColor = bay2line21Color
            bay2line22.style.backgroundColor = bay2line22Color
            bay2line2.style.backgroundColor = bay2line2Color
            bay2line11.style.backgroundColor = bay2line11Color
         }
     
    }

    else{
        termination2.classList.remove("active4");      
        btn2.style.backgroundColor =btn2Color
        supply2.classList.remove("active2")
        bay5line1.style.backgroundColor = bay5line1Color
        CB5.style.borderColor = CB5BorderColor
        bay5line11.style.backgroundColor = bay5line11Color
        bay5line2.style.backgroundColor = bay5line2Color
        bay5line21.style.backgroundColor = bay5line21Color
        bay5line22.style.backgroundColor = bay5line22Color
        bay5iso1.style.borderColor = bay5iso1Border
        bay5iso2.style.borderColor = bay5iso2Border
    }
    // // discharging the bay5iso1 & bay5iso2 when the CB3 is open 

   

})

