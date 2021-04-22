<template>
  <div class="payment">
    <div class="content">
      <div class="step-box">
        <div class="left">
          <span class="img"></span>
          <span class="text">{{$t('payment.orderPayment')}}</span>
        </div>
        <div class="steps">
          <div class="item">
            <div class="number">step 01.</div>
            <div class="text">{{$t('payment.selectProductToBuy')}}</div>
          </div>
          <div class="item">
            <div class="number">step 02.</div>
            <div class="text">{{$t('payment.confirmOrderInformation')}}</div>
          </div>
          <div class="item active">
            <div class="number">step 03.</div>
            <div class="text">{{$t('payment.payToCompleteTheOrder')}}</div>
          </div>
        </div>
      </div>
      <div class="payment-con">
        <div class="pay-box">
          <div class="pay-info">
            <div class="tag success"></div>
            <div class="item">
              <div class="tit">{{$t('payment.orderSubmittedSuccessfully')}}！</div>
              <div class="total-pay">
                {{$t('payment.totalPayable')}}：
                <span class="price">
                  <span v-if="payOrderInfo.totalFee">￥{{payOrderInfo.totalFee}}</span>
                  <span v-if="payOrderInfo.totalFee &&payOrderInfo.totalScore">+</span>
                  <span v-if="payOrderInfo.totalScore">{{payOrderInfo.totalScore}}{{$t('payment.points')}}</span>
                </span>
              </div>
            </div>
            <div class="item">
              <div class="time" v-if="isOverTime && $t('language') == 'zh' ">
                请在
                <span class="warning">{{min}} : {{sec}}</span>内付款，否则交易会被取消。
              </div>
              <div class="time" v-if="isOverTime && $t('language') == 'en'">
                please pay within
                <span class="warning">{{min}} : {{sec}}</span>，otherwise the transaction will be cancelled。
              </div>
              <div class="rest-time" v-if="!isOverTime">{{$t('payment.orderHasExpired')}}</div>
              <div class="order-det" @click="showOrderInfo = !showOrderInfo">{{$t('payment.orderDetails')}}</div>
            </div>
          </div>
          <div class="order-info" v-if="showOrderInfo">
            <div class="text">
              <div class="label" :style="this.$store.state.locale =='en'?'width: 140px':'width: 70px'">{{$t('payment.receiptInformation')}}：</div>
              <div class="con">{{payOrderInfo.receiver}} {{payOrderInfo.mobile}}</div>
              <div class="con">{{payOrderInfo.userAddr}}</div>
            </div>
            <div class="text">
              <div class="label" :style="this.$store.state.locale =='en'?'width: 140px':'width: 70px'">{{$t('payment.productName')}}：</div>
              <div class="con con-items">
                <div class="item" v-for="item in payOrderInfo.prodNameList" :key="item">{{item}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-payment">
          <div class="tit" v-if="payOrderInfo.totalFee>0">{{$t('payment.selectPaymentMethod')}}</div>
          <div class="con" v-if="payOrderInfo.totalFee>0">
            <div
              class="item"
              :class="{active: payType === PayTypeConstant.ALIPAY}"
              @click="payType = PayTypeConstant.ALIPAY"
            >
              <img src="~/assets/images/alpay.png" alt />
              <div v-html="payHtml"></div>
            </div>
            <div
              class="item"
              :class="{active: payType === PayTypeConstant.WECHATPAY_SWEEP_CODE}"
              @click="payType = PayTypeConstant.WECHATPAY_SWEEP_CODE"
            >
              <img src="~/assets/images/weixinpay.png" alt />
            </div>
            <div
              class="item paypal"
              :class="{active: payType === PayTypeConstant.PAYPAL}"
              @click="payType = PayTypeConstant.PAYPAL"
            >
              <img class="paypal-logo" src="~/assets/images/paypal.png" alt />
              <img class="paypal-text" src="~/assets/images/paypal-text.png" alt />
            </div>
            <!-- <div class="item"><img src="~/assets/images/unionpay.png"
            alt=""></div>-->
          </div>
          <a
            href="javascript:void(0)"
            :class="[isCanPay ? '' : 'no-pay', 'btn']"
            @click="toPay"
          >{{$t('payment.payNow')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PayType } from '~/plugins/constant'
export default {
  data () {
    return {
      orderNumber: '',  //订单号
      total: 0,  //订单价
      payHtml: '',  //支付宝页面
      min: '00',  //分
      sec: '00',  //秒
      timer: null,  //倒计时变量
      payOrderInfo: true,  //支付订单详情
      showOrderInfo: false,  //是否显示订单详情
      payType: PayType.ALIPAY,  //支付类型，默认支付宝
      PayTypeConstant: PayType,  //支付类型常量
      isCanPay: true,  //是否能支付
      isOverTime: true,  //能否支付的文字提示
      loading: false, //PayPal支付的加载缓冲弹窗
    }
  },
  mounted () {
    this.orderNumber = sessionStorage.getItem("pay_orderNumber")
    this.total = sessionStorage.getItem("pay_total")
    this.getOrderNumberTohome()
  },
  methods: {

    // 请求支付订单详情
    async getOrderDet (orderNumber) {
        let { data } = await this.$axios.get('/p/order/getOrderPayInfoByOrderNumber', {
          params: {
            orderNumbers: orderNumber
          }
        })
        if(data.status === 2) {
          return true
        }else{
          if(this.payOrderInfo===true){
            this.payOrderInfo = data
            this.countTime()
          }else{
            this.payOrderInfo.prodNameList = this.payOrderInfo.prodNameList.concat(data.prodNameList)
            this.payOrderInfo.totalFee += data.totalFee
            this.countTime()
          }
          return false
        }
    },

    /**
     * 根据支付订单号页面刷新回首页
     */
    async getOrderNumberTohome () {

        let payOrderNumber = sessionStorage.getItem('pay_orderNumber').split(',')
        let newArray = []
        for(var i = 0; i < payOrderNumber.length; i++){
            // 判断是否已支付
             let a = await this.getOrderDet (payOrderNumber[i])
             if(a == true){
                newArray.push(true)
             }else{
                newArray.push(false)
             }
        }

        // 判断每项是否已支付
        let flag = newArray.every(item=>{
          return item === true
        })

        // 判断每项都支付就跳转首页
        if (flag) {
          this.$router.push({ path: '/' })
        }

    },

    // 倒计时
    countTime (hu) {
      // 获取当前时间
      let date = new Date()
      let now = date.getTime()

      // // 设置截止时间（）
      let end = new Date(this.payOrderInfo.endTime).getTime()

      // 时间差
      let leftTime = end - now

      // 定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        // 分
        let m = Math.floor(leftTime / 1000 / 60 % 60)
        this.min = m < 10 ? '0' + m : m
        // 秒
        let s = Math.floor(leftTime / 1000 % 60)
        this.sec = s < 10 ? '0' + s : s
      } else {
        this.min = '00'
        this.sec = '00'
        this.isOverTime = false
        this.isCanPay = false
      }
      // 等于0的时候不调用
      if (Number(this.min) === 0 && Number(this.sec) === 0) {
        return
      } else {
        // 递归每秒调用countTime方法，显示动态时间效果,
        this.timer = setTimeout(this.countTime, 1000)
      }
    },

    //去支付
    toPay () {
      if (this.isCanPay && this.payOrderInfo.totalFee == 0 && this.payOrderInfo.totalScore) {
        // 纯积分
        this.$axios.post('/p/order/pay', {
          payType: PayType.SCOREPAY,
          orderNumbers: this.orderNumber,
        }).then(({ data }) => {
          this.$router.push({ path: '/user-center/uc-order' })
        })
        return
      }
      if (this.isCanPay) {
        var type = this.payType
        if (type == PayType.ALIPAY) {
          this.$axios.post('/p/order/pay', {
            payType: type,
            orderNumbers: this.orderNumber,
            returnUrl: window.location.origin + '/user-center/uc-order'
          }).then(({ data }) => {
            // 支付宝部分
            this.payHtml = data
            this.$nextTick(() => {
              document.forms[0].submit()
            })
          })
        } else if (type == PayType.WECHATPAY_SWEEP_CODE) {
          // 微信部分
          this.$router.push({
            path: '/weixin-pay'
          })
        } else if (type == PayType.PAYPAL) {
          // PayPal部分
          console.log("111")
          this.$axios.post('/p/order/pay', {
            payType: type,
            orderNumbers: this.orderNumber,
            returnUrl: window.location.origin + '/user-center/uc-order'
          }).then(({ data }) => {
            // 支付宝部分
            console.log("2222",data)
            const loading = this.$loading({
              lock: true,
              text: this.$i18n.t('loading'),
              background: 'rgba(255, 255, 255, 0.8)'
            });

            window.location.href = data
            
            // setTimeout(() => {
            //   loading.close();
            // },1000)
          })
        }
      } else {
        return false
      }
    }
  },

  destroyed () {
    if (this.timer) { //如果定时器在运行则关闭
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped src='~/assets/css/payment.css'></style>