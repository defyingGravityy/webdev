const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * (Math.random())
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

let text = ["Initializing hacking...", "Reading your file...", "Password file detected...", "sending all passwords to server...", "cleaning up..."]
for (const item of text) {
    addItem(item)
}
