const htmlTemplate = /*html*/`
<div style="margin-bottom: 0.5em;">
    <button v-for="i in modelValue" @click.prevent="$emit('update:modelValue', i)" tabindex="0" class="star">★</button> <!-- creates as many filled stars as the number of stars -->
    <button v-for="i in 5 - modelValue" @click.prevent="$emit('update:modelValue', modelValue+i)" tabindex="0" class="star">☆</button> <!-- creates the remaining empty stars up to 5 -->
</div>
`

export default {
    template: htmlTemplate,
    props: {
        modelValue: {
            type: Number,
            default: 0
        }
    }
};