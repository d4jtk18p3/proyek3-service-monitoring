import * as TugasDAO from '../dao/Tugas'
// import { validationResult } from 'express-validator/check'

export const getAlltugas = async (req, res, next) => {
  try{
      const {id_perkuliahan} = req.params
      const tugas = await TugasDAO.findAllTugasByIdPerkuliahan(id_perkuliahan)
      res.status(200).json({
          message: 'get all tugas perkuliahan success',
          data: {
              tugas
          }
      })
  } catch (error){
      next(error)
  }
}
// export const postNewTugas = async (req, res, next) => {
//   try {
//     const { id_tugas, nama_tugas, createdAt, UpdateAt, id_perkuliahan } = req.body
//     const error = validationResult(req)
    
//       if (!error.isEmpty()) {
//         error.status = 400
//         throw error
//       }
    
//       const dosen = await TugasDAO.insertOneTugas(id_tugas, nama_tugas, createdAt, UpdateAt, id_perkuliahan)
    
//       res.status(200).json({
//         message: 'insert tugas sukses',
//         data: {
//           tugas
//         }
//       })
//   }
//   catch (error) {
//     next(error)
//   }
// }

// export const getTugasBynip = async (req, res, next) => {
//     try {
//         const { nip } = req.params
//         const tugas = await TugasDAO.findTugasBynip(nip)
//         if (tugas === undefined){
//           res.status(200).json({
//             message: 'get tugas by nip gagal',
//             data: {
//               tugas
//             }
//           })
//         } else {
//           res.status(200).json({
//             message: 'get tugas by nip berhasil',
//             data: {
//               tugas
//             }
//           })
//         }
//     }
//     catch (error) {
//         next(error)
//     }
// }

// export const getSubTugasById = async (req, res, next) => {
//     try {
//         const { id_tugas } = req.params
//         const subtugas = await TugasDAO.getSubTugasById(id_tugas)
//         res.status(200).json({
//           message: 'get subtugas by id tugas sukses',
//           data: {
//             subtugas
//           }
//         })
//     }
//     catch (error) {
//         next (error)
//     }
// }

// export const getTugasById = async (req, res, next) => {
//     try {
//         const { id } = req.params
//         const tugas = await TugasDAO.findTugasById(id)
//         res.status(200).json({
//             message: 'get tugas by id sukses',
//             data: {
//                 tugas
//             }
//         })
//     }
//     catch (error) {
//         next(error)
//     }
// }