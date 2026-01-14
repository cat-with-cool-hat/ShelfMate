const htmlTemplate = /*html*/`
<div style="display: flex; justify-content: space-between;">
    <label :for="inputId"><b>{{ label }}:</b></label>
    <input type="text" :id="inputId" :name="inputId" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="book-information-input"/>
</div>
`

export default {
    template: htmlTemplate,
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: "Input"
        },
        inputId: {
            type: String,
            default: "Input"
        }
    }
};