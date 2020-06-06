import http from "../http-common";

class UserDataService {
    getAll() {
        return http.get("/adverts");
    }

    get(id) {
        return http.get(`/adverts/${id}`);
    }

    create(data) {
        return http.post("/adverts", data);
    }

    update(id, data) {
        return http.put(`/adverts/${id}`, data);
    }

    delete(id) {
        return http.delete(`/adverts/${id}`);
    }

    deleteAll() {
        return http.delete(`/adverts`);
    }

    findAdvertsByUserID(userID) {
        return http.get(`/adverts?userID=${userID}`);
    }
}

export default new UserDataService();