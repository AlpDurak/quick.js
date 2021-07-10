//------------------------------
//CHECK OUT https://www.npmjs.com/package/anime-images-api FOR THIS AMAZING PACAKGE!
//------------------------------

const AnimeImages = require('anime-images-api');
const API = new AnimeImages()
class Images {
    //------------------------------
    //HUG
    //------------------------------
    async hug() {
        
            let { image } = await API.sfw.hug();
            return image
        
    }
    //------------------------------
    //KISS
    //------------------------------
    async kiss() {
        
            let { image } = await API.sfw.kiss();
            return image;
        
    }
    //------------------------------
    //SLAP
    //------------------------------
    async slap() {
       
            let { image } = await API.sfw.slap();
            return image;
        
    }
    //------------------------------
    //PUNCH
    //------------------------------
    async punch() {
       
            let { image } = await API.sfw.punch();
            return image;
        
    }
    //------------------------------
    //WINK
    //------------------------------
    async wink() {
        
            let { image } = await API.sfw.wink();
            return image;
        
    }
    //------------------------------
    //PAT
    //------------------------------
    async pat() {
        
            let { image } = await API.sfw.pat();
            return image;
        
    }
    //------------------------------
    //KILL
    //------------------------------
    async kill() {
        
            let { image } = await API.sfw.kill();
            return image;
        
    }
    //------------------------------
    //CUDDLE
    //------------------------------
    async cuddle() {
        
            let { image } = await API.sfw.cuddle();
            return image;
        
    }
    //------------------------------
    //WAIFU
    //------------------------------
    async wafiu() {
       
            let { image } = await API.sfw.wafiu();
            return image;
        
    }
}
module.exports = Images;