const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    nameRemi:{
        type: 'string',
        required: true,

    },
    cedulaRemi:{
        type:'number',
        required: true,
    },
    celularRemi:{
        type:'number',
        required: true,
    },
    municipioRemi:{
        type:'String',
        required: true,
    },
    fechaEnvio:{
        type:'string',
        required: true,
    },
    nameDesti:{
        type:'string',
        required: true,
    },
    cedulaDesti:{
        type:'number',
        required: true,
    },
    celularDesti:{
        type:'number',
        required: true,
    },
    municipioDesti:{
        type:'string',
        required: true,
    },
    direccionDesti:{
        type:'string',
        required: true,
    },
    fechaEntrega:{
        type:'string',
        required: true,
    }
})

module.exports = mongoose.model('Data',dataSchema);