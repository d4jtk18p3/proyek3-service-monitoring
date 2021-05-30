import * as KriteriaDAO from '../dao/Kriteria'
import { validationResult } from 'express-validator/check'

export const postNewKriteria = async (req, res, next) => {
    try {
    const { id_kriteria,
        status_progress,
        status_durasi,
        status_skala,
        status_catatan,
        status_lampiran,
        id_subtugas,
        nim } = req.body
    const now = new Date()
    const { createdAt, updatedAt} = now
    const error = validationResult(req)
    if (!error.isEmpty()) {
        error.status = 400
        throw error
    }
    const kriteria = await KriteriaDAO.insertOneKriteria(id_kriteria,
                                                        status_progress,
                                                        status_durasi,
                                                        status_skala,
                                                        status_catatan,
                                                        status_lampiran,
                                                        createdAt,
                                                        updatedAt,
                                                        id_subtugas,
                                                        nim)
    res.status(200).json({
        message: 'insert kriteria sukses',
        data: {
            kriteria
        }
    })
}
    catch (error) {
        next(error)
    }
}

export const getKriteriaById = async (req, res, next) => {
    try {
        const id_kriteria = req.params.id_kriteria
        const kriteria = await KriteriaDAO.findKriteriaById(id_kriteria)
        res.status(200).json({
            message: 'get kriteria by id sukses',
            data: {
                kriteria
            }
        })
    }
    catch (error) {
        next(error)
    }
}