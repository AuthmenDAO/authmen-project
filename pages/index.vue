<!--
 * @Author: vinc
 * @LastEditTime: 2020-10-22 09:47:15
 -->
<template>
  <div class="home-index-wrap">
    <div class="authmen-logo">
      <div class="logo-wrap max-width">
        <div class="logo-l">
          <img src="~/assets/images/logo_r.png" />
        </div>
        <div class="logo-r">
          <ul>
            <li>
              <a href="#HOME"
                 :class="{active: $route.hash == '#HOME'}">HOME</a>
            </li>
            <li>
              <a href="#MAINFEATURES"
                 :class="{active: $route.hash == '#MAINFEATURES'}">MAIN FEATURES</a>
            </li>
            <li>
              <a href="#SOLUTIONS"
                 :class="{active: $route.hash == '#SOLUTIONS'}">SOLUTIONS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="authmen-logo-wap">
      <div class="logo-l">
        <img src="~/assets/images/logo_r.png" />
      </div>
    </div>
    <div class="login-container">
      <div class="home-index"
           id="HOME">
        <h1>
          Trusted Cross-Blockchain
          <span>Storage Protocol</span>
        </h1>
        <div>More secure and more economical distributed storage protocol based on Trusted Computing.</div>
      </div>
      <pointwave :color="0xe30a17" />
      <div class="arrow"
           :class="{active: scrollTop >= 150}">
        <img src="~/assets/images/arrow_d.svg" />
      </div>
    </div>
    <div class="authmen-video">
      <video controls
             poster="/video_cover.png">
        <source src="~/assets/js/video.mp4"
                type="video/mp4" />
      </video>
    </div>
    <div class="main-feature"
         id="MAINFEATURES"
         ref="mainFeature">
      <h3 class="pcTitle"
          :style="{'transform': `translate3d(${mainFeatureTop < 900 ? (mainFeatureTop - 700) / 5 : 0}px, 0px, 0px)`}"
          v-if="!kind">{{mainObj.title}}</h3>
      <h3 class="wapTitle">{{mainObj.title}}</h3>
      <ul class="main-list max-width">
        <li v-for="(item, index) in mainObj.list"
            :key="index">
          <div class="icon">{{item.icon}}</div>
          <div class="information">
            <div class="main-title">{{item.title}}</div>
            <p class="main-describe">{{item.content}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="main-feature main-solutions"
         id="SOLUTIONS"
         ref="solutions">
      <h3 class="pcTitle"
          :style="{'transform': `translate3d(${solutionsTop < 950 ? (solutionsTop - 700) / 5 : 0}px, 0px, 0px)`}">{{solutionsObj.title}}</h3>
      <h3 class="wapTitle">{{solutionsObj.title}}</h3>
      <ul class="solutions-list max-width">
        <li v-for="(item, index) in solutionsObj.list"
            :key="index">
          <div class="wapPicture"
               :class="{active: solutionsIndex >= (index + 1)}">
            <img :src="item.icon" />
          </div>
          <div class="information">
            <div class="main-title">{{item.title}}</div>
            <p class="main-describe">{{item.content}}</p>
          </div>
          <div class="picture"
               :class="{active: solutionsIndex == (index + 1)}">
            <img :src="item.icon" />
          </div>
        </li>
      </ul>
      <div class="max-width">
        <div class="more-btn "
             @click.stop="openPdf()">
          read more
        </div>
      </div>
    </div>
    <div class="authmen-footer">
      <div class="max-width">
        <div class="footer-logo">
          <img src="~/assets/images/logo_r.png" />
          <p>A trusted blockchain storage protocol</p>
        </div>
        <div class="icons">
          <span v-for="(item, index) in footerIcons"
                @click.stop="changeLink(item)"
                :key="index">
            <img :src="item.icon" />
          </span>
        </div>
        <div class="copyright">Copyright © 2020, All Right Reserved. Authmen Web.</div>
      </div>
    </div>
  </div>
</template>
<script>
import Pointwave from "@/components/Pointwave";
import { validUsername } from "@/utils/validate";
import backgroundImg from "@/assets/images/background.png";

export default {
  layout: "home",
  async asyncData ({ $axios }) {
    return {};
  },
  components: { Pointwave },
  computed: {},
  data () {
    return {
      title: "Authmen",
      hotList: [],
      isShow: false,
      kind: 0,
      scrollTop: 0,
      mainFeatureTop: 0,
      solutionsTop: 0,
      solutionsHeight: 0,
      mainObj: {
        title: "Main Features",
        list: [
          {
            icon: "M",
            title: "More Efficient And Secure Storage",
            content:
              "The design is exquisite and has stronger performance. It can realize the fast blockchain storage and traceability scheme corresponding to the key information system, and carry out the storage and transmission based on the blockchain in the process of data sharing."
          },
          {
            icon: "R",
            title: "Real Tamper Proof Technology",
            content:
              "The design is exquisite and has stronger performance. It can realize the fast blockchain storage and traceability scheme corresponding to the key information system, and carry out the storage and transmission based on the blockchain in the process of data sharing."
          },
          {
            icon: "W",
            title: "Wider Application Scenarios",
            content:
              "It can provide efficient and convenient blockchain services for enterprises and institutions, and directly manage data through front-end pages. It can provide users with localized deployment of blockchain system."
          },
          {
            icon: "T",
            title: "Trusted Storage Node",
            content:
              "With the combination of the security technology of Trias trusted basic chain and Byzantine consensus algorithm after blockchain optimization, it innovatively increases the weight consensus proportion factor of reputation system."
          }
        ]
      },
      solutionsObj: {
        title: "The Solutions",
        list: [
          {
            icon: require("~/assets/images/icon1.jpg"),
            title: "Automotive Solutions",
            content:
              "Authmen adopts the three-layer computing power system based on leviatom in Trias architecture, and the combination of TEE trusted computing and zero knowledge proof technology to complete the right confirmation and security protection of distributed storage data."
          },
          {
            icon: require("~/assets/images/icon2.jpg"),
            title: "TEE technology",
            content:
              "The core of Levitom network is a set of Heterogeneous Consensus Graph algorithm (HCGraph) based on trusted technology. HCGraph is a combination of trusted computing technology based on heterogeneous TEE (Trusted Execution Environment) and graph computing technology based on small world network. HCGraph makes use of the transitivity of trust and uses the gossip protocol to realize the trusted relationship between consensus nodes using different TEE technologies."
          }
        ]
      },
      solutionsIndex: 0,
      footerIcons: [
        {
          icon: require("~/assets/images/t.png"),
          path: "https://t.me/authmen"
        },
        {
          icon: require("~/assets/images/facebook.png"),
          path: "https://www.facebook.com/AuthmenBlockchain/"
        },
        {
          icon: require("~/assets/images/medium.png"),
          path: "https://medium.com/@authmen"
        },
        {
          icon: require("~/assets/images/twitter.png"),
          path: "https://twitter.com/home"
        }
      ]
    };
  },
  head () {
    return {
      title: this.title
    };
  },
  methods: {
    openPdf () {
      window.open(`/authmen.pdf?key=${Math.random()}`);
    },
    _isMobile () {
      return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    },
    changeLink (item) {
      window.open(item.path);
    },
    async handleScroll () {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      this.mainFeatureTop =
        this.$refs.mainFeature &&
        this.$refs.mainFeature.getBoundingClientRect &&
        this.$refs.mainFeature.getBoundingClientRect().top;
      this.solutionsTop =
        this.$refs.solutions &&
        this.$refs.solutions.getBoundingClientRect &&
        this.$refs.solutions.getBoundingClientRect().top;

      this.solutionsHeight =
        this.$refs.solutions &&
        parseInt(
          (this.$refs.solutions.offsetHeight -
            document.documentElement.clientWidth / 5.264 -
            50) /
          this.solutionsObj.list.length
        );
      if (this._isMobile()) {
        if (this.solutionsTop <= 500) {
          this.solutionsIndex = 2;
        } else {
          this.solutionsIndex = 0;
        }
      } else {
        if (this.solutionsTop <= 0) {
          for (let v = 1; v <= this.solutionsObj.list.length; v++) {
            if (Math.abs(this.solutionsTop) <= this.solutionsHeight * v) {
              this.solutionsIndex = v;
              break;
            }
          }
        } else {
          this.solutionsIndex = 0;
        }
      }
    }
  },
  async mounted () {
    this.$store.commit("SET_TITLE", this.title);
    if (this._isMobile()) {
      this.kind = 1;
      window.addEventListener("scroll", this.handleScroll, true);
    } else {
      window.addEventListener("scroll", this.handleScroll, true);
    }
  }
};
</script>

<style lang="less" scoped>
.more-btn {
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  position: relative;
  padding: 0.5em 1em;
  background-color: rgba(227, 10, 23, 0.5);
  z-index: 1;
  overflow: hidden;
  width: 260px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #e30a17;
    /* 变化位置的代码 */
    top: 0;
    left: 0;
    transform-origin: center;
    transform: scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
    /* *********** */
  }
  &:hover::before {
    transform: scale3d(30, 15, 15);
  }
}
@media screen and (max-width: 1000px) {
  .more-btn {
    font-size: 16px !important;
    width: 220px !important;
    height: 44px !important;
  }
  .authmen-logo {
    display: none;
  }
  .authmen-logo-wap {
    display: flex !important;
  }

  .home-index {
    h1 {
      font-size: 26px !important;
      span {
        font-size: 26px !important;
      }
    }
    div {
      font-size: 12px !important;
      line-height: 20px !important;
      padding: 0 30px !important;
    }
  }
  .authmen-video {
    padding: 30px 15px 80px !important;
    height: auto !important;
    video {
      height: 240px !important;
    }
  }
  .main-feature {
    padding: 0 15px !important;
    h3 {
      font-size: 40px !important;
    }
    .pcTitle {
      display: none !important;
    }
    .wapTitle {
      display: block !important;
    }
    .main-list {
      li {
        .icon {
          width: 40px !important;
          height: 40px !important;
          margin-right: 20px !important;
          font-size: 20px !important;
        }
        .information {
          width: calc(~"100% - 80px") !important;
          .main-title {
            font-size: 15px !important;
          }
          .main-describe {
            font-size: 12px !important;
          }
        }
      }
    }
    .solutions-list {
      margin-bottom: 50px;
      li {
        height: auto !important;
        display: flex;
        flex-direction: column !important;
        .picture {
          padding: 30px 0;
          display: none;
          img {
            height: 100px !important;
          }
        }
        .wapPicture {
          padding: 30px 0;
          display: block !important;
          img {
            height: 100px !important;
          }
        }
        .information {
          width: 100% !important;
          .main-title {
            font-size: 15px !important;
          }
          .main-describe {
            font-size: 12px !important;
          }
        }
      }
    }
  }
  .authmen-footer {
    padding: 50px 15px 30px !important;
    .copyright {
      font-size: 12px !important;
    }
  }
}

.authmen-logo-wap {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  display: none;
  align-items: center;
  height: 60px;
  justify-content: center;
  .logo-l {
    img {
      height: 25px;
    }
  }
}

.login-container {
  min-height: 100vh;
}
.home-index-wrap {
  max-width: 100vw;
  overflow-x: hidden;
  .authmen-logo {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    .logo-wrap {
      height: 92px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
    }
    .logo-l {
      img {
        height: 30px;
      }
    }
    .logo-r {
      ul {
        display: flex;
        align-items: center;
        li {
          margin-left: 30px;
          font-weight: bold;
          cursor: pointer;
          a {
            text-decoration: none;
            color: rgba(0, 0, 0, 0.6);
            transition: all 0.3s;
          }
          &:first-child {
            margin-left: 0;
          }

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }
  .home-index {
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 99;
    h1 {
      font-size: 80px;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      span {
        font-size: 80px;
      }
    }
    div {
      margin-top: 30px;
      font-size: 22px;
      line-height: 34px;
      color: rgba(0, 0, 0, 0.6);
      text-align: center;
      white-space: pre-wrap;
    }
  }
  .arrow {
    position: absolute;
    width: 100%;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    transition: all 0.3s;
    &.active {
      opacity: 0;
    }
  }
  .authmen-video {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    video {
      border-radius: 10px;
      width: 100%;
      max-width: 800px;
      object-fit: fill;
    }
  }
  .main-feature {
    margin-bottom: 100px;
    padding: 0 30px;
    h3 {
      font-size: calc(~"100vw / 8");
      width: 100%;
      white-space: nowrap;
      margin-bottom: 50px;
    }
    .wapTitle {
      display: none;
    }
    .main-list {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      li {
        display: flex;
        margin-bottom: 100px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
        &:last-child {
          margin-bottom: 0;
        }
        .icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 30px;
          margin-right: 40px;
        }
        .information {
          width: 460px;
          .main-title {
            font-size: 22px;
            margin-bottom: 20px;
            font-weight: bold;
          }
          .main-describe {
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 22px;
          }
        }
      }
    }
    .solutions-list {
      li {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .information {
          width: 600px;
          .main-title {
            font-size: 30px;
            font-weight: bold;
          }
          .main-describe {
            font-size: 18px;
            line-height: 30px;
            color: rgba(0, 0, 0, 0.6);
            margin-top: 30px;
          }
        }
        .wapPicture {
          opacity: 0;
          transition: all 1.2s ease;
          transform: translate3d(0px, 50px, 0px);
          display: none;
          &.active {
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
          }
        }
        .picture {
          opacity: 0;
          transition: all 2s ease;
          transform: translate3d(0px, 120px, 0px);
          &.active {
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
          }
        }
        img {
          height: 260px;
        }
      }
    }
  }
  .authmen-footer {
    padding: 50px 30px 30px;
    border-top: 1px solid #eee;
    .footer-logo {
      img {
        height: 40px;
      }
      p {
        margin: 24px 0 32px 0;
        width: 346px;
        height: 40px;
        font-size: 14px;
        font-family: Lato;
        font-weight: 400;
        line-height: 20px;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #d8d8d8;
      margin-bottom: 15px;
      padding-bottom: 40px;
      span {
        margin-right: 16px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 40px;
          height: 40px;
          display: block;
        }
      }
    }
    .copyright {
      color: #666;
      text-align: center;
    }
  }
}
</style>
