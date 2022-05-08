import React from "react"
import Navbar from "./Navbar"
export default function Volunteer(){
    return(
        <div>
            <Navbar/>
            <div className="form-container">
                <form action="/volunteer" method = "POST" className="form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Name</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Name"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Food Type</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Veg/Non-Veg"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Quantity</label>
                        <input type="number" class="form-control" id="inputEmail4" placeholder="In Kgs"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Time</label>
                        <input type="date" class="form-control" id="inputPassword4" placeholder="dd/mm/yy"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div class="form-group">
                        <label for="inputCity">Special Note</label>
                        <textarea type="text" class="form-control" id="inputCity"/>
                        </div>
                    <button type="submit" class="btn btn-color">Submit</button>
                </form>
            </div>
        </div>
    )
}