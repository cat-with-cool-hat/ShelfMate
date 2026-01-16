const htmlTemplate = /*html*/`
<div v-for="g in genre" :key="g">
  <p class="genre">{{ g }}</p>
</div>
`

export default {
  template: htmlTemplate,
  props: {
    genre: {
      type: Array,
      default: () => ["Unknown"]
    }
  }
};