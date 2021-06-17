import * as SubtugasDAO from '../dao/Subtugas'

export const updateSubtugas = async (req, res, next) => {
  try {
    const { id } = req.params
    const UpdateSubtugas = await SubtugasDAO.updateSubtugas(id, req.body.Progress, req.body.skalaPemahaman, req.body.Catatan)
    if (UpdateSubtugas === 1) {
      const subtugas = await SubtugasDAO.findOneSubtugasById(id)
      res.status(200).json({
        message: "Subtugas berhasil di update",
        data: {
          subtugas
        }
      })
    } else {
      const error = new Error("Subtugas gagal di update")
      error.statusCode = 500
      error.cause = 'Subtugas gagal di update'
      throw error
    }
  } catch (error) {
    next(error)
  }
}

export const updateSubtugasLampiran = async (req, res, next) => {
  try {
    const { id } = req.params
    const UpdateSubtugasLampiran = await SubtugasDAO.updateSubtugasLampiran(id, req.body.Lampiran)
    if(UpdateSubtugasLampiran === 1) {
      const subtugas = await SubtugasDAO.findOneSubtugasById(id)
      res.status(200).json({
        message: "Subtugas Berhasil di Update",
        data: {
          subtugas
        }
      })
    } else {
      const error = new Error("Subtugas gagal di update")
      error.statusCode = 500
      error.cause = 'Subtugas gagal di update'
      throw error
    } 
    }catch (error) {
      next(error)
    }
}

export const getSubTugasById = async (req, res, next) => {
    try {
        const { id } = req.params
        const subtugas = await SubtugasDAO.findOneSubtugasById(id)
        res.status(200).json({
          message: 'get subtugas by id tugas sukses',
          data: {
            subtugas
          }
        })
    }
    catch (error) {
        next (error)
    }
}