const shortenText = text => {
    return text.split(" ").slice(0, 2).join(" ");
}

export { shortenText };