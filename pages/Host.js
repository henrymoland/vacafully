import { useState } from "react";
import Header from "../components/Header";
import { DatePicker } from "antd";

function Host() {
  const [propertyName, setPropertyName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [price, setPrice] = useState("");
  const [beds, setBeds] = useState("");
  const [bath, setBath] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState(
    "https://i.ibb.co/d7W2HgS/No-Image.jpg"
  );

  return (
    <div>
      <Header />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <div>
          <h1 className="pt-14 font-semibold text-[28px] text-gray-900 text-center">
            Host your listing
          </h1>
        </div>

        <section>
          <form className="mt-8 w-full">
            <div className="flex justify-between">
              {/* LEFT SIDE */}
              <div>
                {/* UPLOAD PHOTO */}
                <div>
                  <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                    Upload a photo of your listing
                  </label>
                  <div className="flex items-center justify-center md:w-[500px] lg:w-[600px]">
                    <label className="flex flex-col w-full md:h-[400px] lg:h-[400px] border-4 rounded border-yellow-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div className="flex flex-col items-center justify-center pt-32">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:w-[90px] md:h-[90px] lg:w-[122px] lg:h-[122px] text-gray-300 group-hover:text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="pt-1 text-lg tracking-wider text-gray-300 group-hover:text-gray-600">
                          Upload a photo
                        </p>
                      </div>
                      <input type="file" className="opacity-0" />
                    </label>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mb-6 mt-6 flex-grow">
                  <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                    Describe your listing
                  </label>
                  <textArea
                    placeholder="Describe your listing"
                    className="bg-white appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-300"
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex-col flex-grow ml-8">
                {/* PROPERTY NAME  */}
                <div className="mb-10">
                  <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                    What is the name of your listing?
                  </label>
                  <input
                    placeholder="Property Name"
                    className="bg-white appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-300"
                    id="title"
                    type="text"
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                  />
                </div>

                {/* ADDRESS */}
                <div className="mb-10">
                  <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                    address
                  </label>
                  <input
                    placeholder="Address"
                    className="bg-white appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-300"
                    id="title"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                {/* LOCATION */}
                <div className="flex">
                  <div className="mb-10 flex-grow">
                    <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                      Location
                    </label>
                    <input
                      placeholder="Address"
                      className="bg-white appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-300"
                      id="title"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="mb-10 ml-2 flex-initial">
                    <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                      zipCode
                    </label>
                    <input
                      placeholder="Zipcode"
                      className="bg-white appearance-none border border-gray-200 rounded w-[100px] py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-300"
                      id="title"
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                </div>

                {/* AVAILABILITY */}

                <div className="flex justify-between mb-10">
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                      Available From
                    </label>
                    <DatePicker
                      placeholder="Select date"
                      className="form-control m-2 border rounded py-2 px-4 text-gray-500 h-10"
                      onChange={(date, dateString) => setFromDate(dateString)}
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                      Available To
                    </label>
                    <DatePicker
                      placeholder="Select date"
                      className="form-control m-2 border rounded py-2 px-4 text-gray-500 h-10"
                      onChange={(date, dateString) => setToDate(dateString)}
                    />
                  </div>
                </div>

                {/* PRICE */}
                <div className="flex">
                  <div className="mb-10 flex-grow">
                    <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                      How much you want to earn?
                    </label>

                    <input
                      placeholder="Price"
                      className="bg-white appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-300"
                      id="title"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>

                {/* BED */}
                <div className="flex">
                  <div className="mb-10">
                    <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                      How many bedrooms?
                    </label>
                    <select
                      placeholder="Beds"
                      className="bg-white appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-300"
                      id="beds"
                      type="number"
                      value={beds}
                      onChange={(e) => setBeds(e.target.value)}
                    >
                      <option>1 bedroom</option>
                      <option>2 bedrooms</option>
                      <option>3 bedrooms</option>
                      <option>4 bedroom</option>
                      <option>5 bedrooms</option>
                      <option>6 bedrooms</option>
                    </select>
                  </div>

                  {/* BATH */}
                  <div className="mb-10 ml-2">
                    <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                      How many baths?
                    </label>
                    <select
                      placeholder="Bath"
                      className="bg-white appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-300"
                      id="bath"
                      type="number"
                      value={bath}
                      onChange={(e) => setBath(e.target.value)}
                    >
                      <option>1 bath</option>
                      <option>2 bath</option>
                      <option>3 bath</option>
                      <option>4 bath</option>
                    </select>
                  </div>

                  {/* # OF GUEST */}
                  <div className="mb-10 ml-2">
                    <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs mb-6">
                      How many guests can you host?
                    </label>
                    <select
                      placeholder="Bath"
                      className="bg-white appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-300"
                      id="bath"
                      type="number"
                      value={bath}
                      onChange={(e) => setBath(e.target.value)}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                    </select>
                  </div>
                </div>

                <button className="bg-yellow-500 font-bold text-white py-3 px-8 rounded mt-6 mb-6">
                  {" "}
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Host;
