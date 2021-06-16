import Subtugas from '../models/Subtugas'

export const updateSubtugas = async (id, Progress, skalaPemahaman, Catatan, Lampiran) => {
  try {
    const subtugas = await Subtugas.update(
      {
        progress: Progress,
        skala_pemahaman: skalaPemahaman,
        catatan: Catatan,
        lampiran: Lampiran
      },
      {
        where: {
          id
        },
        silent: true
      }
    )
    return subtugas[0]
  } catch (error) {
      console.error(error)
  }
}

export const findOneSubtugasById = async (id) => {
    try {
      const subtugas = await Subtugas.findAll({
        where: {
          id
        }
      })
      return subtugas[0]
    } catch (error) {
      console.error(error)
    }
  }