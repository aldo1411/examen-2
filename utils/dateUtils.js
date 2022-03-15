const formatDate = date =>{
    const Stringdate = date.split(" ")
    const dateObj = new Date(Stringdate[0], Stringdate[1], Stringdate[2])
    return dateObj
}

module.exports = {
    formatDate
}