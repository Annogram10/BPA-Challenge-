'use client'
import { useState } from "react";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<keyof typeof ticketOptions | null>(null); // Holds selected date information
  const [generalAdmissionQty, setGeneralAdmissionQty] = useState(1);
  const [premiumQty, setPremiumQty] = useState(1);

  // Define ticket options based on date
const ticketOptions = {
    "Nov. 13": [
        { date: '13', type: "General admission", price: 12, location: 'Clyde Park', day: 'Wed', time: '7:00 PM', generalAdmission: 12, premium: 30 },
    ],
    "Nov. 20": [
        { date: '20', type: "General admission", price: 10, day: 'Wed', time: '7:00 PM' },
        { type: "VIP", price: 25 },
    ],
    "Nov. 27": [
        { date: '27', type: "General admission", price: 15, day: 'Wed', time: '7:00 PM' },
        { type: "VIP", price: 40 },
    ],
    "Dec. 5": [
        { date: '5', type: "General admission", price: 15, day: 'Wed', time: '7:00 PM' },
        { type: "VIP", price: 40 },
    ],
    "Dec. 12": [
        { date: '12', type: "General admission", price: 12, day: 'Wed', time: '7:00 PM' },
        { type: "Premium", price: 30 },
    ],
    "Dec. 19": [
        { date: '19', type: "General admission", price: 12, day: 'Wed', time: '7:00 PM' },
        { type: "Premium", price: 30 },
    ],
    "Jan. 5": [
        { date: '5', type: "General admission", price: 12, day: 'Wed', time: '7:00 PM' },
        { type: "Premium", price: 30 },
    ],
    "Jan. 20": [
      { date: '20', type: "General admission", price: 12, day: 'Wed', time: '7:00 PM' },
      { type: "Premium", price: 30 },
    ],
  };

  const addToCart = () => {
    alert(
      `Added to cart: ${generalAdmissionQty} General Admission and ${premiumQty} Premium tickets for ${selectedDate}`
    );
  };

  return (
    <div className="min-h flex justify-center items-center ">
      <div className="grid grid-cols-5 gap-8 w-full m-4">
        {/* Tour Dates Section */}
        <div className="bg-white shadow-2xl p-4 col-span-3 rounded-md w-full">
          <h2 className="text-lg font-semibold mb-4">Concerts in United States</h2>
          <div className="w-full bg-red-50">
            <div className="collapse collapse-arrow bg-white rounded-none border-b">
              <input type="checkbox" />
              <div className="collapse-title font-medium">NOV</div>
              <div className="collapse-content font-light">
                <div
                  className={`p-2 cursor-pointer  ${selectedDate === "Nov. 13" ? "bg-blue-200 font-bold" : ""}`}
                  onClick={() => setSelectedDate("Nov. 13")}
                >
                  13 &nbsp; Clyde Park
                  <p className="font-medium pl-8 text-sm text-gray-500">{ticketOptions["Nov. 13"][0].time} - {ticketOptions["Nov. 13"][0].location}</p>
                </div>
                <p
                  className={`p-2 cursor-pointer ${selectedDate === "Nov. 20" ? "bg-blue-200 font-bold" : ""}`}
                  onClick={() => setSelectedDate("Nov. 20")}    
                >
                  20 &nbsp; Clyde Park
                </p>
              </div>
              
            </div>
            <div className="collapse collapse-arrow bg-white rounded-none border-b">
              <input type="checkbox" />
              <div className="collapse-title font-medium">DEC</div>
              <div className="collapse-content">
                <p
                  className={`p-2 cursor-pointer ${selectedDate === "Dec. 5" ? "bg-blue-200 font-bold" : ""}`}
                  onClick={() => setSelectedDate("Dec. 5")}
                >
                  5th &nbsp; Venue X
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white rounded-none border-b">
              <input type="checkbox" />
              <div className="collapse-title font-medium">JAN</div>
              <div className="collapse-content">
                <p
                  className={`p-2 cursor-pointer ${selectedDate === "Jan. 20" ? "bg-blue-200 font-bold" : ""}`}
                  onClick={() => setSelectedDate("Jan. 20")}
                >
                  20th &nbsp; Venue Y
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-gray-500">More to come!</p>
        </div>

        {/* Ticket Selection Section */}
        <div className="bg-gray-200 p-4 rounded-lg w-80">
          <div className="text-lg font-bold mb-4">
            {selectedDate ? `${selectedDate}` : "Select a Date"}
          </div>
          {selectedDate && (
            <div>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Quant.</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render ticket options dynamically based on selected date */}
                  {selectedDate && ticketOptions[selectedDate].map((ticket, index) => (
                    <tr key={index}>
                      <td>{ticket.type}</td>
                      <td>
                        <input
                          type="number"
                          value={ticket.type === "General admission" ? generalAdmissionQty : premiumQty}
                          min="1"
                          onChange={(e) => {
                            ticket.type === "General admission"
                              ? setGeneralAdmissionQty(Number(e.target.value))
                              : setPremiumQty(Number(e.target.value));
                          }}
                          className="input input-bordered w-16"
                        />
                      </td>
                      <td className="font-bold">${ticket.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Add to Cart Button */}
              <button onClick={addToCart} className="btn btn-primary mt-4 w-full">
                Add to cart
              </button>
            </div>
          )}
          {!selectedDate && <p className="text-center mt-4">Please select a date to view tickets.</p>}
        </div>
      </div>
    </div>
  );
}