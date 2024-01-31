import axios from "axios"

export const api = axios.create({
    baseUrl: "http://localhost:9192"
})

/* This fumction adds new rooms to the database*/
export async function addRoom(photo, roomtype, roomPrice) {
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomtype)
    formData.append("roomPrice", roomPrice)

    const response = await axios.post("http://localhost:9192/rooms/add/new-room", formData)
    if (response.status === 201) {
        return true
    } else {
        return false
    }

}
/*this  function gets all room  types from the database */
export async function getRoomTypes() {
    try {
        const response = await axios.get("http://localhost:9192/rooms/room/types")
        console.log(response)
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}

export async function getAllRooms(){
    try{
        const result = await axios.get("http://localhost:9192/rooms/all-rooms")
        return result.data
    }catch(error){
        throw new Error("Error fetching rooms")

    }
}