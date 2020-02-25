const express = require('express');
const contact = require('../../models/contracts');
const router = express.Router();

// @route   GET api/contract
// @desc    Get all contract
// @access  public
router.get('/', async (req, res) => {
  console.log('contract GET ROUTE');
  const allContect = await contact.findAll().catch(err => {
    return res.status(500).json({ msg: err });
  });
  console.log(allContect);
  return res.json(allContect);
});

// @route   POST api/contract
// @desc    ADD new contact
// @access  public
router.post('/', async (req, res) => {
  console.log('POST ROUTE');
  const { Name, Phone, Title, imgUrl } = req.body;
  thisTime = Date.now();
  const cont = await contact
    .create({
      name: Name,
      phone: Phone,
      title: Title,
      avatar: imgUrl,
      created_at: thisTime
    })
    .catch(err => {
      return res.status(500).json({ msg: err });
    });
  return res.json(cont);
});

// @route   DELETE api/contract
// @desc    DELETE some contact
// @access  public
router.delete('/:id', async (req, res) => {
  const deleteContentId = req.params.id;
  await contact
    .destroy({
      where: {
        id: deleteContentId
      }
    })
    .catch(err => {
      return res.status(500).json({ msg: err });
    });
  return res.json('');
});
// @route   UPDATE api/contract
// @desc    UPDATE some contact
// @access  public
router.put('/:id', async (req, res) => {
  const updateContentId = req.params.id;
  const { Name, Phone, Title, imgUrl } = req.body;
  console.log(imgUrl);
  try {
    const cont = await contact.update(
      {
        title: Title,
        name: Name,
        phone: Phone,
        avatar: imgUrl,
        update_at: Date.now()
      },
      {
        where: { id: updateContentId }
      }
    );
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
  return res.json(imgUrl);
});
module.exports = router;
