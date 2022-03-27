import autores from "../models/Autor.js";


class AutoresController {
    static listarAutores = (req, res) => {
        autores.find((err, autores)=> {
            res.status(200).json(autores)
        })
    }


    static listaAutoresPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do autor não localizado`})
            } else {
                res.status(200).send(autores);
            }
        })

    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err)=> {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar autor`})
            } else {
                res.status(201).send(autor)
            }
        })

    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body }, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor Atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })

    }

    static deletaAutorPorId = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do Autor não localizado`})
            } else {
                res.status(200).send(`O autor do n id ${id} foi deletado com sucesso`);
            }
        })

    }

}

export default AutoresController

