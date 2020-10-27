<!--
 * @Author: vinc
 * @LastEditTime: 2020-10-27 11:10:51
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
              <a href="#HOME" :class="{ active: $route.hash == '#HOME' }"
                >HOME</a
              >
            </li>
            <li>
              <a
                href="#Technology"
                :class="{ active: $route.hash == '#Technology' }"
                >TEHNOLOGY</a
              >
            </li>
            <li>
              <a
                href="#characteristics"
                :class="{ active: $route.hash == '#characteristics' }"
                >CHARACTERISTICS</a
              >
            </li>
            <li>
              <a
                href="#Advantages"
                :class="{ active: $route.hash == '#Advantages' }"
                >ADVANTAGES</a
              >
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
      <div class="home-index" id="HOME">
        <div class="home-index-d" :class="{ active: homeIndexActive }">
          <h1>
            Trusted Cross-Blockchain
            <span>Storage Protocol</span>
          </h1>
          <div>
            More secure and more economical distributed storage protocol based
            on Trusted Computing.
          </div>
        </div>
      </div>
      <pointwave :color="0xe30a17" />
      <div class="arrow" :class="{ active: scrollTop >= 150 }">
        <img src="~/assets/images/arrow_d.svg" />
      </div>
    </div>
    <div class="authmen-video">
      <video controls poster="/video_cover.png">
        <source src="~/assets/js/video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="introduce-authmen" ref="introduce">
      <div class="max-width">
        <div class="public-title" :class="{ 'animate one': showAbout }">
          <span v-for="(item, index) in 'What'.split('')" :key="index + 100">{{
            item
          }}</span
          >&nbsp;
          <span v-for="(item, index) in 'is'.split('')" :key="index + 200">{{
            item
          }}</span
          >&nbsp;
          <span
            v-for="(item, index) in 'Authmen?'.split('')"
            :key="index + 300"
            >{{ item }}</span
          >
        </div>
      </div>
      <p class="max-width">
        <img src="~/assets/images/about.png" />
        <span>
          Authmen is a trusted blockchain storage protocol which is based on the
          distributed idea of blockchain. It mainly solves the problems of data
          storage and data flow. More concretely, it aims to provide distributed
          trust feature of the underlying blockchain technology, high
          availability, openness and transparency, tamper proof, security and
          privacy-preserving kinds of technical characteristics building a
          tamper-proof and a traceability system.
        </span>
      </p>
    </div>
    <div class="main-feature" id="characteristics">
      <h3 class="pcTitle max-width public-title">
        {{ characteristicsObj.title }}
      </h3>
      <h3 class="wapTitle public-title">{{ characteristicsObj.title }}</h3>
      <ul class="characteristics-list max-width">
        <li v-for="(item, index) in characteristicsObj.list" :key="index">
          <span>{{ item.icon }}</span>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
    <div class="main-feature main-solutions" id="Advantages" ref="solutions">
      <!-- :style="{'transform': `translate3d(${solutionsTop < 950 ? (solutionsTop - 700) / 5 : 0}px, 0px, 0px)`}" -->
      <h3 class="pcTitle max-width public-title">{{ solutionsObj.title }}</h3>
      <h3 class="wapTitle public-title">{{ solutionsObj.title }}</h3>
      <ul class="solutions-list max-width">
        <li v-for="(item, index) in solutionsObj.list" :key="index">
          <div
            class="wapPicture"
            :class="{ active: solutionsIndex >= index + 1 }"
          >
            <img :src="item.icon" />
          </div>
          <div class="information">
            <div class="main-title">{{ item.title }}</div>
            <p class="main-describe">{{ item.content }}</p>
          </div>
          <div class="picture" :class="{ active: solutionsIndex == index + 1 }">
            <img :src="item.icon" />
          </div>
        </li>
      </ul>
      <div class="max-width">
        <div class="more-btn" @click.stop="openPdf()">read more</div>
      </div>
    </div>
    <div class="main-feature" id="Technology" ref="mainFeature">
      <!-- :style="{'transform': `translate3d(${mainFeatureTop < 900 ? (mainFeatureTop - 700) / 5 : 0}px, 0px, 0px)`}" -->
      <h3 class="pcTitle max-width public-title">{{ mainObj.title }}</h3>
      <h3 class="wapTitle public-title">{{ mainObj.title }}</h3>
      <div class="trias max-width">
        Partnership:Trias <img src="@/assets/images/Trias_logo_f.png" />
      </div>
      <ul class="main-list max-width">
        <li v-for="(item, index) in mainObj.list" :key="index">
          <div class="icon">
            <img :src="item.icon" />
          </div>
          <div class="information">
            <div class="main-title">{{ item.title }}</div>
            <p class="main-describe">{{ item.content }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="authmen-footer">
      <div class="max-width">
        <div class="footer-logo">
          <img src="~/assets/images/logo_r.png" />
          <p>A trusted blockchain storage protocol</p>
        </div>
        <div class="icons">
          <span
            v-for="(item, index) in footerIcons"
            @click.stop="changeLink(item)"
            :key="index"
          >
            <img :src="item.icon" />
          </span>
        </div>
        <div class="copyright">
          Copyright © 2020, All Right Reserved. Authmen Web.
        </div>
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
  async asyncData({ $axios }) {
    return {};
  },
  components: { Pointwave },
  computed: {},
  data() {
    return {
      title: "Authmen",
      showAbout: false,
      homeIndexActive: false,
      hotList: [],
      isShow: false,
      kind: 0,
      scrollTop: 0,
      mainFeatureTop: 0,
      solutionsTop: 0,
      solutionsHeight: 0,
      mainObj: {
        title: "Technology Framework",
        list: [
          {
            icon: require("~/assets/images/icons/icon1.png"),
            title: "The trusted network",
            content: `The trusted network constructed by Levitom layer of Trias maintains a unique white list for each storage node, which can prevent the loading of abnormal programs and effectively block network security attacks. At the same time, HCGgraph is a trusted computing technology based on heterogeneous TEE. With the help of Gossip protocol, a "trusted acquaintance" network is constructed between consensus nodes using different TEE technologies, and a "conspiracy default" model of global nodes is constructed to locate trusted nodes efficiently, which makes consensus more efficient and cost-effective.`,
          },
          {
            icon: require("~/assets/images/icons/icon2.png"),
            title: "TEE",
            content: `At the same time, the TEE technology of Trias does not rely on a single category of hardware, so it has stronger compatibility. The use of TEE technology can verify and protect the whole life cycle of the computer running environment on the basis of the - 1 layer of the hardware root. At the same time, under the TEE security defense model of Trias, it becomes a new incentive oriented security model, which allows the defender to actively contribute the defense nodes and computing power of TEE, and get the corresponding advantage economic stimulation according to the defense contribution provided in the Trias security network. Through the trusted computing of Trias, multi-party, remote and heterogeneous data storage, sharing and computing can be realized under the premise of maintaining data ownership and privacy.`,
          },
          {
            icon: require("~/assets/images/icons/icon3.png"),
            title: "ZK-snarks",
            content: `In addition, the data of trusted hardware and program based on Trias can ensure that the information or data will not be disclosed in the trusted program, and ZK-snarks are used to ensure the privacy of the data.`,
          },
          {
            icon: require("~/assets/images/icons/icon4.png"),
            title: "Trusted Computing",
            content: `Through trusted computing, Authmen enables different tee protocols to collect the latest status of neighboring nodes, check and record historical information, and propagate the results among other nodes through gossip protocol, and form a reputation network. It repeatedly selects "the most difficult point to lie" as its repeated function contract presentation, forming a robust and efficient running environment, and building a trusted computing based environment Based on the blockchain distributed storage security network.`,
          },
        ],
      },
      solutionsObj: {
        title: "Advantages of Authmen",
        list: [
          {
            icon: require("~/assets/images/imgs/img1.png"),
            title: "Transparency",
            content: "The storage mechanism is open and transparent.",
          },
          {
            icon: require("~/assets/images/imgs/img2.png"),
            title: "Fairness",
            content:
              "The workload and reward calculation of work nodes are protected by TEE, and the nodes need not worry that their workload will not be rewarded, and they can not get extra rewards through cheating.",
          },
          {
            icon: require("~/assets/images/imgs/img3.png"),
            title: "Efficiency",
            content:
              "The proof of storage capacity does not require the challenge of large amount of redundancy, nor does it need to store any meaningless data. Both computing and storage resources can be efficiently utilized.",
          },
          {
            icon: require("~/assets/images/imgs/img4.png"),
            title: "Expansibility",
            content:
              "TEE supports complete computing, and has the potential of continuous development. Authmen ecosystem can achieve more powerful functions to ensure the development of evolution from storage consensus to computing consensus.",
          },
        ],
      },
      solutionsIndex: 0,
      characteristicsObj: {
        title: "Authmen’s characteristics",
        list: [
          {
            icon: "M",
            title: "More Efficient and Secure Storage",
          },
          {
            icon: "R",
            title: "Real Tamper Proof Technology",
          },
          {
            icon: "W",
            title: "Wider Application Scenarios",
          },
          {
            icon: "T",
            title: "Trusted Storage Node",
          },
        ],
      },
      footerIcons: [
        {
          icon: require("~/assets/images/t.png"),
          path: "https://t.me/authmen",
        },
        {
          icon: require("~/assets/images/facebook.png"),
          path: "https://www.facebook.com/AuthmenBlockchain/",
        },
        {
          icon: require("~/assets/images/medium.png"),
          path: "https://medium.com/@authmen",
        },
        {
          icon: require("~/assets/images/twitter.png"),
          path: "https://twitter.com/home",
        },
        {
          icon: require("~/assets/images/github.png"),
          path: "https://github.com/Authmen/authmen-project",
        },
      ],
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  methods: {
    openPdf() {
      window.open(`/authmen.pdf?key=${Math.random()}`);
    },
    _isMobile() {
      return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    },
    changeLink(item) {
      window.open(item.path);
    },
    async handleScroll() {
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

      //关于auth特效
      if (
        850 >
        (this.$refs.introduce &&
          this.$refs.introduce.getBoundingClientRect &&
          this.$refs.introduce.getBoundingClientRect().top)
      ) {
        this.showAbout = true;
      }

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
          this.solutionsIndex = 10;
        } else {
          this.solutionsIndex = 0;
        }
      } else {
        if (this.solutionsTop <= 200) {
          for (let v = 1; v <= this.solutionsObj.list.length; v++) {
            if (Math.abs(this.solutionsTop) + 180 <= this.solutionsHeight * v) {
              this.solutionsIndex = v;
              break;
            }
          }
        } else {
          this.solutionsIndex = 0;
        }
      }
    },
  },
  async mounted() {
    this.$store.commit("SET_TITLE", this.title);
    if (this._isMobile()) {
      this.kind = 1;
      window.addEventListener("scroll", this.handleScroll, true);
    } else {
      window.addEventListener("scroll", this.handleScroll, true);
    }

    setTimeout(() => {
      this.homeIndexActive = true;
    }, 300);
  },
};
</script>

<style lang="less" scoped>
.animate {
  font-size: 50px;
}

.animate span {
  display: inline-block;
}

.trias {
  font-size: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  img {
    height: 60px;
  }
}

a.repeat {
  display: inline-block;
  font-size: 12px;
  text-transform: none;
  text-decoration: none;
  color: orange;
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-weight: normal;
  margin: 0 0 0 50px;
  border-radius: 3px;
  position: relative;
  bottom: 15px;
}

a.repeat:hover {
  background: rgba(0, 0, 0, 0.7);
  color: white;
}

.animate span:nth-of-type(2) {
  animation-delay: 0.05s;
}
.animate span:nth-of-type(3) {
  animation-delay: 0.1s;
}
.animate span:nth-of-type(4) {
  animation-delay: 0.15s;
}
.animate span:nth-of-type(5) {
  animation-delay: 0.2s;
}
.animate span:nth-of-type(6) {
  animation-delay: 0.25s;
}
.animate span:nth-of-type(7) {
  animation-delay: 0.3s;
}
.animate span:nth-of-type(8) {
  animation-delay: 0.35s;
}
.animate span:nth-of-type(9) {
  animation-delay: 0.4s;
}
.animate span:nth-of-type(10) {
  animation-delay: 0.45s;
}
.animate span:nth-of-type(11) {
  animation-delay: 0.5s;
}
.animate span:nth-of-type(12) {
  animation-delay: 0.55s;
}
.animate span:nth-of-type(13) {
  animation-delay: 0.6s;
}
.animate span:nth-of-type(14) {
  animation-delay: 0.65s;
}
.animate span:nth-of-type(15) {
  animation-delay: 0.7s;
}
.animate span:nth-of-type(16) {
  animation-delay: 0.75s;
}
.animate span:nth-of-type(17) {
  animation-delay: 0.8s;
}
.animate span:nth-of-type(18) {
  animation-delay: 0.85s;
}
.animate span:nth-of-type(19) {
  animation-delay: 0.9s;
}
.animate span:nth-of-type(20) {
  animation-delay: 0.95s;
}

.one span {
  // color: #e30a17;
  opacity: 0;
  transform: translate(-150px, -50px) rotate(-180deg) scale(3);
  animation: revolveScale 0.4s forwards;
}

@keyframes revolveScale {
  60% {
    transform: translate(20px, 20px) rotate(30deg) scale(0.3);
  }

  100% {
    transform: translate(0) rotate(0) scale(1);
    opacity: 1;
  }
}

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
  .trias {
    font-size: 22px !important;
    margin-bottom: 30px !important;
    img {
      height: 50px !important;
    }
  }
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
    .home-index-d {
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
  }
  .introduce-authmen {
    padding: 0 15px;
    margin-bottom: 80px !important;
  }
  .authmen-video {
    padding: 30px 15px 80px !important;
    height: auto !important;
    video {
      height: 240px !important;
    }
  }
  .public-title {
    margin-bottom: 30px !important;
    font-size: 26px !important;
    span {
      font-size: 26px !important;
    }
  }
  .main-feature {
    padding: 0 15px !important;
    margin-bottom: 80px !important;
    h3 {
      font-size: 26px !important;
    }
    .pcTitle {
      display: none !important;
    }
    .wapTitle {
      display: block !important;
    }
    .main-list {
      display: flex;
      flex-direction: column;
      li {
        width: 100% !important;
        margin-bottom: 30px !important;
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
            line-height: 24px !important;
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
    .characteristics-list {
      flex-direction: column;
      li {
        width: 100% !important;
        margin: 0 0 30px 0 !important;
        padding: 0 !important;
        span {
          width: 40px !important;
          height: 40px !important;
          margin-right: 20px !important;
          font-size: 20px !important;
        }
        p {
          width: calc(~"100% - 60px");
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
    .home-index-d {
      opacity: 0;
      transition: all 0.8s ease-in-out;
      &.active {
        opacity: 1;
      }
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

  .public-title {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 80px;
    position: relative;
    padding-bottom: 20px;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 32%;
      height: 4px;
      background: #e30a17;
      border-radius: 3px;
    }
    span {
      font-size: 60px;
    }
  }

  .introduce-authmen {
    margin-bottom: 200px;
    p {
      display: flex;
      img {
        height: 26px;
        margin-right: 10px;
      }
      span {
        font-size: 14px;
        line-height: 28px;
        color: #666;
      }
    }
  }
  .main-feature {
    margin-bottom: 150px;
    padding: 0 30px;
    h3 {
      // font-size: calc(~"100vw / 8");
      width: 100%;
      white-space: nowrap;
      margin-bottom: 80px;
    }
    .wapTitle {
      display: none;
    }
    .main-list {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        display: flex;
        margin-bottom: 100px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          opacity: 0.6;
        }
        &:last-child {
          margin-bottom: 0;
        }
        .icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 30px;
          margin-right: 40px;
          img {
            width: 100%;
            height: 100%;
          }
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
            line-height: 28px;
          }
        }
      }
    }
    .solutions-list {
      li {
        height: 60vh;
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
          height: 200px;
        }
      }
    }
    .characteristics-list {
      display: flex;
      flex-wrap: wrap;
      color: #333;
      li {
        width: calc(~"50% - 10px");
        margin-bottom: 30px;
        padding: 20px;
        display: flex;
        align-items: center;
        p {
          font-size: 16px;
        }
        span {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 30px;
          margin-right: 40px;
          border: 1px solid #e30a17;
          color: #e30a17;
        }
        &:nth-child(2n) {
          margin-left: 20px;
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
