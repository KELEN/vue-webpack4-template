import imagesLoaded from 'imagesLoaded'
import html2canvas from 'html2canvas'

export const shareMixin = {
    methods: {
        startGenerateQrcode() {
            let self = this, shareContainer = this.$refs.shareContainer;
            self.$eventBus.$emit('switchLoading', true);
            imagesLoaded(shareContainer, function (instance) {
                html2canvas(shareContainer, {
                    width: window.innerWidth,
                    windowWidth: window.innerWidth,
                    useCORS: true
                }).then(canvas => {
                    let img = new Image();
                    img.className = 'share-img';
                    img.src = canvas.toDataURL("image/png");
                    self.genrateShareImageLayout(img);
                    shareContainer.style.display = 'none';
                    self.$eventBus.$emit('switchLoading', false);
                })
            });
        },
        // 生成分享页面布局
        genrateShareImageLayout(img) {
            let div = document.createElement('div');
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