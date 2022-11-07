const createError = require("http-errors")
const query = require("./../../../db/sqLite/queries/product.query")
const productCheck = require("./../../validations/product.validation")
const { ID } = require("./../../../utitlty/helper")

async function getFiles(req) {
  return await new Promise((resolve, reject) => {
    require("formidable")({ multiples: true }).parse(
      req,
      (err, fields, files) => {
        if (err) {
          reject(err)
          return
        }
        resolve({ fields, files })
      }
    )
  })
}
async function handleFiles(req) {
  const data = await getFiles(req)
  const imgPaths = await writeImages(data.files)
  data.fields["images"] = imgPaths
  return data.fields
}
async function writeImages(files) {
  const folder = `${appRoot}/public/images`,
    fs = require("fs"),
    imgPaths = []
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder)
  }
  for (const file in files) {
    const oldPath = files[file].filepath,
      imagName = `product${ID()}.jpg`,
      newPath = `${folder}/${imagName}`,
      rawData = await fs.readFileSync(oldPath)
    await fs.writeFileSync(newPath, rawData)
    imgPaths.push(imagName)
  }
  return imgPaths.join()
}

module.exports = {
  add: async (req, res, next) => {
    const {
      id,
      title,
      description,
      sku,
      category,
      price,
      discount_id,
      images
    } = await handleFiles(req)
    // try {
    //   await productCheck.validateAsync({
    //     title,
    //     description,
    //     sku,
    //     category,
    //     images,
    //     price,
    //     discount_id
    //   })
    // } catch (err) {
    //   return next(createError(422, "Invalid Data."))
    // }
    if (id) {
      db.run(
        query.setUpdate(
          id,
          title,
          description,
          sku,
          category,
          images,
          price,
          discount_id,
          new Date().getTime()
        ),
        (err, rows) => {
          if (err) return next(err)
          db.all(query.getAll, (err, rows) => {
            if (err) return next(err)
            res.status(200).send(rows)
          })
        }
      )
    } else {
      db.run(query.table, (err) => {
        if (err) return next(err)
        db.run(
          query.add,
          [
            title,
            description,
            sku,
            category,
            images,
            price,
            discount_id,
            new Date().getTime(),
            new Date().getTime()
          ],
          (err) => {
            if (err) next(err)
            db.all(query.getAll, (err, rows) => {
              if (err) return next(err)
              res.status(200).send(rows)
            })
          }
        )
      })
    }
  },
  getAll: (req, res, next) => {
    db.all(query.getAll, (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  },
  getAllByCategory: (req, res, next) => {
    const { category } = req.params
    db.all(query.getAllByCategory(category), (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  },
  setDelete: (req, res, next) => {
    db.run(query.setDelete(req.body.id), (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  }
}
