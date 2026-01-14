const htmlTemplate = /*html*/`
<div style="display: flex; justify-content: space-between; margin-bottom: 0.5em;">
<label for="genre">Genre:</label>
  <div class="genre-select-div">
    <select name="genre" id="genre" multiple v-model:="proxy">
      <option value="fantasy">Fantasy</option>
      <option value="thriller">Thriller</option>
      <option value="horror">Horror</option>
      <option value="romance">Romance</option>
      <option value="sciencefiction">Science Fiction</option>
      <option value="nonfiction">Non-Fiction</option>
    </select>
  </div>
</div>
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