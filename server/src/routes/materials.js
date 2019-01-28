/**
 * Created by Ergardt.Vladimir on 24.01.2019.
 */

const express = require('express')
const router = express.Router()
const Material = require('../models/material-models')

/**
 * Добавить материал
 */
router.post('/addMaterial', (req, res) => {
    const material = new Material({
        name: req.body.name,
        start_size_grain: req.body.start_size_grain,
        layer_thickness: req.body.layer_thickness,
        start_porosity: req.body.start_porosity,
        surface_energy: req.body.surface_energy,
        density: req.body.density,
        viscosity: req.body.viscosity,
        weight: req.body.weight,
        pf_s_diff: req.body.pf_s_diff,
        ea_s_diff: req.body.ea_s_diff,
        pf_c_diff: req.body.pf_c_diff,
        ea_c_diff: req.body.ea_c_diff,
    })
    material.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `Material with id:${data._id} saved`
            })
        }
    })
})

/**
 * Получить список керамических материалов
 */
router.post('/getMaterials', (req, res) => {
    Material.find({} ,(err, data) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send( { data: data } )
        }
    })
})

/**
 * Получить материал по id
 */
router.post('/getMaterial', (req, res) => {
    Material.findById(req.body.id ,(err, data) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send( { data: data } )
        }
    })
})

/**
 * Удалить материал по id
 */
router.post('/deleteMaterial', (req, res) => {
    Material.remove({ _id: req.body.id } ,(err, data) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send( { status: 'delete success' } )
        }
    })
})

/**
 * Обновить материал по id
 */
router.post('/updateMaterial', (req, res) => {
    Material.findById( req.body.id,(err, material) => {
        if (err) {
            res.sendStatus(500)
        } else {
            const keys = Object.keys(req.body);
            keys.map((key) => {
               material[key] = req.body[key];
            });
            material.save(err => {
                if (err) {
                    res.sendStatus(500)
                } else {
                    res.send({ status: 'update success' })
                }
            })
        }

    })
})


module.exports = router