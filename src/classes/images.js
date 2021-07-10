//------------------------------
//CHECK OUT https://www.npmjs.com/package/anime-images-api FOR THIS AMAZING PACAKGE!
//------------------------------

const AnimeImages = require('anime-images-api');
const API = new AnimeIMages()
class Images {
    //------------------------------
    //HUG
    //------------------------------
    async hug() {
        async function getIMG() {
            let { image } = await API.sfw.hug();
            return image
        }
        getIMG()
    }
    //------------------------------
    //KISS
    //------------------------------
    async kiss() {
        async function getIMG() {
            let { image } = await API.sfw.kiss();
            return image;
        }
        getIMG()
    }
    //------------------------------
    //SLAP
    //------------------------------
    async slap() {
        async function getIMG() {
            let { image } = await API.sfw.slap();
            return image;
        }
        getIMG()
    }
    //------------------------------
    //PUNCH
    //------------------------------
    async punch() {
        async function getIMG() {
            let { image } = await API.sfw.punch();
            return image;
        }
        getIMG()
    }
    //------------------------------
    //WINK
    //------------------------------
    async wink() {
        async function getIMG() {
            let { image } = await API.sfw.wink();
            return image;
        }
        getIMG()
    }
    //------------------------------
    //PAT
    //------------------------------
    async pat() {
        async function getIMG() {
            let { image } = await API.sfw.pat();
            return image;
        }
        getIMG()
    }
    //------------------------------
    //KILL
    //------------------------------
    async kill() {
        async function getIMG() {
            let { image } = await API.sfw.kill();
            return image;
        }
        getIMG()
    }
    //------------------------------
    //CUDDLE
    //------------------------------
    async cuddle() {
        async function getIMG() {
            let { image } = await API.sfw.cuddle();
            return image;
        }
        getIMG()
    }
    //------------------------------
    //WAIFU
    //------------------------------
    async wafiu() {
        async function getIMG() {
            let { image } = await API.sfw.wafiu();
            return image;
        }
        getIMG()
    }
}
module.exports = Images;