<template>
    <div ref="shareContainer" class="share-container">
        <img class="share-logo" src="../../assets/img/logo.svg"/>
        <div class="share-detail">
            <div class="share-detail__title" v-if="sharing.hpoFlag == 1">分享求租信息，领红包</div>
            <div class="share-detail__title" v-else>分享求租信息</div>
            <div class="share-intro">
                <div class="share-intro__item">
                    <span class="share-intro__item-label">地点</span>
                    <span class="share-intro__item-txt">Sate WA</span>
                </div>
                <div class="share-intro__item">
                    <span class="share-intro__item-label">时间</span>
                    <span class="share-intro__item-txt">{{ sharing.startDate }}</span>
                </div>
                <div class="share-intro__item">
                    <span class="share-intro__item-label">租金</span>
                    <span class="share-intro__item-txt">{{ sharing.rentAmount }} / {{ sharing.periodName }}</span>
                </div>
                <div class="share-intro__item">
                    <span class="share-intro__item-label">要求</span>
                    <span class="share-intro__item-txt">{{ sharing.requirement }}</span>
                </div>
            </div>
        </div>
        <div class="share-help" v-if="sharing.hpoFlag == 1">
            <p>如何获取红包：</p>
            <p>扫描下方二维码并进入易租屋对应求租页面，点击“我要帮推”生成二维码并分享，即可获得由活动发起人设置的红包奖励。前往相应求租页面查看更多信息。</p>
            <p>*具体规则请参考APP内“帮推规则”</p>
        </div>
        <div class="clearfix share-qrcode">
            <div class="fl share-qrcode__img"
                 :style="{ backgroundImage: `url(${ qrcodeUrl })` }">

            </div>
            <div class="fr share-qrcode__txt">
                <p>长按扫描二维码分享房源</p>
                <p v-if="sharing.hpoFlag == 1">领取<span class="share-money">{{ shareMoney }}</span>元现金红包</p>
            </div>
        </div>
    </div>
</template>

<script>
    import houseService from '../../service/house'
    import shareService from '../../service/share'
    import shareMixin from '../../mixins/shareMixin'

    export default {
        name: "RentingShare",
        data() {
            return {
                sharing: {},
                house: {},
                qrcodeUrl: '',
                shareMoney: ''
            }
        },
        mixins: [shareMixin],
        mounted() {
            let urlQuery = this.$utils.getQueryObject(), self = this;
            self.$eventBus.$emit('switchLoading', true);
            axios.all([
                houseService.getRentingShareDetail(urlQuery['houseId'], urlQuery['userId']),
                shareService.getRentingShareQrcode(urlQuery['houseId'], urlQuery['userId'])
            ]).then(([sharing, qrcode]) => {
                self.sharing = sharing;
                self.qrcodeUrl = qrcode;
                if (sharing.hpoFlag == 1) {
                    // 正在帮推
                    shareService.getPropagandaDetail(sharing.hpoId).then(propDetail => {
                        self.shareMoney = propDetail.amount;
                        self.startGenerateQrcode();
                    })
                } else {
                    // 非帮推
                    self.startGenerateQrcode();
                }
            })
        }

    }
</script>

<style scoped>

</style>