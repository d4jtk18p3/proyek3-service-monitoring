import express from 'express'
import * as PerkuliahanController from '../controller/Perkuliahan'

const router = express.Router()

router.get('/Perkuliahan-mahasiswa/:id', PerkuliahanController.getAllPerkuliahan)
export default router
