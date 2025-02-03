let musicas = [];
let idCounter = 1;

exports.get = ('/', (req, res) => {
    res.json(musicas);
  });
  

exports.post = ('/add', (req, res) => {
    const { titulo, genero, ano } = req.body;
    if (!titulo || !genero || !ano) {
      return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos' });
    }
    const novaMusica = { id: idCounter++, titulo, genero, ano, };
    musicas.push(novaMusica);
    res.status(201).json(novaMusica);
  });

exports.put =('/:id', (req, res) => {
    const musica = musicas.find(m => m.id === parseInt(req.params.id));
    if (!musica) return res.status(404).json({ erro: 'musica não encontrado' });
  
    const { titulo, genero, ano,} = req.body;
    if (titulo) musica.titulo = titulo;
    if (genero) musica.genero = genero;
    if (ano) musica.ano = ano;

  
    res.json(musica);
  });
exports.delete = ('/:id', (req, res) => {
    const index = musicas.findIndex(m => m.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ erro: 'Musica não encontrada' });
    musicas.splice(index, 1);
    res.json({ mensagem: 'Musica removida com sucesso' });
  });
exports.busca = ('/:id', (req, res) => {
    const musica = musicas.find(m => m.id === parseInt(req.params.id));
    if (!musica) return res.status(404).json({ erro: 'musica não encontrada' });
    res.json(musica);
  });