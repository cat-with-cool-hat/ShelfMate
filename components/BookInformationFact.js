const htmlTemplate = /*html*/`
<h6 tabindex="0">{{ type }}:</h6>
<p tabindex="0">{{ fact }}</p>
`

export default {
    template: htmlTemplate,
    props: {
        fact: {
            type: String,
            default: "-"
        },
        type: {
            type: String,
            default: "Fact"
        }
    }
};