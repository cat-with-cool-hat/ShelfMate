const htmlTemplate = /*html*/`
<div>
<!-- :value setzt den Select auf den Wert des Selects auf den Wert vom Prop -->
  <select name="bookList" id="bookList" class="dropdown-and-genre" name="bookList" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option value="currently">currnetly reading</option>
    <option value="wanting">wanting to read</option>
    <option value="done">done reading</option>
  </select>
</div>
`

export default {
  template: htmlTemplate,
  props: {
    modelValue: {
      type: String,
      default: "wanting"
    }
  }
};