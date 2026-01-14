const htmlTemplate = /*html*/`

<div style="text-align: center; margin-bottom: 2em;">
    <b>Upload a photo:</b><br>
    <img v-if="previewSrc" :src="previewSrc" id="preview" alt="preview of your book cover" width="50%"><br> <!-- v-bind:src oder :src -->
    <img v-if="!previewSrc" src="/img/uploadimage.png" alt="upload book symbol" width="50%"><br>
    <input type="file" id="coverphoto" accept="image/*" name="coverphoto" @change="uploadBookPhoto">
</div>
`

export default {
    template: htmlTemplate,
    props: {
        modelValue: {
            type: String,
            default: null
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            previewSrc: this.modelValue
        };
    },
    methods: {
        uploadBookPhoto(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = e => {
                this.$emit("update:modelValue", e.target.result);
                this.previewSrc = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
};