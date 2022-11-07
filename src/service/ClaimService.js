import axios from "axios";

class ClaimService{

    getAllClaims(){
        
        return axios.get("http://localhost:8080/claim/ClaimManagementSystem/ClaimDetails");
    }

}

export default new ClaimService();