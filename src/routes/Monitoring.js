import express from 'express'
import * as TugasController from '../controller/Tugas'
import * as SubtugasController from '../controller/Subtugas'
import * as KriteriaController from '../controller/Kriteria'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

router.post('/dosen/tugas-baru', ValidatorSanitizer.postNewTugas, TugasController.postNewTugas)
router.get('/common/tugas/:id', TugasController.getTugasById)
router.post('/dosen/new-task', ValidatorSanitizer.postNewSubtugas, SubtugasController.postNewSubtugas)
router.get('/common/task/:id_subtugas', SubtugasController.getSubtugasById)
router.post('/dosen/new-task-kriteria', ValidatorSanitizer.postNewKriteria, KriteriaController.postNewKriteria)
router.get('/common/task-kriteria/:id_kriteria', KriteriaController.getKriteriaById)

export default router