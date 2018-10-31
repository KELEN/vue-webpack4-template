import imagesLoaded from 'imagesLoaded'
import html2canvas from 'html2canvas'

export default {
    beforeDestroy() {
        this.$eventBus.$emit('switchLoading', false);
        this.div && document.body.removeChild(this.div);
    },
    methods: {
        startGenerateQrcode() {
            let self = this, shareContainer = this.$refs.shareContainer;
            self.$eventBus.$emit('switchLoading', false);
            // imagesLoaded(shareContainer, function (instance) {
            //     html2canvas(shareContainer, {
            //         useCORS: true,
            //         logging: true,
            //         removeContainer: false
            //     }).then(canvas => {
            //         let img = new Image();
            //         img.className = 'share-img';
            //         img.src = canvas.toDataURL("image/png");
            //         self.genrateShareImageLayout(img);
            //         shareContainer.style.display = 'none';
            //         self.$eventBus.$emit('switchLoading', false);
            //     })
            // });
        },
        // 生成分享页面布局
        genrateShareImageLayout(img) {
            let div = this.div = document.createElement('div');
            div.className = 'share-fixed-layout';
            div.appendChild(img);
            /*let a = document.createElement('a');
            a.className = 'share-img-download-btn';
            div.appendChild(a);
            a.href = img.src;
            a.download = 'download'*/
            document.body.appendChild(div);
        }
    }
}