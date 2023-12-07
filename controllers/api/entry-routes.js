const router = require('express').Router();
const entry = require('../../models/jobopenings');

router.post('/', async (req, res) => {
  try {
    const jobOpening = await entry.create({
      title: req.body.job_title,
      description: req.body.comment,
      contact: req.body.guest,
    });
    res.status(200).json(jobOpening);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const entry = await entry.update(
      {
        title: req.body.job_title,
        description: req.body.comment,
        contact: req.body.guest,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(entry);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
