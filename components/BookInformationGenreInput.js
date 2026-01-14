const htmlTemplate = /*html*/`
<label for="genre">Genre:</label>
  <select name="genre" id="genre" multiple v-model:="proxy" style="genre-select">
    <option value="fantasy" style="genre-select-option">Fantasy</option>
    <option value="thriller">Thriller</option>
    <option value="horror">Horror</option>
    <option value="romance">Romance</option>
    <option value="sciencefiction">Science Fiction</option>
    <option value="nonfiction">Non-Fiction</option>
  </select>
`

export default {
  template: htmlTemplate,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  computed: {
    proxy: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      }
    }
  }
};