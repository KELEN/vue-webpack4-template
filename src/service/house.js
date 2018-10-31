import axios from '../util/axios'

export default {
    /**
     * 获取房租详情
     * @param houseId
     */
    getHouseDetail(houseId) {
        return axios.post(`/pub/homePage/houses-detail?housesId=${ houseId }`)
    },
    /**
     *  获取租赁详情
     * @param houseId
     * @param userId
     */
    getRentingShareDetail(houseId, userId) {
        return axios.post(`/pub/homePage/soliciting-detail?id=${ houseId }&userId=${ userId }`)
    },
    /**
     * 获取室友租赁详情
     * @param id
     */
    getRoommateShareDetail(id) {
        return axios.post(`/pub/homePage/richmod-detail?id=${ id }`);
    }
}