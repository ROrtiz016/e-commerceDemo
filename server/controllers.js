module.exports = {

  ////////Get Products///////////
  getProducts: (req, res, next) => {
    const db = req.app.get('db')

    db.get_all_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Something went wrong' })
        console.log(err)
      })
  },

  ////////////GET CART///////////////
  getCart: (req, res, next) => {
    const db = req.app.get('db')
    db.get_cart()
      .then(cart => res.send(cart))
      .catch(err => console.log(err))
  },

////////////////////////
  ///////////Add to Cart//////////
  addToCart: (req, res, next) => {
    const db = req.app.get('db')
    const { id } = req.params

    if (req.body.quantity) {
      db.add_to_cart([id, req.body.quantity])
        .then(cart => {
          return res.status(200).send(cart)
        })
    } else {
      db.check_cart_for_products([id])
        .then(result => {
          let qty = result[0] ? result[0].quantity : 0;
          qty++
          db.add_to_cart([id, qty])
            .then(cart => res.status(200).send(cart))
            .catch(err => {
              res.status(500).send({
                errorMessage: 'Something worng at addToCart'
              })
              console.log(err)
            })
        }
        )
    }
  },

  ////////////Select Product/////////
  getSelectedProduct: (req, res, next) => {
    const db = req.app.get('db')
    const { params } = req;

    db.get_selected_products([params.id])
      .then(selected => res.status(200).send(selected))
      .catch(err => {
        res.status(500).send({
          errorMessage: 'Something went wrong'
        })
        console.log(err)
      })
  },

  /////////////Delete Product///////////
  delete: (req, res, next) => {
    const { id } = req.params;
    const db = req.app.get('db');
    db.delete([id]).then(id => res.status(200).send(id))
      .catch(err => console.log(err))
  },

  deleteAllCart: (req, res, next) => {
    const db = req.app.get('db')
    db.delete_all_cart()
      .then(cart => res.status(200).send(cart))
      .catch(err => console.log(err))
  }

}