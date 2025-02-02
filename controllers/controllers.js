exports.get = (req,res) => {
    res.send("teste controller")
}

exports.post = (req,res) => {
    res.status(201).send(req.body)
}

exports.put = (req,res) => {
    res.send("teste controller")
}
exports.delete = (req,res) => {
    res.send("teste controller")
}
