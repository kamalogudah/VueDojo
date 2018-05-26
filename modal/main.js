Vue.component('modal', {

  template: `
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
  <div class="box">
     <p>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
       text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     </p>
  </div>
    </div>
  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
</div>

  `

})

new Vue({
  el: '#root',

  data: {
    showModal: false

  }
}
)