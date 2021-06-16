import express from 'express'
import * as SubtugasController from '../controller/Subtugas'


const router = express.Router()

router.get('/Subtugas-mahasiswa/:id', SubtugasController.getSubTugasById)
router.put('/updateSubtugas-mahasiswa/:id', SubtugasController.updateAllSubtugas)
export default router
