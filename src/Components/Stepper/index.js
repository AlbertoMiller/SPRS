import { useSetItemsState } from "../../Providers/Providers";


const Stepper=({itemData})=>{
    const setItemsState = useSetItemsState();
  
  
    const pulseClicked = () => {
      setItemsState(prev=>prev.map(item=>(item.id === itemData.id ? { ...item, count: item.count + 1 } : item)))
    };
    const subtractClicked = () => {
      setItemsState(prev=>prev.map(item=>(item.id === itemData.id ? { ...item, count: item.count - 1 } : item)))
    };
  
    return(<div
            className={
              itemData.image != null
                ? " counterBox noSelect"
                : "counterBox  ReCounterBox"
            }
          >
           {itemData.count>0 && <div
              className="subtractCircle smallSubtractCircle noSelect"
              style={{ cursor: "pointer" }}
              onClick={subtractClicked}
            >
              -
            </div>}
            <div className=" counterNumber noSelect">
              {itemData.count}
            </div>
            {itemData.count<100 && <div
              className="pluseCircle smallPluseCircle noSelect"
              style={{ cursor: "pointer" }}
              onClick={pulseClicked}
            >
              +
            </div>}
          </div>)
  }

  export default Stepper