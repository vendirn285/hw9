const errorHandler = (err, req, res, next) => {
    if(err.name === 'notFound') {
        res.status(404).json({message: 'Movie yang anda cari tidak ditemukan'})
    }

};

module.exports = errorHandler;