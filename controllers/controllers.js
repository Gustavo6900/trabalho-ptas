exports.get = (req,res) => {
    res.json([
        {
            id: 1,
            title: "alguma coisa"
        },
        {
            id: 2,
            title: "alguma coisa 2"
        }
    ])
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
