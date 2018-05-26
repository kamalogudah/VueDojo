

Vue.component('coupon', {

  template: `
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      this.$emit('applied');
      Event.$emit('applied');
    }
  }

});


window.Event = new Vue();

new Vue({
  el: '#root',

  data: {
    couponApplied: false
  },

  created() {

    Event.$on('applied', () => alert('Handling it!'));
 },

  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    }
  }
})
