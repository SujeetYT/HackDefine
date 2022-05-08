import React from "react"
import Navbar from "./Navbar"
export default function Volunteer(){
    return(
        <div>
            <Navbar/>
            <div className="form-container">
                <form header="application/json" action="http://localhost:3001/volunteer" method = "POST" className="form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="Name">Name</label>
                        <input type="text" class="form-control" name="Name" placeholder="Name"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="FoodType">Food Type</label>
                        <input type="text" class="form-control" name="FoodType" placeholder="Veg/Non-Veg"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="Quantity">Quantity</label>
                        <input type="number" class="form-control" name="Quantity" placeholder="In Kgs"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="Time">Time</label>
                        <input type="date" class="form-control" name="Time" placeholder="dd/mm/yy"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="Address">Address</label>
                        <input type="text" class="form-control" name="Address" placeholder="1234 Main St"/>
                    </div>
                    <div class="form-group">
                        <label for="Note">Special Note</label>
                        <textarea type="text" class="form-control" name="Note"/>
                        </div>
                    <button type="submit" class="btn btn-color">Submit</button>
                </form>
            </div>
        </div>
    )
}