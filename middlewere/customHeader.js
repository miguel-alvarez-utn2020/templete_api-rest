const customHeader = (req, res, next) => {
    try{
        const apiKey = req.headers.api_key;
        if(apiKey === 'Migue9999'){
            next();
        }else{
            res.status(403);
            res.send({error: "api_key incorrecta"});
        }
    }catch(e){
        res.status(403);
        res.send({error: "Error, custom header"});
    }
}

module.exports = customHeader;