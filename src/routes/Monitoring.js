import express from 'express'
import * as TugasController from '../controller/Tugas'
import * as SubtugasController from '../controller/Subtugas'
import * as MatkulController from '../controller/Mata Kuliah'
import * as KelasController from '../controller/Kelas'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

router.post('/dosen/tugas-baru', ValidatorSanitizer.postNewTugas, TugasController.postNewTugas)
router.get('/common/tugas/:id', TugasController.getTugasById)
router.post('/dosen/new-task', ValidatorSanitizer.postNewSubtugas, SubtugasController.postNewSubtugas)
router.get('/common/task/:id_subtugas', SubtugasController.getSubtugasById)
router.get('/dosen/matkul/:nip/:id_kelas', MatkulController.getMatkulAjarByDosen)
router.get('/dosen/kelas/:nip', KelasController.getKelasAjarByDosen)
router.get('/common/tugasByMatkul/:id_matkul/:id_perkuliahan', TugasController.getTugasByMatkul)
router.get('/common/mahasiswaByTugas/:id', TugasController.getAllMahasiswaAssignedTugas)
router.get('/common/subtugasByTugas/:id_tugas', SubtugasController.getSubtugasByTugas)
router.get('/common/getKriteria/:id', TugasController.getKriteriaOfTugas)
router.put('/common/updateSubtugas/:id', SubtugasController.updateSubtugasById)

export default router