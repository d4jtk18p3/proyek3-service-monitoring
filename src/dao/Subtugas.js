import Subtugas from '../models/Subtugas'

export const updateSubtugas = async (id, Progress, skalaPemahaman, Catatan) => {
  try {
    const subtugas = await Subtugas.update(
      {
        progress: Progress,
        skala_pemahaman: skalaPemahaman,
        catatan: Catatan,
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

export const updateSubtugasLampiran = async (id, Lampiran) => {
  try {
    const subtugas = await Subtugas.update(
      {
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
    console.log(error)
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