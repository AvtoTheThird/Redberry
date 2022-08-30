import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Laptop_specs.css";
export function Laptop_specs() {
  const [brand, setBrand] = useState("");
  useEffect(() => {
    axios.get("https://pcfy.redberryinternship.ge/api/brands").then((res) => {
      setBrand(res);
    });
  }, []);
  const [cpu, setCpu] = useState("");
  useEffect(() => {
    axios.get("https://pcfy.redberryinternship.ge/api/cpus").then((res) => {
      setCpu(res);
    });
  }, []);
  // console.log(brand.data.data);
  return (
    <div className="divi">
      <form action="">
        <div className="row-1">
          <label name="name" htmlFor="name">
            ლეპტოპის სახელი
          </label>
          <input
            style={{ width: "455px" }}
            type="text"
            placeholder="HP"
            id="name"
          />
          <lable>ლათინური ასოები, ციფრები</lable>
          <select style={{ width: "455px" }} name="laptop-brand" id="">
            <option>ბრენდი</option>
            {brand.data?.data.map((brand) => (
              <option>{brand.name}</option>
            ))}
          </select>{" "}
        </div>
        <div className="line">a</div>
        <div className="row-2">
          <select name="CPU" id="">
            <option>CPU</option>
            {cpu.data?.data.map((cpu) => (
              <option>{cpu.name}</option>
            ))}
          </select>
          <label htmlFor="">CPU-ს ბირთვები</label>
          <input type="text" placeholder="8" />
          <label htmlFor="">CPU-ს ნაკადი</label>
          <input type="text" placeholder="16" />
        </div>
        <div className="line">a</div>
        <div className="row-3">
          <label htmlFor="">RAM</label>
          <input type="text" placeholder="32" />
          <input type="radio" value="hd" name="ssd" /> ssd
          <input type="radio" value="hd" name="hdd" /> hdd
        </div>
        <div className="line">a</div>

        <div className="row-4">
          <label htmlFor="date">შეძენის რიცხვი(არჩევითი)</label>
          <input type="date" name="" id="date" />
          <label htmlFor="price">ლეპტოპის ფასი</label>
          <input type="text" name="" id="price" />
        </div>
        <div className="line">a</div>
        <div className="row-5">
          {" "}
          <h3>ლეპტოპის მდგომარეობა</h3>
          <input type="radio" value="" name="new" /> ახალი
          <input type="radio" value="" name="used" /> მეორადი
        </div>
        <div className="line">a</div>
        <div className="row-6">
          <button>უკან</button>
          <button>დამახსოვრება</button>
        </div>
      </form>
    </div>
  );
}
