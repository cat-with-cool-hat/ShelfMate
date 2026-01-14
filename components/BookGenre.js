const htmlTemplate = /*html*/`
<div class="dropdown-and-genre" v-for="g in genre" :key="g">
  <p style="margin-bottom: 0px;padding: 8px;">{{ g }}</p>
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