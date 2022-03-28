const router = require('express').Router();
const Canvacord = require('canvacord');

router.get('/', (req, res) => {
	if(!req.query.avatar) {
		return res.status(400).json({
			status: 400,
			message: 'Missing avatar parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/canvas/affect?avatar=AVATAR_URL`
		});
	};
try{
    const base = `https://devilish-api.herokuapp.com/api/v1/canvas/changemymind?avatar=${avatar}`
    res.json({url: base})
}catch(error){ 
res.send({error: error})	
}
})

module.exports = router;
