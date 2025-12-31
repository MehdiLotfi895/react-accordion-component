import "./Section.css"
function Section({number,q,answer,id,state,setState}){
    let content=(state[id]=="unClick")?(
        <div className="container">
            <div className="number">{number}</div>
            <div className="q">{q}</div>
            <div id="addSign"> + </div>
        </div>):(
           <div id="container1">
            <div id="container2">
            <div style={{marginLeft: "20px",color:"green"}}>{number}</div>
            <div className="q" style={{color:"green"}}>{q}</div>
            <div id="addSign"> - </div>
            </div>
            <div style={{color:"black",fontWeight:"normal",marginTop:"40px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"80%"}}>{answer}</div>
            </div>
           </div>
        );
    return(
        <div onClick={()=>{
            if(state[id]=="click"){
                state[id]="unClick";
                const arr=[...state]
                setState(arr)
            }
            else{
                state.map((value,index)=>{
                    if(index==id){
                        state[index]="click";
                    }
                    else{
                        state[index]="unClick";
                    }
                })

               const arr=[...state]
               setState(arr) 
            }
            console.log(state)
        }}>
           
           {content}
          </div>
    )
}

export default Section
