'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';

type TicketDate = "Nov. 13" | "Nov. 20" | "Nov. 27" | "Dec. 5" | "Dec. 12" | "Dec. 19" | "Jan. 5" | "Jan. 20" | null;

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<TicketDate>(null);
  const [generalAdmissionQty, setGeneralAdmissionQty] = useState(1);
  const [premiumQty, setPremiumQty] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const ticketOptions = {
    "Nov. 13": [
      { date: '13', type: "General admission", price: 12, location: 'Clyde Park', day: 'Wed', time: '7:00 PM', city_state: 'Frisco, TX', album: 'Live Feels - The Road Trip' },
    ],
    "Nov. 20": [
      { date: '20', type: "General admission", price: 10, location: 'Clyde Park', day: 'Wed', time: '7:00 PM', city_state: 'Frisco, TX', album: 'Special Encore Performance' },
      { type: "VIP", price: 25 },
    ],
    "Nov. 27": [
      { date: '27', type: "General admission", price: 15, location: 'Rock Valley Arena', day: 'Wed', time: '7:00 PM', city_state: 'Plano, TX', album: 'Rocking the Road' },
      { type: "VIP", price: 40 },
    ],
    "Dec. 5": [
      { date: '5', type: "General admission", price: 15, location: 'Venue X', day: 'Wed', time: '7:00 PM', city_state: 'Dallas, TX', album: 'Winter Warm-Up' },
      { type: "VIP", price: 40 },
    ],
    "Dec. 12": [
      { date: '12', type: "General admission", price: 12, location: 'Arena Y', day: 'Wed', time: '7:00 PM', city_state: 'Arlington, TX', album: 'Season Finale' },
      { type: "Premium", price: 30 },
    ],
    "Dec. 19": [
      { date: '19', type: "General admission", price: 12, location: 'Downtown Stage', day: 'Wed', time: '7:00 PM', city_state: 'Fort Worth, TX', album: 'Final Countdown Tour' },
      { type: "Premium", price: 30 },
    ],
    "Jan. 5": [
      { date: '5', type: "General admission", price: 12, location: 'Music Hall Z', day: 'Wed', time: '7:00 PM', city_state: 'Austin, TX', album: 'New Year Bash' },
      { type: "Premium", price: 30 },
    ],
    "Jan. 20": [
      { date: '20', type: "General admission", price: 12, location: 'Venue Y', day: 'Wed', time: '7:00 PM', city_state: 'Houston, TX', album: 'Winter Tour End' },
      { type: "Premium", price: 30 },
    ],
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const confirmOrder = () => {
    setIsModalOpen(false);
    router.push('/buyNow');
  };

  return (
    <div className="min-h flex justify-center items-center">
      <div className="grid grid-cols-5 gap-8 w-full m-4">
        
        {/* Main Content */}
        <div className="bg-white shadow-2xl p-4 col-span-3 rounded-md w-full">
          <h2 className="text-lg font-semibold mb-4">Concerts in United States</h2>
          <div className="w-full bg-red-50">
            <div className="collapse collapse-arrow bg-white rounded-none border-b">
              <input type="checkbox" />
              <div className="collapse-title font-medium">NOV</div>
              <div className="collapse-content font-light">
                {(["Nov. 13", "Nov. 20", "Nov. 27"] as TicketDate[]).map(date => (
                  <div
                    key={date}
                    className={`p-2 cursor-pointer ${selectedDate === date ? "bg-blue-200 font-bold" : ""}`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {date && <p className="pl-8 text-gray-500 text-xs">{ticketOptions[date][0].city_state}</p>}
                    {date && ticketOptions[date][0].date} &nbsp; {date && ticketOptions[date][0].album}
                    {date && <p className="font-medium pl-8 text-sm text-gray-500">{ticketOptions[date][0].time} - {ticketOptions[date][0].location}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white rounded-none border-b">
              <input type="checkbox" />
              <div className="collapse-title font-medium">DEC</div>
              <div className="collapse-content font-light">
                {(["Dec. 5", "Dec. 12", "Dec. 19"] as TicketDate[]).map(date => (
                  <div
                    key={date}
                    className={`p-2 cursor-pointer ${selectedDate === date ? "bg-blue-200 font-bold" : ""}`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <p className="pl-8 text-gray-500 text-xs">{date && ticketOptions[date][0].city_state}</p>
                    {date && ticketOptions[date][0].date} &nbsp; {date && ticketOptions[date][0].album}
                    <p className="font-medium pl-8 text-sm text-gray-500">{date && ticketOptions[date][0].time} - {date && ticketOptions[date][0].location}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white rounded-none border-b">
              <input type="checkbox" />
              <div className="collapse-title font-medium">JAN</div>
              <div className="collapse-content font-light">
                {(["Jan. 5", "Jan. 20"] as TicketDate[]).map(date => (
                  <div
                    key={date}
                    className={`p-2 cursor-pointer ${selectedDate === date ? "bg-blue-200 font-bold" : ""}`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <p className="pl-8 text-gray-500 text-xs">{date && ticketOptions[date][0].city_state}</p>
                    {date && ticketOptions[date][0].date} &nbsp; {date && ticketOptions[date][0].album}
                    <p className="font-medium pl-8 text-sm text-gray-500">{date && ticketOptions[date][0].time} - {date && ticketOptions[date][0].location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-gray-500">More to come!</p>
        </div>

        <div className="bg-white shadow-2xl p-4 rounded-md col-span-2 w-full">
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
              <button onClick={handleCheckout} className="btn btn-primary mt-4 w-full">
                Checkout
              </button>
            </div>
          )}
          {!selectedDate && <p className="text-center mt-4">Please select a date to view tickets.</p>}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4 flex justify-center">Order Confirmation</h2>
            {/* <p className="mb-4">You have selected:</p>
            <ul className="list-disc list-inside mb-4">
              <li>{generalAdmissionQty} General Admission ticket(s) for {selectedDate}</li>
              <li>{premiumQty} Premium ticket(s) for {selectedDate}</li>
            </ul> */}
            <table className="table w-full">
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Quant.</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedDate && ticketOptions[selectedDate].map((ticket, index) => (
                    <tr key={index}>
                      <td>{ticket.type}</td>
                      <td>
                        {ticket.type === "General admission" ? generalAdmissionQty : premiumQty}
                      </td>
                      <td className="font-bold">${ticket.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                onClick={confirmOrder}
                className="btn btn-primary"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
