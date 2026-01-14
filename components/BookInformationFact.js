const htmlTemplate = /*html*/`
<h6>{{ type }}:</h6>
<p>{{ fact }}</p>
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