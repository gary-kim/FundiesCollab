const router = require('express').Router()
const compileAndRun = require('./compileAndRun')

router.route('/java').post((req, res) => {
  const fileName = req.body.fileName
  const examplesClasses = req.body.examplesClasses
  const javaCode = req.body.javaCode
  const roomId = req.body.roomId

  console.time('exampleCompileAndRun')

  compileAndRun(fileName, examplesClasses, javaCode, 'room-' + roomId)
    .then(out => {
      console.log(`Compilation in room ${roomId} took`)
      console.timeEnd('exampleCompileAndRun')

      if (out === '') {
        res.status(400).end()
      } else {
        res
          .status(200)
          .json({ out })
          .end()
      }
    })
    .catch(err => {
      console.log(`Error in room ${roomId}: ${err}`)
      console.timeEnd('exampleCompileAndRun')
      res.status(500).end()
    })
})

router.route('/racket').post((req, res) => {
  res.send('Not implemented yet!')
})

module.exports = router
