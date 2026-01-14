const htmlTemplate = /*html*/`

<span v-for="i in stars" class="star">★</span> <!-- creates as many filled stars as the number of stars -->
<span v-for="i in 5 - stars" class="star">☆</span> <!-- creates the remaining empty stars up to 5 -->
`

export default {
    template: htmlTemplate,
    props: {
        stars: {
            type: Number,
            default: 0
        }
    }
};