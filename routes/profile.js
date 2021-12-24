const express = require("express");
const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();


router.get("/:platform/:gamertag", async(req, res) => {
    try {
        const headers = {
            "TRN-Api-Key": process.env.TRAKCER_API_KEY
        }
        const { platform, gamertag } = req.params;
        const response = await fetch(`${process.env.TRAKCER_API_URL}/profile/${platform}/${gamertag}`, {
            headers
        })
        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            return res.status(404).json({
                message: "Profile Not Found !",
            })
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error !"
        })

    }
})

module.exports = router;