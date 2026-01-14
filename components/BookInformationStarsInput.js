const htmlTemplate = /*html*/`
<span v-for="i in modelValue" @click="$emit('update:modelValue', i)" class="star">★</span> <!-- creates as many filled stars as the number of stars -->
<span v-for="i in 5 - modelValue" @click="$emit('update:modelValue', modelValue+i)" class="star">☆</span> <!-- creates the remaining empty stars up to 5 -->

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