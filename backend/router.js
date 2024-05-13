const express = require("express");
const {findFavoriteByAny,findFavoriteById, findFavoriteByUser, findFavoriteByMovie, addFavorite, 
updateFavorite,deleteFavorite} = require("./db.js");
const router = express.Router();
router.get("/favorite/", async(req, res) => {
    try {
        const favorites = await findFavoriteByAny();
        res.json(favorites); 
    } catch (error) {
        res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des favoris." });
    }
});
router.get("/favorite/:val", async(req, res) => {
    try {
        const favorites = await findFavoriteById();
        res.json(favorites); 
    } catch (error) {
        res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des favoris." });
    }
});
router.post("/favorite/", async(req, res) => {
    if (!req.body.movie){
        res.status(500).json({ error: "movie obligatoire" });
    }
    else if (!req.body.user){
        res.status(500).json({ error: "user obligatoire" });
    }
    else if (!req.body.user && !req.body.movie){
        res.status(500).json({ error: "user et movie obligatoire" });
    }
    try {
        res.json(addFavorite(req.body.user, req.body.movie));
    } catch (error){
        res.status(500).json({ error: "Une erreur s'est produite lors de l'ajout d'un favoris." });
    }
});
router.patch("/favorite/:val", async(req, res) => {
    if (!req.body.movie){
        res.status(500).json({ error: "movie obligatoire" });
    }
    else if (!req.body.user){
        res.status(500).json({ error: "user obligatoire" });
    }
    else if (!req.body.user && !req.body.movie){
        res.status(500).json({ error: "user et movie obligatoire" });
    }
    try {
        res.json(updateFavorite(req.params.attribut, req.body.user, req.body.movie));
    } catch (error){
        res.status(500).json({ error: "Une erreur s'est produite lors de la mise à jour d'un favoris." });
    }
});
router.delete("/favorite/:val", async(req, res) => {
    try {
        res.json(deleteFavorite(req.params.attribut));
    } catch (error){
        res.status(500).json({ error: "Une erreur s'est produite lors de l'ajout d'un favoris." });
    }
});
router.use((req, res) => {
 res.status(404);
 res.json({
 error: `${req.method + ":" + req.originalUrl} Page not found`,
 });
});
module.exports = router;