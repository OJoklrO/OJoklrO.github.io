<template>
    <div class="code-copy" @click="copyToClipboard">copy</div>
</template>

<script>
export default {
    props: {
        parent: Object,
        code: String,
        options: {
            align: String,
            color: String,
            backgroundTransition: Boolean,
            backgroundColor: String,
            successText: String,
            staticIcon: Boolean
        }
    },
    data() {
        return {
            success: false,
            originalBackground: null,
            originalTransition: null
        }
    },
    computed: {
        alignStyle() {
            let style = {}
            style[this.options.align] = '7.5px'
            return style
        },
        iconClass() {
            return this.options.staticIcon ? '' : 'hover'
        }
    },
    mounted() {
        this.originalTransition = this.parent.style.transition
        this.originalBackground = this.parent.style.background
    },
    beforeDestroy() {
        this.parent.style.transition = this.originalTransition
        this.parent.style.background = this.originalBackground
    },
    methods: {
        copyToClipboard(el) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(this.code).then(
                    () => {
                        this.setSuccessTransitions()
                    },
                    () => {}
                )
            } else {
                let copyelement = document.createElement('textarea')
                document.body.appendChild(copyelement)
                copyelement.value = this.code
                copyelement.select()
                document.execCommand('Copy')
                copyelement.remove()
            }
        },
    }
}
</script>