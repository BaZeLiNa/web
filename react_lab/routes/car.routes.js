const Router = require("express");
const router = new Router();
const carController = require("../controller/car.controller");


router.post("/car", (req, res) => {
    const carControllerInstance = new carController();
    carControllerInstance.createCar(req, res);
});

router.get("/car", (req, res) => {
    const carControllerInstance = new carController();
    carControllerInstance.getAllCar(req, res);
});
router.get("/car/:id", (req, res) => {
    const carControllerInstance = new carController();
    carControllerInstance.getOneCar(req, res);
});
router.put("/car", (req, res) => {
    const carControllerInstance = new carController();
    carControllerInstance.updateCar(req, res);
});
router.delete("/car/:id", (req, res) => {
    const carControllerInstance = new carController();
    carControllerInstance.deleteCar(req, res);
});

module.exports = router;
