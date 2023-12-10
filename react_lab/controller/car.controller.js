const fs = require("fs");
const path = require("path");

const carsFilePath = path.join(__dirname, "cars.json");

class CarController {
  constructor() {
    this.cars = JSON.parse(fs.readFileSync(carsFilePath, "utf-8"));
  };

  getMaxId() {
    const maxId = this.cars.reduce((max, car) => (car.id > max ? car.id : max), 0);
    return maxId;
  };

  createCar(req, res) {
    try {
      const { name, power, weight, acceleration, price } = req.body;
      const id = this.getMaxId() + 1;
      const newCar = { id, name, power, weight, acceleration, price };

      this.cars.push(newCar);

      fs.writeFileSync(carsFilePath, JSON.stringify(this.cars, null, 2));

      res.json(newCar);
    } catch (error) {
      console.error("Помилка при створенні авто:", error);
      res.status(500).json({ error: "Помилка при створенні авто" });
    }
  };

  sortCarsByParameter(cars, sortBy) {
    if (sortBy) {
      return cars.sort((a, b) => {
        if (a[sortBy] && b[sortBy]) {
          return a[sortBy] - b[sortBy];
        } else {
          return 0;
        }
      });
    }
    return cars;
  };

  getAllCar(req, res) {
    try {
      const { sortBy, searchInput } = req.query;
  
      let sortedCars;
  
      switch (sortBy) {
        case "power":
          sortedCars = this.sortCarsByParameter(this.cars, "power");
          break;
        case "weight":
          sortedCars = this.sortCarsByParameter(this.cars, "weight");
          break;
        case "acceleration":
          sortedCars = this.sortCarsByParameter(this.cars, "acceleration");
          break;
        default:
          sortedCars = this.sortCarsByParameter(this.cars, "name");
          break;
      }
  
      let filteredCars = sortedCars.filter(
        (car) =>
          !searchInput ||
          car.name.toLowerCase().includes(searchInput.toLowerCase())
      );
  
      res.status(200).json(filteredCars);
    } catch (error) {
      console.error("Помилка при отриманні авто:", error);
      res.status(500).json({ error: "Помилка при отриманні авто" });
    }
  }
  
  sortCarsByParameter(cars, parameter) {
    return cars.slice().sort((a, b) => {
      return a[parameter] - b[parameter];
    });
  }
  

  getOneCar(req, res) {
    try {
      const id = req.params.id;
      const oneCar = this.cars.find(car => car.id === parseInt(id));

      if (!oneCar) {
        res.status(404).json({ error: "Авто не знайдено" });
        return;
      }

      res.json(oneCar);
    } catch (error) {
      console.error("Помилка при отриманні одного авто:", error);
      res.status(500).json({ error: "Помилка при отриманні одного авто" });
    }
  };


  updateCar(req, res) {
    try {
      const { id, name, power, weight, acceleration, price } = req.body;
      const carIndex = this.cars.findIndex(car => car.id === parseInt(id));

      if (carIndex !== -1) {
        this.cars[carIndex] = { id: parseInt(id), name, power, weight, acceleration, price };

        fs.writeFileSync(carsFilePath, JSON.stringify(this.cars, null, 2));

        res.json(this.cars[carIndex]);
      } else {
        res.status(404).json({ error: 'Авто не знайдено' });
      }
    } catch (error) {
      console.error("Помилка при оновленні авто:", error);
      res.status(500).json({ error: "Помилка при оновленні авто" });
    }
  };

  deleteCar(req, res) {
    try {
      const id = req.params.id;
      const carIndex = this.cars.findIndex(car => car.id === parseInt(id));

      if (carIndex !== -1) {
        const deletedCar = this.cars.splice(carIndex, 1);

        fs.writeFileSync(carsFilePath, JSON.stringify(this.cars, null, 2));

        res.json(deletedCar[0]);
      } else {
        res.status(404).json({ error: 'Авто не знайдено' });
      }
    } catch (error) {
      console.error("Помилка при видаленні авто:", error);
      res.status(500).json({ error: "Помилка при видаленні авто" });
    }
  };
};

module.exports = CarController;
