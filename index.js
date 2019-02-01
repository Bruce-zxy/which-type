function whichType (data) {
    return Object.prototype.toString.call(data).slice(1, -1).split(' ').pop();
}

module.exports = whichType;