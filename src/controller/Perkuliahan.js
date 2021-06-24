import * as PerkuliahanDAO from '../dao/Perkuliahan'

export const getAllPerkuliahan = async (req, res, next) => {
    try{
        const perkuliahan = await PerkuliahanDAO.findAllPerkuliahanById()
        res.status(200).json({
            message: 'get all perkuliahan success',
            data: {
                perkuliahan
            }
        })
    } catch (error){
        next(error)
    }
}