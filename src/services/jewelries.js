import axios from "axios";

const getAllJewelries=async()=>{
    try {
        const res = await axios.get("http://localhost:5095/api/Jewelries");
        return res.data
    } catch (error) {
       throw error
    }
}



export default getAllJewelries