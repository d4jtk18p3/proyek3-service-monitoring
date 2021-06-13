import express from 'express'
import * as TugasController from '../controller/Tugas'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

// router.post('/tugas-baru', ValidatorSanitizer.postNewTugas, TugasController.postNewTugas)
// router.get('/tugas/:id_tugas', TugasController.getTugasById)
// router.get('/tugas/:nip', TugasController.getTugasBynip)
router.get('/tugas/:id_tugas', TugasController.getSubTugasById)
export default router