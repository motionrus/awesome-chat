function offsetWrapper() {
    const wrapper = document.querySelector(".wrapper")
    const wrapper_scroll = document.querySelector(".wrapper_scroll")

    if (wrapper.clientHeight < wrapper.scrollHeight) {
        wrapper_scroll.style.marginRight = "10px"
        wrapper.style.maxWidth = "595px"
    } else {
        wrapper_scroll.style.marginRight = ""
        wrapper.style.maxWidth = "585px"
    }
}

window.addEventListener("load", () => {
    offsetWrapper()

})


window.addEventListener("resize", () => {
    offsetWrapper()
})