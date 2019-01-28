/**
 * Created by Ergardt.Vladimir on 24.01.2019.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const materialSchema = new Schema({
    name: { type: String },
    start_size_grain: { type: Number },
    layer_thickness: { type: Number },
    start_porosity: { type: Number },
    surface_energy: { type: Number },
    density: { type: Number },
    viscosity: { type: Number },
    weight: { type: Number },
    pf_s_diff: { type: Number },
    ea_s_diff: { type: Number },
    pf_c_diff: { type: Number },
    ea_c_diff: { type: Number },
})

const materialModel = mongoose.model('materials', materialSchema)
module.exports = materialModel