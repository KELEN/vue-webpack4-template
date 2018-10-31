import axios from '../util/axios'
export default {
    /**
     * 房源分享二维码
     * @param houseId
     * @param userId
     */
    getHouseShareQrcode(houseId, userId) {
        return axios.post(`/pub/homePage/getHousesShareQRCode?housesId=${ houseId }&userId=${ userId }`);
    },
    /**
     * 租赁分享二维码
     * @param houseId
     * @param userId
     */
    getRentingShareQrcode(houseId, userId) {
        return axios.post(`/pub/homePage/getLookForHousesShareQRCode?id=${ houseId }&userId=${ userId }`);
    },
    /**
     * 获取室友分享二维码
     * @param houseId
     * @param userId
     */
    getRoommateShareQrcode(houseId, userId) {
        return axios.post(`/pub/homePage/getLookForRoommateShareQRCode?id=${ houseId }&userId=${ userId }`);
    },
    /**
     * 获取帮推详情
     * @param hpoId
     */
    getPropagandaDetail(hpoId) {
        return axios.post(`/pub/propaganda/getPropagandaDetail?hpoId=${ hpoId }`);
    }
}