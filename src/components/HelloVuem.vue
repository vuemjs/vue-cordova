<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="http://vuem.icu"
          target="_blank"
        >
          Vuem
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuemjs"
          target="_blank"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="http://radio.vvm.space"
          target="_blank"
        >
          Radio
        </a>
      </li>
      <li>
        <a
          href="https://github.com/larafull"
          target="_blank"
        >
          Larafull
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="https://cordova.apache.org/docs/en/8.x/guide/cli/index.html"
          target="_blank"
        >
          Cordova
        </a>
      </li>
      <li>
        <a
          href="http://vuejs.org/"
          target="_blank"
        >
          vue
        </a>
      </li>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloVuem',
  data () {
    return {
      msg: 'Welcome to Your Vue Mobile App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #448b00;
}
</style>
