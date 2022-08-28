import axios from "axios";
import { useState, useEffect } from "react";
export function Co_worker_info() {

  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://pcfy.redberryinternship.ge/api/teams").then((resp) => {
      setData(resp.data);
    });
  }, []);

  const [position, setPosition] = useState("");
  useEffect(() => {
    axios
      .get("https://pcfy.redberryinternship.ge/api/positions")
      .then((resp) => {
        setPosition(resp.data);
      });
  }, []);
  // console.log( position.data[1].team_id);
  const [dropdown, setdropdown] = useState()
  
  if (dropdown === "დეველოპერი") {   
    for (let index = 0; index < 18; index++) {
    if (position.data[index].team_id=1) {
      console.log(position.data[index].name)
      console.log(position.data[index].team_id)
      }
    }
  }

  
  return (
    <div className="co-worker-info">
      <form>
        <div className="saxeli-gvari">
          <label htmlFor="">სახელი</label>
          <input type="text" placeholder="გრიშა" className="name-input" />
          <label htmlFor="">გვარი</label>
          <input type="text" placeholder="ონიანი" className="lastname-input" />
        </div>
        <select className="team-input" value={dropdown} onChange={(e)=>setdropdown(e.target.value)}><option >თიმი</option>
          {data.data?.map((team) => (
            
            <option>
              {team.name} 
            </option>
          ))}
        </select>

        



        <select className="pozicia-input" >
          <option >პოზიცია</option>  {
          
          position.data?.map((pos) => (
         
            <option  key={position.data.id}>
              {pos.name}
            </option>
          ))}</select>
        


        



        <label htmlFor="">მეილი</label>
        <input
          type="text"
          placeholder="ონიანი@რაღაც.ცომ"
          className="mail-input"
        />
        <label htmlFor="">ტელეფონის ნომერი</label>
        <input type="text" placeholder="56822081" className="phone-input" />
      </form>
    </div>
  );
}
