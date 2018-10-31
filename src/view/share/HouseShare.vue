 <template>
    <div ref="shareContainer" class="share-container">
        <img class="share-logo" src="../../assets/img/logo.svg"/>
        <div class="share-detail">
            <div class="share-detail__title" v-if="house.hpoFlag == 1">分享领红包</div>
            <div class="share-detail__title" v-else>分享房源</div>
            <div class="share-detail__img" :style="{ backgroundImage: `url(${ shareCover })` }">

            </div>
            <div class="share-intro">
                <div class="clearfix share-intro-row">
                    <div class="share-intro__l">
                        {{ house.title }}
                    </div>
                    <div class="share-intro__r">
                        <span class="share-intro__r__money">
                            {{ house.rentAmount }}
                        </span>
                        <span class="share-intro__r__money-unit">
                            {{ house.currencyName }}/{{ house.periodName }}
                        </span>
                    </div>
                </div>
                <div class="clearfix share-intro-row">
                    <div class="share-intro__house-info">
                        {{ house.typeName }} | {{ house.bedroomCount }}卧 {{ house.bathroomCount }}卫浴 {{
                        house.cityNameInput }}, {{ house.stateNameInput }}
                    </div>
                </div>
            </div>
        </div>
        <div class="share-help" v-if="house.hpoFlag == 1">
            <p>如何获取红包：</p>
            <p>扫描下方二维码并进入易租屋对应房源页面，点击“我要帮推”生成二维码并分享，即可获得由活动发起人设置的红包奖励。前往相应房源页面查看更多信息。</p>
            <p>*具体规则请参考APP内“帮推规则”</p>
        </div>
        <div class="clearfix share-qrcode">
            <div class="fl share-qrcode__img"
                 :style="{ backgroundImage: `url(${ qrcodeUrl })` }">

            </div>
            <div class="fr share-qrcode__txt">
                <p>分享房源二维码</p>
                <p v-if="shareMoney">领取<span class="share-money">{{ shareMoney }}元</span>现金红包</p>
            </div>
        </div>
    </div>
</template>

<script>
    import houseService from '../../service/house'
    import shareService from '../../service/share'
    import shareMixin from '../../mixins/shareMixin'

    export default {
        name: "HouseShare",
        data() {
            return {
                house: {},
                sharing: {},
                qrcodeUrl: '',
                shareCover: '',
                shareMoney: ''
            }
        },
        mixins: [shareMixin],
        mounted() {
            let urlQuery = this.$utils.getQueryObject(), self = this;
            self.$eventBus.$emit('switchLoading', true);
            axios.all([
                houseService.getHouseDetail(urlQuery['houseId']),
                shareService.getHouseShareQrcode(urlQuery['houseId'], urlQuery['userId'])
            ]).then(([sharing, qrcode]) => {
                this.house = sharing;
                if (sharing.hpoFlag == 1) {
                    // 正在帮推
                    shareService.getPropagandaDetail(sharing.hpoId).then(propDetail => {
                        self.shareMoney = propDetail.amount;
                        self.generateQrcode(sharing, qrcode);
                    })
                } else {
                    // 非帮推
                    self.generateQrcode(sharing, qrcode);
                }
            })
        },
        methods: {
            generateQrcode(house, qrcode) {
                if (house.imageList && Array.isArray(house.imageList) && house.imageList.length) {
                    // 取第一张图片
                    this.shareCover = house.imageList[0]['imageUrl'];
                }
                this.qrcodeUrl = qrcode;
                this.startGenerateQrcode();
            }
        }
    }
</script>