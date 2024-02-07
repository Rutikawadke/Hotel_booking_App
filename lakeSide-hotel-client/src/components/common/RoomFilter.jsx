import React, { useState } from "react";

const RoomFilter = ({ data, setFilteredData }) => {
  const [filter, setFilter] = useState("");

  const handleSelectChange = (e) => {
    const selectedType = e.target.value;
    setFilter(selectedType);

    // Check if data is an array before using filter
    if (Array.isArray(data)) {
      const filteredRooms = data.filter((room) =>
        room.roomType.toLowerCase().includes(selectedType.toLowerCase())
      );
      setFilteredData(filteredRooms);
    } else {
      console.error("data is not an array");
      setFilteredData([]);
    }
  };

  const clearFilter = () => {
    setFilter("");

    // Check if data is an array before setting filteredData
    if (Array.isArray(data)) {
      setFilteredData(data);
    } else {
      console.error("data is not an array");
      setFilteredData([]);
    }
  };

  // Check if data is an array before using map
  const roomTypes = Array.isArray(data)
    ? ["", ...new Set(data.map((room) => room.roomType))]
    : [];

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="room-type-filter">
        Filter rooms by type
      </span>
      <select
        className="form-select"
        aria-label="room type filter"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="">Select a room type to filter....</option>
        {roomTypes.map((type, index) => (
          <option key={index} value={String(type)}>
            {String(type)}
          </option>
        ))}
      </select>
      <button className="btn btn-hotel" type="button" onClick={clearFilter}>
        Clear Filter
      </button>
    </div>
  );
};

export default RoomFilter;
