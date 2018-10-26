module.exports={

   getInventory: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log(dbInstance.getAllProd);
        dbInstance.getAllProd().then( (dbResponse) => {console.log(dbResponse);res.status(200).send(dbResponse)} )
    },

    addProduct: (req, res) => {
        let {name, photo, price} = req.body;
         const dbInstance = req.app.get('db');
         dbInstance.addProduct(name, price, photo).then( () => res.sendStatus(200))
    }

}