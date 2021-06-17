import express from 'express'
import morgan from 'morgan'
// import cors from 'cors'
import bodyParser from 'body-parser'

// import keycloak from './middleware/keycloak'
// import dosenRouter from './routes/Dosen'
// import mahasiswaRouter from './routes/Mahasiswa'
// import userRouter from './routes/User'
import tugasRouter from './routes/Tugas'
import subtugasRouter from './routes/Subtugas'
import perkuliahanRouter from './routes/Perkuliahan'

const app = express()
// app.use(cors())
// Non aktifkan dulu keycloak agar tidak ada validasi token
// app.use(keycloak.middleware())
// app.use(keycloak.protect())
app.use(bodyParser.json())
app.use(morgan('dev'))
// app.use('/dosen', dosenRouter)
// app.use('/mahasiswa', mahasiswaRouter)
// app.use('/user', userRouter)
// app.use('/api/tugas-nip', tugasRouter)
app.use('/api/tugas-id', tugasRouter)
app.use('/api/subtugas-id', subtugasRouter)
app.use('/api/subtugasLampiran-id', subtugasRouter)
app.use('/api/perkuliahan-id', perkuliahanRouter)
// error handling
app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const cause = error.cause || 'Internal Server Error'
  res.status(status).json({
    message: message,
    error: status,
    cause: cause
  })
})

export default app
