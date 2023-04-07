const notesControllers = {  //Aca esta,mos creando un objeto al que le cargaremos las diferentes propiedades.

}

const Note = require('../models/Note')  //Aca estamos importando el modelo de las notas.




notesControllers.getNotes = async (req,res)=>{  //Aca estamos obteniendo las notas que tenemos en la base de datos.
    const notes = await Note.find();
    res.json(notes)
}

notesControllers.createNote = async(req,res)=>{ //Aca estamos creando notas que enviaremos a la base de datos.
    const {title, content, author, date} = req.body;    //Aca vamos a tener los datos que mandaremos desde el formulario
        const newNote = new Note({                      //
            title,
            content,
            author,
            date
        })
        await newNote.save();    
        console.log('save');      //Una ves completado todos los cambios me va a mandar este mensaje
    res.json({message: 'Nota guardada'})

}

notesControllers.getNote = async(req,res)=>{
    const note = await Note.findById(req.params.id)
    console.log(note);
    res.json(note.content)
}

notesControllers.updateNote = async(req,res)=>{
    const {title, content, author} = req.body;
    await Note.findByIdAndUpdate({_id: req.params.id},{
        title,
        content,
        author,
    })
    res.json({message: 'Note updated'})
}

notesControllers.deleteNote = async(req,res)=>{
    await Note.findByIdAndDelete(req.params.id)
    res.json({message: 'Note deleted'})
}

module.exports = notesControllers;